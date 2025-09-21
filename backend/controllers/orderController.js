import Razorpay from "razorpay";
import crypto from "crypto";
import Order from "../models/orderModel.js";
import dotenv from "dotenv";
dotenv.config();
const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

// 🟢 Step 1: Create Razorpay Order
export const createOrder = async (req, res) => {
  try {
    const { items, totalPrice } = req.body;

    const options = {
      amount: totalPrice * 100, // paisa
      currency: "INR",
      receipt: `receipt_${Date.now()}`,
    };

    const order = await razorpay.orders.create(options);

    // Save in DB
    const newOrder = new Order({
      userId: req.userId,
      items,
      amount: totalPrice,
      razorpayOrderId: order.id,
      status: "Pending",
    });
    await newOrder.save();

    res.json({
      success: true,
      key: process.env.RAZORPAY_KEY_ID,
      orderId: order.id,
      amount: order.amount,
      currency: order.currency,
    });
  } catch (error) {
    console.error("Create Order Error:", error.message);
    res.status(500).json({ success: false, error: error.message });
  }
};

// 🟢 Step 2: Verify Razorpay Payment
export const verifyPayment = async (req, res) => {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
      req.body;

    const sign = razorpay_order_id + "|" + razorpay_payment_id;
    const expectedSign = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
      .update(sign.toString())
      .digest("hex");

    if (razorpay_signature === expectedSign) {
      await Order.findOneAndUpdate(
        { razorpayOrderId: razorpay_order_id, userId: req.userId },
        { status: "Paid", razorpayPaymentId: razorpay_payment_id }
      );
      return res.json({ success: true, message: "Payment verified!" });
    } else {
      await Order.findOneAndUpdate(
        { razorpayOrderId: razorpay_order_id, userId: req.userId },
        { status: "Failed" }
      );
      return res.json({ success: false, message: "Invalid signature!" });
    }
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};



// // Get all orders for admin
// export const getAllOrders = async (req, res) => {
//   try {
//     const orders = await Order.find()
//       .populate("userId", "name email") // user info
//       .populate("items.productId", "name") // product info
//       .sort({ createdAt: -1 });

//     res.json({ success: true, orders });
//   } catch (error) {
//     console.error("Get Orders Error:", error);
//     res.status(500).json({ success: false, message: error.message });
//   }
// };


// Get All Orders (Admin)
export const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find()
      .populate("userId", "name email phone address") // ✅ extra fields
      .populate("items.productId", "name") // ✅ product info
      .sort({ createdAt: -1 });

    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ message: "Error fetching orders", error });
  }
};
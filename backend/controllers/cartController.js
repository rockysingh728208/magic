import User from "../models/userModel.js";

// Get cart
export const getCart = async (req, res) => {
  try {
    const user = await User.findById(req.userId).select("cartData");
    if (!user) return res.status(404).json({ success: false, message: "User not found" });
    res.json({ success: true, cart: user.cartData });
  } catch (err) {
    console.error("Get Cart Error:", err.message);
    res.status(500).json({ success: false, message: err.message });
  }
};

// Add to cart
export const addToCart = async (req, res) => {
  try {
    const { productId, name, image, price } = req.body;
    const user = await User.findById(req.userId);
    if (!user) return res.status(404).json({ success: false, message: "User not found" });

    const existingItem = user.cartData.find(item => item.productId === productId);

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      user.cartData.push({ productId, name, image, price, quantity: 1 });
    }

    await user.save();
    res.json({ success: true, cart: user.cartData });
  } catch (err) {
    console.error("Add Cart Error:", err.message);
    res.status(500).json({ success: false, message: err.message });
  }
};

// Remove from cart
export const removeFromCart = async (req, res) => {
  try {
    const { productId } = req.body;
    const user = await User.findById(req.userId);
    if (!user) return res.status(404).json({ success: false, message: "User not found" });

    user.cartData = user.cartData.filter(item => item.productId !== productId);
    await user.save();
    res.json({ success: true, cart: user.cartData });
  } catch (err) {
    console.error("Remove Cart Error:", err.message);
    res.status(500).json({ success: false, message: err.message });
  }
};

// Update quantity
export const updateQuantity = async (req, res) => {
  try {
    const { productId, quantity } = req.body;
    if (quantity < 1) return res.status(400).json({ success: false, message: "Quantity must be at least 1" });

    const user = await User.findById(req.userId);
    if (!user) return res.status(404).json({ success: false, message: "User not found" });

    const item = user.cartData.find(item => item.productId === productId);
    if (!item) return res.status(404).json({ success: false, message: "Product not found in cart" });

    item.quantity = quantity;
    await user.save();
    res.json({ success: true, cart: user.cartData });
  } catch (err) {
    console.error("Update Quantity Error:", err.message);
    res.status(500).json({ success: false, message: err.message });
  }
};

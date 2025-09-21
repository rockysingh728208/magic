
// import React, { useContext } from "react";
// import { CartContext } from "../context/CartContext";

// const MyOrder = () => {
//   const { cart, increaseQty, decreaseQty, removeFromCart } =
//     useContext(CartContext);

//   if (cart.length === 0) {
//     return (
//       <h2 className="text-center mt-10 text-xl text-gray-600">
//         🛒 Your cart is empty
//       </h2>
//     );
//   }

//   // total bill calculation
//   const total = cart.reduce((acc, item) => acc + item.price * item.qty, 0);

//   return (
//     <div className="p-4 sm:p-6 lg:p-10">
//       <h1 className="text-2xl font-bold mb-6 text-center">My Orders</h1>
//       <div className="space-y-4">
//         {cart.map((item) => (
//           <div
//             key={item.id}
//             className="flex flex-col sm:flex-row sm:items-center justify-between border rounded-lg shadow-md p-4 gap-4 bg-white"
//           >
//             {/* left: image + details */}
//             <div className="flex items-center gap-4">
//               <img
//                 src={item.image}
//                 alt={item.name}
//                 className="w-20 h-20 object-contain bg-gray-100 rounded-lg"
//               />
//               <div>
//                 <h2 className="text-lg font-semibold">{item.name}</h2>
//                 <p className="text-gray-600">₹{item.price}</p>
//               </div>
//             </div>

//             {/* middle: qty control */}
//             <div className="flex items-center gap-3">
//               <button
//                 onClick={() => decreaseQty(item.id)}
//                 className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 transition"
//               >
//                 -
//               </button>
//               <span className="font-semibold">{item.qty}</span>
//               <button
//                 onClick={() => increaseQty(item.id)}
//                 className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 transition"
//               >
//                 +
//               </button>
//             </div>

//             {/* price */}
//             <p className="font-bold text-blue-600">
//               ₹{item.price * item.qty}
//             </p>

//             {/* remove button */}
//             <button
//               onClick={() => removeFromCart(item.id)}
//               className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded-lg transition"
//             >
//               Remove
//             </button>
//           </div>
//         ))}
//       </div>

//       {/* total */}
//       <div className="mt-8 p-4 bg-gray-100 rounded-lg flex justify-between items-center">
//         <h2 className="text-lg font-semibold">Total</h2>
//         <p className="text-xl font-bold text-blue-600">₹{total}</p>
//       </div>
//     </div>
//   );
// };

// export default MyOrder;



// import React, { useContext } from "react";
// import { CartContext } from "../context/CartContext";

// const MyOrder = () => {
//   const { cart, increaseQty, decreaseQty, removeFromCart } = useContext(CartContext);

//   if (cart.length === 0) {
//     return (
//       <h2 className="text-center mt-10 text-xl text-gray-600">
//         🛒 Your cart is empty
//       </h2>
//     );
//   }

//   // total bill calculation
//   const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

//   return (
//     <div className="p-4 sm:p-6 lg:p-10">
//       <h1 className="text-2xl font-bold mb-6 text-center">My Orders</h1>
//       <div className="space-y-4">
//         {cart.map((item) => (
//           <div
//             key={item.productId}
//             className="flex flex-col sm:flex-row sm:items-center justify-between border rounded-lg shadow-md p-4 gap-4 bg-white"
//           >
//             {/* left: image + details */}
//             <div className="flex items-center gap-4">
//               <img
//                 src={item.image}
//                 alt={item.name}
//                 className="w-20 h-20 object-contain bg-gray-100 rounded-lg"
//               />
//               <div>
//                 <h2 className="text-lg font-semibold">{item.name}</h2>
//                 <p className="text-gray-600">₹{item.price}</p>
//               </div>
//             </div>

//             {/* middle: qty control */}
//             <div className="flex items-center gap-3">
//               <button
//                 onClick={() => decreaseQty(item.productId)}
//                 className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 transition"
//               >
//                 -
//               </button>
//               <span className="font-semibold">{item.quantity}</span>
//               <button
//                 onClick={() => increaseQty(item.productId)}
//                 className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 transition"
//               >
//                 +
//               </button>
//             </div>

//             {/* price */}
//             <p className="font-bold text-blue-600">
//               ₹{item.price * item.quantity}
//             </p>

//             {/* remove button */}
//             <button
//               onClick={() => removeFromCart(item.productId)}
//               className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded-lg transition"
//             >
//               Remove
//             </button>
//           </div>
//         ))}
//       </div>

//       {/* total */}
//       <div className="mt-8 p-4 bg-gray-100 rounded-lg flex justify-between items-center">
//         <h2 className="text-lg font-semibold">Total</h2>
//         <p className="text-xl font-bold text-blue-600">₹{total}</p>
//       </div>
//     </div>
//   );
// };

// export default MyOrder;




// import React, { useContext } from "react";
// import { CartContext } from "../context/CartContext";
// import axios from "axios";
// import { AppContext } from "../pages/Appcontext";
// import { toast } from "react-toastify";

// const MyOrder = () => {
//   const { cart, increaseQty, decreaseQty, removeFromCart } = useContext(CartContext);
//   const { backendUrl, token } = useContext(AppContext);

//   if (cart.length === 0) {
//     return (
//       <h2 className="text-center mt-10 text-xl text-gray-600">
//         🛒 Your cart is empty
//       </h2>
//     );
//   }

//   // total bill calculation
//   const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

//   // 🔹 Proceed to Checkout Function
//   const handleCheckout = async () => {
//     if (!token) return toast.error("Please login first!");

//     try {
//       const { data } = await axios.post(
//         `${backendUrl}/api/order/create`,
//         {
//           items: cart,       // poora cart
//           totalPrice: total, // total price
//         },
//         { headers: { Authorization: `Bearer ${token}` } }
//       );

//       if (data.success) {
//         toast.success("✅ Order placed successfully!");
//         // Optional: cart ko empty karna ho to
//         // setCart([]);  <-- ye CartContext se handle hoga
//       }
//     } catch (error) {
//       console.log("Checkout Error:", error.response?.data || error.message);
//       toast.error("❌ Checkout failed!");
//     }
//   };

//   return (
//     <div className="p-4 sm:p-6 lg:p-10">
//       <h1 className="text-2xl font-bold mb-6 text-center">My Orders</h1>
//       <div className="space-y-4">
//         {cart.map((item) => (
//           <div
//             key={item.productId}
//             className="flex flex-col sm:flex-row sm:items-center justify-between border rounded-lg shadow-md p-4 gap-4 bg-white"
//           >
//             {/* left: image + details */}
//             <div className="flex items-center gap-4">
//               <img
//                 src={item.image}
//                 alt={item.name}
//                 className="w-20 h-20 object-contain bg-gray-100 rounded-lg"
//               />
//               <div>
//                 <h2 className="text-lg font-semibold">{item.name}</h2>
//                 <p className="text-gray-600">₹{item.price}</p>
//               </div>
//             </div>

//             {/* middle: qty control */}
//             <div className="flex items-center gap-3">
//               <button
//                 onClick={() => decreaseQty(item.productId)}
//                 className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 transition"
//               >
//                 -
//               </button>
//               <span className="font-semibold">{item.quantity}</span>
//               <button
//                 onClick={() => increaseQty(item.productId)}
//                 className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 transition"
//               >
//                 +
//               </button>
//             </div>

//             {/* price */}
//             <p className="font-bold text-blue-600">
//               ₹{item.price * item.quantity}
//             </p>

//             {/* remove button */}
//             <button
//               onClick={() => removeFromCart(item.productId)}
//               className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded-lg transition"
//             >
//               Remove
//             </button>
//           </div>
//         ))}
//       </div>

//       {/* total + checkout button */}
//       <div className="mt-8 p-4 bg-gray-100 rounded-lg flex flex-col sm:flex-row justify-between items-center gap-4">
//         <h2 className="text-lg font-semibold">Total</h2>
//         <p className="text-xl font-bold text-blue-600">₹{total}</p>
//         <button
//           onClick={handleCheckout}
//           className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg transition"
//         >
//           Proceed to Checkout
//         </button>
//       </div>
//     </div>
//   );
// };

// export default MyOrder;

import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import axios from "axios";
import { AppContext } from "../pages/Appcontext";
import { toast } from "react-toastify";

const MyOrder = () => {
  const { cart, increaseQty, decreaseQty, removeFromCart } =
    useContext(CartContext);
  const { backendUrl, token } = useContext(AppContext);

  if (cart.length === 0) {
    return (
      <h2 className="text-center mt-10 text-xl text-gray-600">
        🛒 Your cart is empty
      </h2>
    );
  }

  // total bill calculation
  const total = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  // 🔹 Proceed to Checkout Function (Razorpay Integration)
  const handleCheckout = async () => {
    if (!token) return toast.error("Please login first!");

    try {
      // 1️⃣ Create order from backend
      const { data } = await axios.post(
        `${backendUrl}/api/order/create`,
        {
          items: cart,
          totalPrice: total,
        },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      if (!data.success) {
        return toast.error("Order creation failed!");
      }

      // 2️⃣ Open Razorpay popup
      const options = {
        key: data.key, // Razorpay key_id from backend
        amount: data.amount,
        currency: data.currency,
        name: "Electrical Shop",
        description: "Order Payment",
        order_id: data.orderId, // order id from backend
        handler: async function (response) {
          // 3️⃣ Verify payment on backend
          try {
            const verifyRes = await axios.post(
              `${backendUrl}/api/order/verify`,
              {
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature,
              },
              { headers: { Authorization: `Bearer ${token}` } }
            );

            if (verifyRes.data.success) {
              toast.success("✅ Payment successful!");
              // TODO: Empty cart if you want
              // clearCart();
            } else {
              toast.error("❌ Payment verification failed!");
            }
          } catch (error) {
            console.error("Verify Error:", error);
            toast.error("❌ Payment verification error!");
          }
        },
        prefill: {
          name: "Customer Name",
          email: "customer@example.com",
          contact: "9999999999",
        },
        theme: {
          color: "#0d6efd",
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      console.error("Checkout Error:", error.response?.data || error.message);
      toast.error("❌ Checkout failed!");
    }
  };

  return (
    <div className="p-4 sm:p-6 lg:p-10">
      <h1 className="text-2xl font-bold mb-6 text-center">My Orders</h1>
      <div className="space-y-4">
        {cart.map((item) => (
          <div
            key={item.productId}
            className="flex flex-col sm:flex-row sm:items-center justify-between border rounded-lg shadow-md p-4 gap-4 bg-white"
          >
            {/* left: image + details */}
            <div className="flex items-center gap-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-20 h-20 object-contain bg-gray-100 rounded-lg"
              />
              <div>
                <h2 className="text-lg font-semibold">{item.name}</h2>
                <p className="text-gray-600">₹{item.price}</p>
              </div>
            </div>

            {/* middle: qty control */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => decreaseQty(item.productId)}
                className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 transition"
              >
                -
              </button>
              <span className="font-semibold">{item.quantity}</span>
              <button
                onClick={() => increaseQty(item.productId)}
                className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 transition"
              >
                +
              </button>
            </div>

            {/* price */}
            <p className="font-bold text-blue-600">
              ₹{item.price * item.quantity}
            </p>

            {/* remove button */}
            <button
              onClick={() => removeFromCart(item.productId)}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded-lg transition"
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      {/* total + checkout button */}
      <div className="mt-8 p-4 bg-gray-100 rounded-lg flex flex-col sm:flex-row justify-between items-center gap-4">
        <h2 className="text-lg font-semibold">Total</h2>
        <p className="text-xl font-bold text-blue-600">₹{total}</p>
        <button
          onClick={handleCheckout}
          className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg transition"
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default MyOrder;

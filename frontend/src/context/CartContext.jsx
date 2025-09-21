

import React, { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";
import { AppContext } from "../pages/Appcontext";
import { toast } from "react-toastify";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const { backendUrl, token } = useContext(AppContext); 
  const [cart, setCart] = useState([]);

  // Backend se cart load
  useEffect(() => {
    const fetchCart = async () => {
      if (!token) return;
      try {
        const { data } = await axios.get(`${backendUrl}/api/cart/get`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (data.success) {
          // Ensure numeric values for price & quantity
          const formattedCart = data.cart.map(item => ({
            ...item,
            price: Number(item.price),
            quantity: Number(item.quantity),
          }));
          setCart(formattedCart);
        }
      } catch (error) {
        console.log("Cart Load Error:", error.response?.data || error.message);
      }
    };
    fetchCart();
  }, [token, backendUrl]);

  // const addToCart = async (product) => {
  //   if (!token)
  //        return toast.error("Please login first!");
  //   try {
  //     const { data } = await axios.post(
  //       `${backendUrl}/api/cart/add`,
  //       {
  //         productId: product.id,
  //         name: product.name,
  //         image: product.image,
  //         price: product.price,
  //       },
  //       { headers: { Authorization: `Bearer ${token}` } }
  //     );
  //     if (data.success) {
  //       const formattedCart = data.cart.map(item => ({
  //         ...item,
  //         price: Number(item.price),
  //         quantity: Number(item.quantity),
  //       }));
  //       setCart(formattedCart);
  //       toast.success("Item added to cart");
  //     }
  //   } catch (error) {
  //     console.log("Add Cart Error:", error.response?.data || error.message);
  //   }
  // };

const addToCart = async (product) => {
  if (!token) return toast.error("Please login first!");
  try {
    const { data } = await axios.post(
      `${backendUrl}/api/cart/add`,
      {
        productId: product._id || product.id, // 🔹 backend ke liye _id, fallback static id
        name: product.name,
        image: product.image,
        price: product.price,
      },
      { headers: { Authorization: `Bearer ${token}` } }
    );
    if (data.success) {
      const formattedCart = data.cart.map(item => ({
        ...item,
        price: Number(item.price),
        quantity: Number(item.quantity),
      }));
      setCart(formattedCart);
      toast.success("Item added to cart");
    }
  } catch (error) {
    console.log("Add Cart Error:", error.response?.data || error.message);
  }
};







  const removeFromCart = async (productId) => {
    if (!token) return alert("Please login first!");
    try {
      const { data } = await axios.delete(`${backendUrl}/api/cart/remove`, {
        headers: { Authorization: `Bearer ${token}` },
        data: { productId },
      });
      if (data.success) setCart(data.cart);
    } catch (error) {
      console.log("Remove Cart Error:", error.response?.data || error.message);
    }
  };

  const updateQuantity = async (productId, qty) => {
    if (!token) return alert("Please login first!");
    try {
      const { data } = await axios.put(
        `${backendUrl}/api/cart/update-quantity`,
        { productId, quantity: qty },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      if (data.success) {
        const formattedCart = data.cart.map(item => ({
          ...item,
          price: Number(item.price),
          quantity: Number(item.quantity),
        }));
        setCart(formattedCart);
      }
    } catch (error) {
      console.log("Update Qty Error:", error.response?.data || error.message);
    }
  };

  const increaseQty = (productId) => {
    const item = cart.find(i => i.productId === productId);
    if (item) updateQuantity(productId, item.quantity + 1);
  };

  const decreaseQty = (productId) => {
    const item = cart.find(i => i.productId === productId);
    if (item && item.quantity > 1) updateQuantity(productId, item.quantity - 1);
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, increaseQty, decreaseQty }}
    >
      {children}
    </CartContext.Provider>
  );
};

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import AppcontextProvider from "./pages/Appcontext"; // ✅ default import
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './index.css'
import { CartProvider } from "./context/CartContext";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppcontextProvider>
      <BrowserRouter>
    <CartProvider>
        <App />
        </CartProvider>
        <ToastContainer position="top-right" autoClose={2000} />
      </BrowserRouter>
    </AppcontextProvider>
  </React.StrictMode>
);

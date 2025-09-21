import express from "express";
import { getCart, addToCart, removeFromCart, updateQuantity } from "../controllers/cartController.js";
import authMiddleware from "../middlewares/authUser.js"; // userId ko set karega

const router = express.Router();

router.get("/get", authMiddleware, getCart);
router.post("/add", authMiddleware, addToCart);
router.delete("/remove", authMiddleware, removeFromCart);
router.put("/update-quantity", authMiddleware, updateQuantity);

export default router;

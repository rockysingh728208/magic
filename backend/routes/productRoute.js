import express from "express";
import { addProduct, getProducts, updateProduct, deleteProduct } from "../controllers/productController.js";
import { authAdmin } from "../middlewares/authAdmin.js";
import upload from "../middlewares/multer.js";

const router = express.Router();

// Admin can add product (with image)
router.post("/add", authAdmin, upload.single("image"), addProduct);

// Get all products
router.get("/all", getProducts);

// Admin can update product
router.put("/update/:id", authAdmin, upload.single("image"), updateProduct);

// Admin can delete product
router.delete("/delete/:id", authAdmin, deleteProduct);

export default router;

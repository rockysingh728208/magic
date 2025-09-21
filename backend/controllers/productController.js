import Product from "../models/productModel.js";
import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";
dotenv.config();
import { authAdmin } from "../middlewares/authAdmin.js";
// Add Product
export const addProduct = async (req, res) => {
  try {
    const { name, description, price } = req.body;
    if (!name || !price) return res.status(400).json({ success: false, message: "Name and price are required" });

    let imageUrl = "";
    if (req.file) {
      const result = await cloudinary.uploader.upload(req.file.path, {
        folder: "electric-shop",
      });
      imageUrl = result.secure_url;
    }

    const product = new Product({ name, description, price, image: imageUrl });
    await product.save();

    res.json({ success: true, message: "Product added", product });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: error.message });
  }
};

// Get all products
export const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json({ success: true, products });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Update product
export const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description, price } = req.body;

    let updateData = { name, description, price };

    if (req.file) {
      const result = await cloudinary.uploader.upload(req.file.path, {
        folder: "electric-shop",
      });
      updateData.image = result.secure_url;
    }

    const updated = await Product.findByIdAndUpdate(id, updateData, { new: true });
    res.json({ success: true, message: "Product updated", product: updated });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Delete product
export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    await Product.findByIdAndDelete(id);
    res.json({ success: true, message: "Product deleted" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

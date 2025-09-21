import express from "express";
import { loginAdmin } from "../controllers/adminController.js";

const router = express.Router();

// POST /api/admin/login
router.post("/login", loginAdmin);

export default router;

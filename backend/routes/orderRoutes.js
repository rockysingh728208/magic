import express from "express";
import { createOrder, verifyPayment,getAllOrders } from "../controllers/orderController.js";
import authUser from "../middlewares/authUser.js";
import {authAdmin} from "../middlewares/authAdmin.js";
const router = express.Router();

router.post("/create", authUser, createOrder);
router.post("/verify", authUser, verifyPayment);
router.get("/admin/all", authAdmin, getAllOrders);
export default router;

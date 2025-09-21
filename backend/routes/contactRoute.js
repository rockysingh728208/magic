import express from "express";
import { createContact, getAllContacts } from "../controllers/contactController.js";

const router = express.Router();

// Save a new contact message
router.post("/", createContact);

// Get all contact messages (for admin)
router.get("/all", getAllContacts);

export default router;

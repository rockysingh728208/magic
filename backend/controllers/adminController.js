import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

// Admin Login
export const loginAdmin = (req, res) => {
  const { email, password } = req.body;

  if (
    email === process.env.ADMIN_EMAIL &&
    password === process.env.ADMIN_PASSWORD
  ) {
    // Generate token
    const token = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: "1d" });

    return res.json({ success: true, token, message: "Admin logged in successfully" });
  } else {
    return res.status(401).json({ success: false, message: "Invalid credentials" });
  }
};

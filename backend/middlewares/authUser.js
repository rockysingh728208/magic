
import jwt from "jsonwebtoken";

const authUser = async (req, res, next) => {
  try {
        console.log("Authorization Header:", req.headers.authorization); 
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      return res.status(401).json({ success: false, message: "No token provided" });
    }

    const token = authHeader.split(" ")[1]; 
    if (!token) {
      return res.status(401).json({ success: false, message: "Invalid token format" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.id; 
    next();
  } catch (error) {
    console.error("authUser error:", error.message);
    return res.status(401).json({ success: false, message: "Invalid token" });
  }
};

export default authUser;

import { createContext, useState } from "react";
import axios from "axios";

export const AdminContext = createContext();

export const AdminProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("adminToken") || "");

  const loginAdmin = async (email, password) => {
    try {
      const res = await axios.post("http://localhost:5000/api/admin/login", {
        email,
        password,
      });

      if (res.data.success) {
        setToken(res.data.token);
        localStorage.setItem("adminToken", res.data.token); // ✅ Token save
        return true;
      } else {
        return false;
      }
    } catch (err) {
      console.error("Login failed", err.response?.data || err.message);
      return false;
    }
  };

  const logoutAdmin = () => {
    setToken("");
    localStorage.removeItem("adminToken");
  };

  return (
    <AdminContext.Provider value={{ token, loginAdmin, logoutAdmin }}>
      {children}
    </AdminContext.Provider>
  );
};

import { createContext, useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export const AppContext = createContext();

const AppcontextProvider = ({ children }) => {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  // Token state
  const [token, setToken] = useState(localStorage.getItem("token") || "");

  // User data state
  const [userData, setUserData] = useState(false);

  // ✅ Load user profile if logged in
  const loadUserProfileData = async () => {
    try {
      if (!token) return;
      const { data } = await axios.get(`${backendUrl}/api/user/get-profile`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (data.success) {
        setUserData(data.userData);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log("Get Profile Error:", error.response?.data || error.message);
      toast.error(error.response?.data?.message || error.message);
    }
  };

  // ✅ Sync user profile whenever token changes
  useEffect(() => {
    if (token) {
      loadUserProfileData();
    } else {
      setUserData(false);
    }
  }, [token]);

  const value = {
    token,
    setToken,
    userData,
    setUserData,
    loadUserProfileData,
    backendUrl
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppcontextProvider;

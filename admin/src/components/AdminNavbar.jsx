// src/components/AdminNavbar.jsx
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AdminContext } from "../context/AdminContext";

const AdminNavbar = () => {
  const { token, logoutAdmin } = useContext(AdminContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logoutAdmin();
    navigate("/login");
  };

  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Admin Panel</h1>
      {token ? (
        <button
          onClick={handleLogout}
          className="bg-red-500 px-3 py-1 rounded hover:bg-red-600"
        >
          Logout
        </button>
      ) : (
        <Link
          to="/login"
          className="bg-green-500 px-3 py-1 rounded hover:bg-green-600"
        >
          Login
        </Link>
      )}
    </nav>
  );
};

export default AdminNavbar;


import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { AdminContext } from "../context/AdminContext";
import {toast} from "react-toastify";
const ItemList = () => {
  const { token } = useContext(AdminContext);
  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/product/all");
      if (res.data.success) setItems(res.data.products);
    } catch (err) {
      console.error("Failed to fetch items", err);
    }
  };

  const handleDelete = async (id) => {
    if (!token) return alert("Please login as admin");
    try {
      await axios.delete(`http://localhost:5000/api/product/delete/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      toast.success("Item deleted ✅");
      fetchItems();
    } catch (error) {
   console.log("Failed to delete item", error.response?.data || error.message);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Item List
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {items.length === 0 ? (
          <p className="col-span-full text-center text-gray-500">
            No items found.
          </p>
        ) : (
          items.map((item) => (
            <div
              key={item._id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="h-48 flex items-center justify-center bg-gray-50">
                <img
                  src={item.image}
                  alt={item.name}
                  className="max-h-full object-contain"
                />
              </div>

              <div className="p-4">
                <h3 className="font-bold text-lg text-gray-800">{item.name}</h3>
                <p className="text-gray-600 text-sm mt-1 line-clamp-2">
                  {item.description}
                </p>
                <p className="font-semibold text-green-700 mt-2">₹{item.price}</p>

                <button
                  onClick={() => handleDelete(item._id)}
                  className="mt-4 w-full bg-red-600 text-white py-2 rounded-lg font-medium hover:bg-red-700 transition-colors"
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ItemList;

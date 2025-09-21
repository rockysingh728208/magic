// import { useState, useContext } from "react";
// import axios from "axios";
// import { AdminContext } from "../context/AdminContext";

// const AddItem = ({ refreshItems }) => {
//   const { token } = useContext(AdminContext);
//   const [name, setName] = useState("");
//   const [description, setDescription] = useState("");
//   const [price, setPrice] = useState("");
//   const [image, setImage] = useState(null);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!token) return alert("Please login as admin");

//     const formData = new FormData();
//     formData.append("name", name);
//     formData.append("description", description);
//     formData.append("price", price);
//     if (image) formData.append("image", image);

//     try {
//       const res = await axios.post(
//         "http://localhost:5000/api/product/add",
//         formData,
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//             "Content-Type": "multipart/form-data",
//           },
//         }
//       );

//       if (res.data.success) {
//         alert("Item added successfully ✅");
//         setName("");
//         setDescription("");
//         setPrice("");
//         setImage(null);
//         if (refreshItems) refreshItems(); // refresh product list
//       }
//     } catch (error) {
//       alert(error.response?.data?.message || "Add item failed ❌");
//     }
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-100">
//       <form
//         onSubmit={handleSubmit}
//         className="bg-white p-6 rounded shadow-md w-[600px] h-[600px] space-y-4"
//       >
//         <h2 className="text-xl font-bold text-center">Add New Item</h2>
//         <input
//           placeholder="Name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           className="w-full border p-2 rounded"
//           required
//         />
//         <input
//           placeholder="Description"
//           value={description}
//           onChange={(e) => setDescription(e.target.value)}
//           className="w-full border p-2 rounded"
//           required
//         />
//         <input
//           placeholder="Price"
//           type="number"
//           value={price}
//           onChange={(e) => setPrice(e.target.value)}
//           className="w-full border p-2 rounded"
//           required
//         />
//         <input
//           type="file"
//           onChange={(e) => setImage(e.target.files[0])}
//           className="w-full"
//         />
//         <button
//           type="submit"
//           className="bg-green-600 text-white w-full py-2 rounded hover:bg-green-700"
//         >
//           Add Item
//         </button>
//       </form>
//     </div>
//   );
// };

// export default AddItem;


import { useState, useContext } from "react";
import axios from "axios";
import { AdminContext } from "../context/AdminContext";

const AddItem = ({ refreshItems }) => {
  const { token } = useContext(AdminContext);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!token) return alert("Please login as admin");

    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    formData.append("price", price);
    if (image) formData.append("image", image);

    try {
      const res = await axios.post(
        "http://localhost:5000/api/product/add",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (res.data.success) {
        alert("Item added successfully ✅");
        setName("");
        setDescription("");
        setPrice("");
        setImage(null);
        if (refreshItems) refreshItems();
      }
    } catch (error) {
      alert(error.response?.data?.message || "Add item failed ❌");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-green-100 to-blue-100 p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-md space-y-6 transition-transform transform hover:scale-105"
      >
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Add New Product
        </h2>

        <div className="space-y-3">
          <label className="block text-gray-700 font-medium">Name</label>
          <input
            type="text"
            placeholder="Enter product name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            required
          />
        </div>

        <div className="space-y-3">
          <label className="block text-gray-700 font-medium">Description</label>
          <textarea
            placeholder="Enter product description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 resize-none"
            rows={4}
            required
          />
        </div>

        <div className="space-y-3">
          <label className="block text-gray-700 font-medium">Price</label>
          <input
            type="number"
            placeholder="Enter product price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            required
          />
        </div>

        <div className="space-y-1">
          <label className="block text-gray-700 font-medium">Image</label>
          <input
            type="file"
            onChange={(e) => setImage(e.target.files[0])}
            className="w-full text-gray-700"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold shadow-md hover:bg-green-700 transition-colors"
        >
          Add Item
        </button>
      </form>
    </div>
  );
};

export default AddItem;


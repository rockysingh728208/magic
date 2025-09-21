
// import React, { useContext } from "react";
// import products from "../product"; // static products
// import { CartContext } from "../context/CartContext";

// const Header = () => {
//   const { addToCart } = useContext(CartContext);

//   return (
//     <div className="p-6 sm:p-10 bg-gray-50 min-h-screen">
//       <h1 className="text-3xl font-extrabold text-center mb-10 text-blue-700 tracking-wide">
//         Our Products
//       </h1>

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
//         {products.map((product) => (
//           <div
//             key={product.id} // yahan _id nahi, static id use karo
//             className="border rounded-2xl p-6 shadow-md bg-white hover:shadow-xl transition transform hover:-translate-y-1"
//           >
//             <div className="flex justify-center">
//               <img
//                 src={product.image}
//                 alt={product.name}
//                 className="w-[150px] h-40 sm:w-44 sm:h-44 md:w-48 md:h-48 object-contain mb-4 rounded-lg bg-gray-100 p-4"
//               />
//             </div>

//             <h2 className="text-lg font-semibold text-gray-800 text-center sm:text-left">
//               {product.name}
//             </h2>
//             <p className="text-gray-500 text-sm mt-1 line-clamp-2 text-center sm:text-left">
//               {product.description}
//             </p>

//             <p className="text-xl font-bold mt-3 text-blue-600 text-center sm:text-left">
//               ₹{product.price}
//             </p>

//             <button
//               className="mt-5 w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition"
//               onClick={() => addToCart(product)}
//             >
//               Add to Cart
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Header;




import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import { CartContext } from "../context/CartContext";
import { AppContext } from "../pages/Appcontext";

const Product = () => {
  const { addToCart } = useContext(CartContext);
  const { backendUrl } = useContext(AppContext); // backend url lelo
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);

useEffect(() => {
  const fetchProducts = async () => {
    try {
      const res = await axios.get(`${backendUrl}/api/product/all`);
      setProducts(res.data.products || []); // ✅ yaha change
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  fetchProducts();
}, [backendUrl]);


  // Filter logic
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 sm:p-10 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-extrabold text-center mb-6 text-blue-700 tracking-wide">
        Our Products
      </h1>

      {/* Search Bar */}
      <div className="flex justify-center mb-10">
        <input
          type="text"
          placeholder="Search by product name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full max-w-md p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Loader */}
      {loading ? (
        <p className="text-center text-gray-600">Loading products...</p>
      ) : filteredProducts.length === 0 ? (
        <p className="text-center text-gray-600">No products found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product._id}
              className="border rounded-2xl p-6 shadow-md bg-white hover:shadow-xl transition transform hover:-translate-y-1"
            >
              {/* Product Image */}
              <div className="flex justify-center">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-[150px] h-40 sm:w-44 sm:h-44 md:w-48 md:h-48 object-contain mb-4 rounded-lg bg-gray-100 p-4"
                />
              </div>

              {/* Details */}
              <h2 className="text-lg font-semibold text-gray-800 text-center sm:text-left">
                {product.name}
              </h2>
              <p className="text-gray-500 text-sm mt-1 line-clamp-2 text-center sm:text-left">
                {product.description}
              </p>

              <p className="text-xl font-bold mt-3 text-blue-600 text-center sm:text-left">
                ₹{product.price}
              </p>

              {/* Add to Cart */}
              <button
                className="mt-5 w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition"
                onClick={() => addToCart(product)}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Product;


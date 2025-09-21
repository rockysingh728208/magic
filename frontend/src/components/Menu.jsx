// import React, { useState, useEffect, useContext } from "react";
// import productsData from "../product";
// import { CartContext } from "../context/CartContext";

// const Menu = () => {
//   const { addToCart } = useContext(CartContext);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [filteredProducts, setFilteredProducts] = useState(productsData);

//   useEffect(() => {
//     if (!searchTerm) {
//       setFilteredProducts(productsData);
//     } else {
//       const filtered = productsData.filter((product) =>
//         product.name.toLowerCase().includes(searchTerm.toLowerCase())
//       );
//       setFilteredProducts(filtered);
//     }
//   }, [searchTerm]);

//   return (
//     <div className="p-6 sm:p-10 bg-gray-50 min-h-screen">
//       {/* Intro Section */}
//       <div className="text-center mb-8">
//         <h1 className="text-3xl sm:text-4xl font-extrabold text-blue-700 mb-3">
//           Welcome to Spark Electric Store
//         </h1>
//         <p className="text-gray-600 text-lg sm:text-xl max-w-2xl mx-auto">
//           Explore our wide range of high-quality electrical products for your home and office. 
//           From energy-efficient LED bulbs to powerful appliances, we have everything to light up your space and make life easier.
//         </p>
//       </div>

//       {/* Filter Input */}
//       <div className="mb-8 flex justify-center">
//         <input
//           type="text"
//           placeholder="Search products by name..."
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           className="w-full max-w-md border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
//         />
//       </div>

//       {/* Products Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
//         {filteredProducts.map((product) => (
//           <div
//             key={product.id}
//             className="border rounded-2xl p-6 shadow-md bg-white hover:shadow-xl transition transform hover:-translate-y-1"
//           >
//             {/* Product Image */}
//             <div className="flex justify-center">
//               <img
//                 src={product.image}
//                 alt={product.name}
//                 className="w-[150px] h-40 sm:w-44 sm:h-44 md:w-48 md:h-48 object-contain mb-4 rounded-lg bg-gray-100 p-4"
//               />
//             </div>

//             {/* Product Details */}
//             <h2 className="text-lg font-semibold text-gray-800 text-center sm:text-left">
//               {product.name}
//             </h2>
//             <p className="text-gray-500 text-sm mt-1 line-clamp-2 text-center sm:text-left">
//               {product.description}
//             </p>

//             <p className="text-xl font-bold mt-3 text-blue-600 text-center sm:text-left">
//               ₹{product.price}
//             </p>

//             {/* Add to Cart Button */}
//             <button
//               className="mt-5 w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition"
//               onClick={() => addToCart(product)}
//             >
//               Add to Cart
//             </button>
//           </div>
//         ))}

//         {filteredProducts.length === 0 && (
//           <p className="text-center col-span-full text-gray-600 text-lg">
//             No products found.
//           </p>
//         )}
//       </div>
//     </div>
//   );


// export default Menu;

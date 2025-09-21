import React from "react";
import { useNavigate } from "react-router-dom";
import shopimage from '../assets/shopimage.jpg';
const Header1 = () => {
      const navigate = useNavigate();
  return (
    <section className="relative w-full h-[400px] sm:h-[500px] md:h-[600px]">
      {/* Background Image */}
      <img
      
        src={shopimage}
        alt="Electric Shop"
        className="w-full h-full object-cover"
      />

    
      <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-yellow-400 mb-4 drop-shadow-lg">
          Welcome to Raja Electric Shop
        </h1>
        <p className="text-white text-lg sm:text-xl md:text-2xl drop-shadow-md">
          Your one-stop solution for all electrical products
        </p>
        <button className="mt-6 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 py-3 rounded-lg transition" onClick={()=>navigate("/product")}>
          Shop Now
        </button>
      </div>
    </section>
  );
};

export default Header1;

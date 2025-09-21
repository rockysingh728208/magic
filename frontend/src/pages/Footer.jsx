
import React from "react";
import logo from "../assets/logo1.jpg"; 

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-8">

        
          <div className="flex flex-col items-start md:items-start gap-4">
            <img src={logo} alt="Logo" className="h-12 w-12 object-contain" />
            <p className="text-gray-400 max-w-xs">
              Raja Electric Shop - Your one-stop solution for all electrical products. Quality, reliability, and service you can trust.
            </p>
          </div>

          
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
            <ul className="space-y-1 text-gray-400">
              <li className="hover:text-yellow-400 cursor-pointer">Home</li>
              <li className="hover:text-yellow-400 cursor-pointer">Product</li>
              <li className="hover:text-yellow-400 cursor-pointer">Contact</li>
              <li className="hover:text-yellow-400 cursor-pointer">About</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
            <p className="text-gray-400">Raja Electronics Barahi Bazar,Riga,Sitamarhi, India</p>
            <p className="text-gray-400">Email: sagarkashyap9155@gmail.com.com</p>
            <p className="text-gray-400">Phone: +91 9117400640</p>
          </div>

        </div>

        <hr className="border-gray-700 my-8" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm pb-6">
          <p>© {new Date().getFullYear()} Raja Electric Shop. All rights reserved.</p>
          <div className="flex gap-4 mt-2 md:mt-0">
            <a href="#" className="hover:text-yellow-400">Facebook</a>
            <a href="#" className="hover:text-yellow-400">Instagram</a>
            <a href="#" className="hover:text-yellow-400">Twitter</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

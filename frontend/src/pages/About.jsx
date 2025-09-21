import React from "react";
import interior from '../assets/interior.jpg';
const About = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gray-800 text-white">
        <img
          src={interior}
          alt="Electric Shop"
          className="w-full h-96 object-cover brightness-75"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
            Welcome to Raja Electric Shop
          </h1>
          <p className="text-lg sm:text-xl max-w-2xl">
            Providing top-quality electrical products for your home and office. 
            From lighting solutions to modern appliances, we ensure safety and efficiency.
          </p>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        <img
          src={interior}
          alt="Electric Shop Interior"
          className="w-full md:w-1/2 h-80 object-cover rounded-xl shadow-lg"
        />
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Who We Are</h2>
          <p className="text-gray-600 mb-4">
            Spark Electric has been serving customers since 2010, offering high-quality electrical products and exceptional customer service. We provide LED lights, fans, irons, extension boards, and more.
          </p>
          <p className="text-gray-600">
            Our team ensures you get the right products with expert guidance and after-sales support. Customer satisfaction is our highest priority.
          </p>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="py-16 px-6 bg-gray-100">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-12">
          Our Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition transform hover:-translate-y-2 text-center">
            <img
              src="https://img.icons8.com/color/96/light-on.png"
              alt="Lighting"
              className="mx-auto mb-4 w-16 h-16"
            />
            <h3 className="font-semibold text-lg mb-2">Lighting Solutions</h3>
            <p className="text-gray-600 text-sm">
              LED bulbs, tube lights, chandeliers, and smart lighting.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition transform hover:-translate-y-2 text-center">
            <img
              src="https://img.icons8.com/color/96/fan.png"
              alt="Appliances"
              className="mx-auto mb-4 w-16 h-16"
            />
            <h3 className="font-semibold text-lg mb-2">Home Appliances</h3>
            <p className="text-gray-600 text-sm">
              Irons, fans, heaters, and daily-use appliances.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition transform hover:-translate-y-2 text-center">
            <img
              src="https://img.icons8.com/color/96/power-strip.png"
              alt="Accessories"
              className="mx-auto mb-4 w-16 h-16"
            />
            <h3 className="font-semibold text-lg mb-2">Electrical Accessories</h3>
            <p className="text-gray-600 text-sm">
              Extension boards, switches, plugs, and wiring accessories.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition transform hover:-translate-y-2 text-center">
            <img
              src="https://img.icons8.com/color/96/checked-user-male.png"
              alt="Expert Guidance"
              className="mx-auto mb-4 w-16 h-16"
            />
            <h3 className="font-semibold text-lg mb-2">Expert Guidance</h3>
            <p className="text-gray-600 text-sm">
              Assistance in choosing products and safe usage tips.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-12">
          Why Choose Us
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition transform hover:-translate-y-2 text-center">
            <h3 className="font-semibold text-lg mb-3">Trusted Products</h3>
            <p className="text-gray-600 text-sm">
              Only high-quality and certified electrical products.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition transform hover:-translate-y-2 text-center">
            <h3 className="font-semibold text-lg mb-3">Expert Team</h3>
            <p className="text-gray-600 text-sm">
              Our team guides you to choose the right products.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition transform hover:-translate-y-2 text-center">
            <h3 className="font-semibold text-lg mb-3">Customer Satisfaction</h3>
            <p className="text-gray-600 text-sm">
              We prioritize your satisfaction and after-sales support.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

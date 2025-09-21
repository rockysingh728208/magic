// import React, { useState } from "react";

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert(`Thank you, ${formData.name}! We have received your message.`);
//     setFormData({ name: "", email: "", message: "" });
//   };

//   return (
//     <div className="bg-gray-50 min-h-screen">
//       {/* Hero Section */}
//       <section className="relative bg-blue-700 text-white h-64 flex items-center justify-center">
//         <img
//           src="https://images.unsplash.com/photo-1581091012184-7d8f2e9146b4?auto=format&fit=crop&w=1470&q=80"
//           alt="Contact Hero"
//           className="absolute inset-0 w-full h-full object-cover brightness-50"
//         />
//         <h1 className="text-4xl sm:text-5xl font-extrabold z-10">
//           Contact Us
//         </h1>
//       </section>

//       {/* Contact Form & Info */}
//       <section className="py-16 px-6 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
//         {/* Form */}
//         <div className="bg-white p-8 rounded-xl shadow-lg">
//           <h2 className="text-2xl font-bold mb-6 text-gray-800">Send a Message</h2>
//           <form onSubmit={handleSubmit} className="space-y-4">
//             <div>
//               <label className="block text-gray-700 mb-1">Name</label>
//               <input
//                 type="text"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 required
//                 className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//             </div>
//             <div>
//               <label className="block text-gray-700 mb-1">Email</label>
//               <input
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//                 className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//             </div>
//             <div>
//               <label className="block text-gray-700 mb-1">Message</label>
//               <textarea
//                 name="message"
//                 value={formData.message}
//                 onChange={handleChange}
//                 required
//                 rows="5"
//                 className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
//               ></textarea>
//             </div>
//             <button
//               type="submit"
//               className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
//             >
//               Send Message
//             </button>
//           </form>
//         </div>

//         {/* Contact Info */}
//         <div className="flex flex-col justify-center gap-6">
//           <h2 className="text-2xl font-bold text-gray-800">Get in Touch</h2>
//           <p className="text-gray-600">
//             Feel free to contact us via the form or through the following details.
//           </p>
//           <div className="space-y-4 text-gray-700">
//             <div>
//               <strong>Address:</strong> 123 Spark Street, Electric City, India
//             </div>
//             <div>
//               <strong>Email:</strong> info@sparkelectric.com
//             </div>
//             <div>
//               <strong>Phone:</strong> +91 98765 43210
//             </div>
//           </div>
         
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Contact;


import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import contacthero from '../assets/contacthero.jpg';
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/contact", formData);
      if (res.data.success) {
        toast.success("Message sent successfully ✅");
        setFormData({ name: "", email: "", message: "" });
      } else {
        toast.error(res.data.message);
      }
    } catch (err) {
      console.error(err);
      toast.error("Failed to send message ❌");
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen">
   {/* Hero Section */}
<section className="relative bg-blue-700 text-white h-64 flex items-center justify-center">
  <img
    src={contacthero}
    alt="Contact Hero"
    className="absolute inset-0 w-full h-full object-cover brightness-50"
  />
  <h1 className="text-3xl sm:text-5xl font-extrabold z-10">Contact Us</h1>
</section>


      {/* Contact Form & Info */}
      <section className="py-16 px-6 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Form */}
        <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Send a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-700 mb-1">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col justify-center gap-6">
          <h2 className="text-2xl font-bold text-gray-800">Get in Touch</h2>
          <p className="text-gray-600">
            Feel free to contact us via the form or through the following details.
          </p>
          <div className="space-y-4 text-gray-700">
            <div>
              <strong>📍 Address:</strong> 123 Spark Street, Electric City, India
            </div>
            <div>
              <strong>📧 Email:</strong> info@sparkelectric.com
            </div>
            <div>
              <strong>📞 Phone:</strong> +91 98765 43210
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;


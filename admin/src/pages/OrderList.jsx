// import React, { useEffect, useState, useContext } from "react";
// import axios from "axios";
// import { AdminContext } from "../context/AdminContext";
// import { toast } from "react-toastify";

// const OrderList = () => {
//   const { token } = useContext(AdminContext); // ✅ Admin token
//   const [orders, setOrders] = useState([]);

//   useEffect(() => {
//     const fetchOrders = async () => {
//       try {
//         const { data } = await axios.get(
//           "http://localhost:5000/api/order/admin/all",
//           {
//             headers: { Authorization: `Bearer ${token}` },
//           }
//         );

//         if (data.success) {
//           setOrders(data.orders);
//         } else {
//           toast.error(data.message);
//         }
//       } catch (error) {
//         console.error("Fetch Orders Error:", error);
//         toast.error("Error fetching orders!");
//       }
//     };

//     if (token) fetchOrders();
//   }, [token]);

//   if (!token) {
//     return <p className="text-center mt-10 text-red-500">Please login as Admin!</p>;
//   }

//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-bold mb-6">All Orders</h1>
//       <div className="overflow-x-auto">
//         <table className="min-w-full bg-white border">
//           <thead>
//             <tr>
//               <th className="py-2 px-4 border">User Name</th>
//               <th className="py-2 px-4 border">Product Name</th>
//               <th className="py-2 px-4 border">Quantity</th>
//               <th className="py-2 px-4 border">Status</th>
//             </tr>
//           </thead>
//           <tbody>
//             {orders.map((order) =>
//               order.items.map((item, idx) => (
//                 <tr key={`${order._id}-${idx}`} className="text-center">
//                   <td className="py-2 px-4 border">{order.userId.name}</td>
//                   <td className="py-2 px-4 border">{item.name}</td>
//                   <td className="py-2 px-4 border">{item.quantity}</td>
//                   <td className="py-2 px-4 border">{order.status}</td>
//                 </tr>
//               ))
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default OrderList;



import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { AdminContext } from "../context/AdminContext";
import { toast } from "react-toastify";

const OrderList = () => {
  const { token } = useContext(AdminContext);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:5000/api/order/admin/all",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        if (data.success) {
          setOrders(data.orders);
        } else {
          toast.error(data.message);
        }
      } catch (error) {
        console.error("Fetch Orders Error:", error);
        toast.error("Error fetching orders!");
      }
    };

    if (token) fetchOrders();
  }, [token]);

  if (!token) {
    return (
      <p className="text-center mt-10 text-red-500">
        Please login as Admin!
      </p>
    );
  }

  return (
    <div className="p-4 sm:p-6">
      <h1 className="text-lg sm:text-xl md:text-2xl font-bold mb-6 text-center">
        All Orders
      </h1>

      {/* ✅ Mobile & Small Screen: Card Layout */}
      <div className="space-y-4 md:hidden">
        {orders.map((order) =>
          order.items.map((item, idx) => (
            <div
              key={`${order._id}-${idx}`}
              className="border rounded-lg p-4 shadow-sm bg-white text-xs sm:text-sm"
            >
              <p>
                <span className="font-semibold">User:</span>{" "}
                {order.userId.name}
              </p>
              <p>
                <span className="font-semibold">Product:</span> {item.name}
              </p>
              <p>
                <span className="font-semibold">Quantity:</span>{" "}
                {item.quantity}
              </p>
              <p>
                <span className="font-semibold">Status:</span> {order.status}
              </p>
            </div>
          ))
        )}
      </div>

      {/* ✅ Tablet & Desktop: Table Layout */}
      <div className="hidden md:block overflow-x-auto">
        <table className="min-w-full bg-white border text-xs sm:text-sm md:text-base lg:text-lg">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-2 px-4 border">User Name</th>
              <th className="py-2 px-4 border">Product Name</th>
              <th className="py-2 px-4 border">Quantity</th>
              <th className="py-2 px-4 border">Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) =>
              order.items.map((item, idx) => (
                <tr
                  key={`${order._id}-${idx}`}
                  className="text-center hover:bg-gray-50"
                >
                  <td className="py-2 px-4 border">{order.userId.name}</td>
                  <td className="py-2 px-4 border">{item.name}</td>
                  <td className="py-2 px-4 border">{item.quantity}</td>
                  <td className="py-2 px-4 border">{order.status}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderList;

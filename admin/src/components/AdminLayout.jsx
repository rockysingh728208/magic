// // src/components/AdminLayout.jsx
// import { Link, Outlet } from "react-router-dom";

// const AdminLayout = () => {
//   return (
//     <div className="flex min-h-screen">
//       {/* Sidebar */}
//       <aside className="w-64 bg-gray-800 text-white p-6 space-y-4">
//         <h2 className="text-lg font-bold mb-6">Menu</h2>
//         <nav className="space-y-3">
//           <Link to="/add-item" className="block hover:underline">
//             ➕ Add Item
//           </Link>
//           <Link to="/items" className="block hover:underline">
//             📦 Item List
//           </Link>
//           <Link to="/order" className="block hover:underline">
//             📦 Order List
//           </Link>
//         </nav>
//       </aside>

//       {/* Content */}
//       <main className="flex-1 p-6 bg-gray-100">
//         <Outlet />
//       </main>
//     </div>
//   );
// };

// export default AdminLayout;
// src/components/AdminLayout.jsx
import { Link, Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-40 sm:w-52 md:w-64 bg-gray-800 text-white p-4 sm:p-6 space-y-4">
        <h2 className="text-sm sm:text-base md:text-lg font-bold mb-6">Menu</h2>
        <nav className="space-y-3 text-xs sm:text-sm md:text-base">
          <Link to="/add-item" className="block hover:underline">
            ➕ Add Item
          </Link>
          <Link to="/items" className="block hover:underline">
            📦 Item List
          </Link>
          <Link to="/order" className="block hover:underline">
            📦 Order List
          </Link>
        </nav>
      </aside>

      {/* Content */}
      <main className="flex-1 p-3 sm:p-4 md:p-6 bg-gray-100 text-xs sm:text-sm md:text-base">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;

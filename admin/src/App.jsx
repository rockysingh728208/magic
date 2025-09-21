// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { AdminProvider } from "./context/AdminContext";
// import AdminPage from "./pages/AdminPage";

// function App() {
//   return (
//     <AdminProvider>
//       <Router>
//         <Routes>
//           <Route path="/" element={<AdminPage />} />
//         </Routes>
//       </Router>
//     </AdminProvider>
//   );
// }

// export default App;
// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AdminProvider } from "./context/AdminContext";
import AdminNavbar from "./components/AdminNavbar";
import AdminLayout from "./components/AdminLayout";
import AdminLogin from "./pages/AdminLogin";
import AddItem from "./pages/AddItem";
import ItemList from "./pages/ItemList";
import OrderList from "./pages/OrderList";
function App() {
  return (
    <AdminProvider>
      <Router>
        <AdminNavbar />
        <Routes>
          <Route path="/login" element={<AdminLogin />} />

          {/* Protected Admin Layout */}
          <Route element={<AdminLayout />}>
            <Route path="/add-item" element={<AddItem />} />
            <Route path="/items" element={<ItemList />} />
            <Route path="/order" element={<OrderList />} />
            
          </Route>
        </Routes>
      </Router>
    </AdminProvider>
  );
}

export default App;


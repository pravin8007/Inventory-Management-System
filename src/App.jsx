import { useState } from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import ProductListPage from "./pages/ProductListPage";
import AddProductPage from "./pages/AddProductPage";
import EditProductPage from "./pages/EditProductPage";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { to: "/", label: "Products" },
    { to: "/add", label: "Add Product" },
  ];

  return (
    <div className="min-h-screen min-w-screen overflow-hidden bg-gray-50">
      <div className="max-w-7xl overflow-hidden mx-auto px-4 md:px-6 py-5 md:py-8">

  
        <div className="flex items-center justify-between mb-6 md:mb-8">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900">
            Manufacturing Inventory
          </h2>

          <button
            className="md:hidden p-2 rounded-md text-gray-600 hover:bg-gray-100 transition-colors"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      
        {menuOpen && (
          <nav className="md:hidden flex flex-col gap-1 mb-6 bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
            {navLinks.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                onClick={() => setMenuOpen(false)}
                className={`px-4 py-3 text-base font-medium transition-colors ${
                  location.pathname === to
                    ? "bg-blue-50 text-blue-800 border-l-4 border-blue-600"
                    : "text-gray-700 hover:bg-gray-50"
                }`}
              >
                {label}
              </Link>
            ))}
          </nav>
        )}



        <nav className="hidden md:flex gap-6 mb-8 border-b border-gray-200 pb-4">
          {navLinks.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={`text-lg font-medium transition-colors ${
                location.pathname === to
                  ? "text-blue-800 border-b-2 border-blue-700 pb-1"
                  : "text-blue-600 hover:text-blue-800"
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Page content */}
        <div className="bg-white rounded-lg shadow-sm p-4 md:p-6">
          <Routes>
            <Route path="/" element={<ProductListPage />} />
            <Route path="/add" element={<AddProductPage />} />
            <Route path="/edit/:id" element={<EditProductPage />} />
          </Routes>
        </div>

      </div>
    </div>
  );
}
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-white sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-6 flex items-center justify-between">
        <Link to="/" className="text-3xl font-extrabold text-blue-600">
          ShopEasy
        </Link>
        <div className="space-x-6">
          <Link
            to="/"
            className="text-xl text-gray-800 hover:text-blue-600 transition duration-300"
          >
            Home
          </Link>
          <Link
            to="/products"
            className="text-xl text-gray-800 hover:text-blue-600 transition duration-300"
          >
            Products
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

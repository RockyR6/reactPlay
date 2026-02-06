import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full bg-white shadow-md px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Logo */}
        <h1 className="text-xl active:underline font-bold text-blue-600">
          Tutorial
        </h1>

        {/* Links */}
        <div className="flex gap-6">
          <Link
            to="/"
            className="text-gray-700 active:underline font-medium hover:text-blue-600 transition"
          >
            ToDo
          </Link>

          <Link
            to="/gallery"
            className="text-gray-700 active:underline font-medium hover:text-blue-600 transition"
          >
            Gallery
          </Link>

          <Link
            to="/contact"
            className="text-gray-700 active:underline font-medium hover:text-blue-600 transition"
          >
            Contact
          </Link>

          <Link
            to="/nestedroute"
            className="text-gray-700 active:underline font-medium hover:text-blue-600 transition"
          >
            NestedRoute
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

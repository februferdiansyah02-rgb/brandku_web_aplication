import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="flex justify-between px-4 py-2 bg-white shadow">
      
      <h1 className="font-bold text-blue-700">BrandKu</h1>

      <div className="flex gap-5 font-bold">

        <Link
          to="/"
          className="text-red-700 hover:text-gray-900"
        >
          Home
        </Link>

        <Link
          to="/about"
          className="text-yellow-700 hover:text-gray-900"
        >
          About
        </Link>

        <Link
          to="/pricing"
          className="text-green-700 hover:text-gray-900"
        >
          Pricing
        </Link>

      </div>

    </header>
  );
}

export default Header;
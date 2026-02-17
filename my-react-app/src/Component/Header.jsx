import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <h1 className="text-3xl font-bold text-sky-600 cursor-pointer">
          Yakazo Travel
        </h1>

        {/* Menu */}
        <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <li><Link to="/">Home</Link></li>
          <li className="hover:text-sky-600 cursor-pointer transition"><Link to="/About">About</Link></li>
 <li className="hover:text-sky-600 cursor-pointer transition"><Link to="/Destination">Destination</Link></li>
          <li className="hover:text-sky-600 cursor-pointer transition"> <Link to="/Packages">Packages</Link></li>
          <li className="hover:text-sky-600 cursor-pointer transition"><Link to="/Blog">Blog</Link></li>
          <li className="hover:text-sky-600 cursor-pointer transition"><Link to="/Contact">Contact</Link></li>
        </ul>

        {/* Button */}
        <button className="hidden md:block bg-sky-600 text-white px-5 py-2 rounded-full hover:bg-sky-700 transition">
          Book Now
        </button>

        {/* Mobile Menu Icon */}
        <div className="md:hidden text-3xl cursor-pointer">
          ☰
        </div>

      </div>
    </nav>
  );
}

export default Header;

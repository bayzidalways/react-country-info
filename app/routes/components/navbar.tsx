import React from "react";
import { NavLink } from "react-router";

export const Navbar = () => {
  return (
    <div className="bg-blue-600 text-white py-4 shadow-md font-bold">
      <div className="container mx-auto flex justify-between items-center px-6">
        {/* Left: Logo */}
        <div className="flex-1 hover:text-black">
          <NavLink to="/" className="text-2xl ">
            Country<span className="text-red-700 ">Explorer</span>
          </NavLink>
        </div>

        {/* Center: Navigation Links */}
        <nav className="flex space-x-8">
          <NavLink
            to="/"
            className="text-lg hover:text-gray-300 transition duration-300"
          >
            Home
          </NavLink>
          <NavLink
            to="/countries"
            className="text-lg hover:text-gray-300 transition duration-300"
          >
            Country
          </NavLink>
          <NavLink
            to="/about"
            className="text-lg hover:text-gray-300 transition duration-300"
          >
            About
          </NavLink>
        </nav>

        {/* Right: Empty div to balance flex alignment */}
        <div className="flex-1"></div>
      </div>
    </div>
  );
};

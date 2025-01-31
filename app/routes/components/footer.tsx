import React from "react";
import { Link } from "react-router";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 mt-10">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo & Description */}
          <div>
            <h2 className="text-2xl font-bold text-white">Country Explorer</h2>
            <p className="text-sm mt-2 text-gray-400">
              Explore and learn about different countries from around the world with real-time data.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-blue-400 transition duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/countries" className="hover:text-blue-400 transition duration-200">
                  Countries
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-blue-400 transition duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-blue-400 transition duration-200">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition duration-200">
                <FaFacebook size={22} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition duration-200">
                <FaTwitter size={22} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition duration-200">
                <FaInstagram size={22} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition duration-200">
                <FaLinkedin size={22} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-700 mt-6 pt-4 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Country Explorer. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

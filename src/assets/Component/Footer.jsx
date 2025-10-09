import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 mt-10">
      <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About Section */}
        <div>
          <Link to="/" className="text-xl font-bold mb-4">HERO.IO</Link>
          <p className="text-gray-300">
            Crafting innovative apps to make life simpler, smarter, and more
            exciting.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-bold mb-4">Quick Links</h2>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="hover:text-gray-400 transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/Apps" className="hover:text-gray-400 transition">
                Apps
              </Link>
            </li>
            <li>
              <Link
                to="/Installation"
                className="hover:text-gray-400 transition"
              >
                Installation
              </Link>
            </li>
          </ul>
        </div>

        {/* Social / Contact */}
        <div>
          <h2 className="text-xl font-bold mb-4">Follow Us</h2>
          <div className="flex gap-4">
            <a href="#" className="hover:text-gray-400 transition">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-gray-400 transition">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-gray-400 transition">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-gray-400 transition">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="w-11/12 mx-auto mt-8 border-t border-gray-700 pt-4 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} HERO.IO. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

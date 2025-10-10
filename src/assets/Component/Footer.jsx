import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../Images/logo.png";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 mt-10">
      <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* About Section */}
        <div className="">
          <Link
            to="/"
            className="flex items-center justify-center md:justify-start gap-2 mb-4"
          >
            <img
              src={logo}
              alt="SoftSphere Studio Logo"
              className="w-10 h-10 "
            />
            <span className="text-2xl font-bold">SoftSphere Studio</span>
          </Link>
          <p className="text-gray-300 mb-4 text-center md:text-left">
            Crafting innovative and engaging apps to make your digital
            experience smarter, simpler, and more enjoyable. We focus on
            quality, creativity, and user satisfaction to bring your ideas to
            life.
          </p>
          <p className="text-gray-400 text-sm text-center md:text-left">
            Join our community and explore our apps across multiple platforms
            including Android, iOS, and Web.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-bold mb-4 text-center md:text-left">
            Quick Links
          </h2>
          <ul className="space-y-2 text-center md:text-left">
            <li>
              <Link to="/" className="hover:text-gray-400 transition">
                Home - Discover our latest apps
              </Link>
            </li>
            <li>
              <Link to="/Apps" className="hover:text-gray-400 transition">
                Apps - Browse all our applications
              </Link>
            </li>
            <li>
              <Link
                to="/Installation"
                className="hover:text-gray-400 transition"
              >
                Installation - Step-by-step setup guides
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-gray-400 transition">
                Contact - Reach out to our team
              </Link>
            </li>
          </ul>
        </div>

        {/* Social / Contact */}
        <div>
          <h2 className="text-xl font-bold mb-4 text-center md:text-left">
            Follow & Connect
          </h2>
          <p className="text-gray-300 mb-4 text-center md:text-left">
            Stay connected with us on social media and be the first to know
            about new updates, features, and releases.
          </p>
          <div className="flex flex-row justify-center md:justify-start gap-4 mb-6">
            <a href="#" className="hover:text-blue-500 transition text-2xl">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-sky-400 transition text-2xl">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-pink-500 transition text-2xl">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-blue-700 transition text-2xl">
              <FaLinkedinIn />
            </a>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-2 text-center md:text-left">
              Get Our App
            </h3>
            <div className="flex flex-col sm:flex-row justify-center items-center mt-6">
              <a
                href="https://play.google.com/store/games?device=windows"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="px-6 py-2 rounded-md text-xl font-medium mr-4 mt-4 hover:scale-105 transition-all duration-300 border-2 border-gray-300 hover:shadow-lg">
                  Google Play
                </button>
              </a>
              <a
                href="https://www.apple.com/app-store/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="px-6 py-2 rounded-md text-xl font-medium mr-4 mt-4 hover:scale-105 transition-all duration-300 border-2 border-gray-300 hover:shadow-lg">
                  App Store
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="w-full mt-10 border-t border-gray-700 pt-4 text-center text-gray-400 text-sm">
        {new Date().getFullYear()} SoftSphere Studio. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

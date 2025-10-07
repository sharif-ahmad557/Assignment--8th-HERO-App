import React from "react";
import logo from "../Images/logo.png";
import navbtnimg from "../Images/Vector.png";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-white py-4">
      <header className="w-11/12 mx-auto flex justify-between items-center">
        {/* left */}
        <div className="flex items-center gap-2">
          <img className="w-10 h-10" src={logo} alt="Logo" />
          <h2 className="text-xl font-semibold text-[#632ee3]">HERO.IO</h2>
        </div>
        {/* middle */}
        <div>
          <nav>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "mr-4 text-xl font-medium text-blue-500 underline"
                  : "mr-4 text-xl font-medium text-gray-800"
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/Apps"
              className={({ isActive }) =>
                isActive
                  ? "mr-4 text-xl font-medium text-blue-500 underline"
                  : "mr-4 text-xl font-medium text-gray-800"
              }
            >
              Apps
            </NavLink>

            <NavLink
              to="/Installation"
              className={({ isActive }) =>
                isActive
                  ? "mr-4 text-xl font-medium text-blue-500 underline"
                  : "mr-4 text-xl font-medium text-gray-800"
              }
            >
              Installation
            </NavLink>
          </nav>
        </div>
        {/* right */}
        <div className="flex items-center p-4 gap-2 w-36 h-10 rounded-md bg-gradient-to-r from-[#632ee3] to-[#9f62f2]">
          <img src={navbtnimg} alt="btn" />
          <a className="text-white " href="https://github.com/sharif-ahmad557">Contribute</a>
        </div>
      </header>
    </div>
  );
};

export default Header;

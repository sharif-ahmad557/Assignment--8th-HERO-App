import React from "react";
import logo from "../Images/logo.png";
import navbtnimg from "../Images/Vector.png";
import { NavLink } from 
"react-router-dom";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-white py-4">
      <header className="w-11/12 mx-auto flex flex-col gap-4 sm:flex-row justify-between items-center">
        {/* left */}
        <Link to="/">
        <div className="flex items-center gap-2">
          <img className="w-10 h-10" src={logo} alt="Logo" />
          <h2 className="text-xl font-semibold text-[#632ee3]">HERO.IO</h2>
        </div>
        </Link>
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
        <a
          href="https://github.com/sharif-ahmad557"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center p-4 gap-2 w-36 h-10 rounded-md bg-gradient-to-r from-[#632ee3] to-[#9f62f2] hover:from-[#7540f0] hover:to-[#b57dfc] hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg"
        >
          <img src={navbtnimg} alt="btn" className="w-5 h-5" />
          <span className="text-white font-medium">Contribute</span>
        </a>
      </header>
    </div>
  );
};

export default Header;

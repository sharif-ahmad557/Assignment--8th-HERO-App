import React from 'react';
import { FaGooglePlay } from "react-icons/fa";
import { FaAppStore } from "react-icons/fa";
import heroimg from "../Images/hero.png";


const Banner = () => {
    return (
         <div>
      <div className="w-11/12 mx-auto mt-8">
        <h2 className="text-3xl font-bold text-center">
          We Build <br></br> <span className="text-[#632ee3]">Productive</span>{" "}
          Apps
        </h2>
        <p className="text-center mt-2 text-[#627382]">
          At HERO.IO, we craft innovative apps designed to make everyday life
          simpler, smarter, and more exciting. <br></br> Our goal is to turn
          your ideas into digital experiences that truly make an impact.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center mt-6">
          <a href="https://play.google.com/store/games?device=windows" target="_blank" rel="noopener noreferrer">
            <button className="flex items-center gap-2 px-6 py-2 rounded-md text-xl font-medium mr-4 mt-4 hover:scale-105 transition-all duration-300 border-2 border-gray-300 hover:shadow-lg">
              <FaGooglePlay size={30} color="green" />
              Google Play
            </button>
          </a>
          <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
            <button className="flex items-center gap-2 px-6 py-2 rounded-md text-xl font-medium mr-4 mt-4 hover:scale-105 transition-all duration-300 border-2 border-gray-300 hover:shadow-lg">
            <FaAppStore size={30} color="#007AFF" />
            App Store
          </button>
          </a>
        </div>
      </div>
      <div className="w-11/12 mx-auto mt-10">
        <img
          src={heroimg}
          alt="hero-io"
          className="w-8/12 mx-auto"
        />
      </div>
    </div>
    );
};

export default Banner;
import React from "react";
import { Link } from "react-router-dom";
import AppErrorImg from "../Images/App-Error.png";
const ErrorApp = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white p-4 gap-4">
      <img className="w-2/4 md:w-1/4" src={AppErrorImg} alt="Error" />
      <div>
        <h2 className="text-2xl font-bold text-center">OPPS!! APP NOT FOUND</h2>
        <p className="text-gray-600 text-center">
          The App you are requesting is not found on our system. please try
          another apps.
        </p>
      </div>
      <Link
        to="/"
        className="text-white text-2xl font-semibold  gap-2 py-2 px-4 rounded-md bg-gradient-to-r from-[#632ee3] to-[#9f62f2] hover:from-[#7540f0] hover:to-[#b57dfc] hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg"
      >
        Go Back!
      </Link>
    </div>
  );
};

export default ErrorApp;

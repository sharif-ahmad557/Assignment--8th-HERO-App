import React, { useEffect, useState } from "react";
import ratingicon from "../Images/icon-ratings.png";
import downloadicon from "../Images/icon-downloads.png";
import { ToastContainer, toast } from "react-toastify"; 
import "react-toastify/dist/ReactToastify.css";

const Installation = () => {
  const [installedApps, setInstalledApps] = useState([]);
  const [sortOrder, setSortOrder] = useState("");

  useEffect(() => {
    const savedData =
      JSON.parse(localStorage.getItem("installationData")) || [];
    setInstalledApps(savedData);
  }, []);

  const handleUninstall = (index) => {
    const appTitle = installedApps[index].title;
    const updatedApps = installedApps.filter((_, i) => i !== index);
    setInstalledApps(updatedApps);
    localStorage.setItem("installationData", JSON.stringify(updatedApps));
    toast.success(`${appTitle} uninstalled successfully!`);
  };

  const handleSort = (e) => {
    const value = e.target.value;
    setSortOrder(value);
    let sortedApps = [...installedApps];
    if (value === "High-Low") {
      sortedApps.sort((a, b) => b.downloads - a.downloads); 
    } else if (value === "Low-High") {
      sortedApps.sort((a, b) => a.downloads - b.downloads); 
    }
    setInstalledApps(sortedApps);
  };

  return (
    <div>
      {/* Page Title */}
      <h2 className="text-3xl font-bold text-center">Your Installed Apps</h2>
      <p className="text-center mt-2 text-[#627382]">
        Explore All Trending Apps on the Market developed by us
      </p>

      <div className="w-11/12 mx-auto flex justify-between items-center mt-10">
        <h2 className="text-2xl font-bold">
          {installedApps.length} Apps Found
        </h2>

        <select
          value={sortOrder}
          onChange={handleSort}
          className="select appearance-none"
        >
          <option disabled value="">
            Sort By Downloads
          </option>
          <option value="Low-High">Low-High</option>
          <option value="High-Low">High-Low</option>
        </select>
      </div>

      <div className="w-11/12 mx-auto my-10">
        {installedApps.length > 0 ? (
          installedApps.map((app, index) => (
            <div
              key={index}
              className="w-full mb-4 rounded-xl shadow-md px-4 flex flex-col items-center hover:shadow-lg transition"
            >
              <div className="w-full flex items-center gap-4">
                <div className="w-full flex justify-between items-center mb-4">
                  {/* App Info */}
                  <div className="flex items-center gap-4">
                    <img
                      src={app.image}
                      alt=""
                      className="w-32 h-32 object-cover rounded-lg mb-4"
                    />
                    <div>
                      <h3 className="text-xl font-bold mb-2">{app.title}</h3>
                      <div className="flex items-center gap-4">
                        <span className="text-gray-500 flex items-center gap-2 p-1 rounded-md text-lg font-medium">
                          <img src={downloadicon} className="w-4" alt="" />
                          {app.downloads}
                        </span>
                        <span className="flex items-center gap-2 p-1 rounded-md text-[#ff8812] text-lg font-medium">
                          <img src={ratingicon} className="w-5" alt="" />
                          {app.ratingAvg}
                        </span>
                        <p className="text-sm text-gray-500 mb-1">
                          Size: <span className="font-medium">{app.size}</span>
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Uninstall Button */}
                  <div>
                    <button
                      onClick={() => handleUninstall(index)}
                      className="bg-[#00d491] text-white py-2 px-4 rounded-md shadow-md hover:shadow-xl text-xl font-medium hover:scale-105 transition-all duration-300"
                    >
                      Uninstall
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full text-lg font-medium">
            No Installed App Found ❌
          </p>
        )}
      </div>

      {/* Toast Container */}
      <ToastContainer position="top-right" autoClose={2000} hideProgressBar />
    </div>
  );
};

export default Installation;

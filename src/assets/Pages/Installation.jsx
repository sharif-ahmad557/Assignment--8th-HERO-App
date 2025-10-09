import React, { useEffect, useState } from "react";
import ratingicon from "../Images/icon-ratings.png";
import downloadicon from "../Images/icon-downloads.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Installation = () => {
  const [installedApps, setInstalledApps] = useState([]);
  const [sortOrder, setSortOrder] = useState("");
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      const savedData =
        JSON.parse(localStorage.getItem("installationData")) || [];
      setInstalledApps(savedData);
      setLoading(false);
    }, 1000); 
  }, []);

  
  const handleUninstall = (index) => {
    const appTitle = installedApps[index].title;
    const updatedApps = installedApps.filter((_, i) => i !== index);
    setInstalledApps(updatedApps);
    localStorage.setItem("installationData", JSON.stringify(updatedApps));
    toast.success(`${appTitle} uninstalled successfully!`, {
          position: "top-right",
          autoClose: 2000,
          closeButton: true,
          hideProgressBar: false,
        });
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

  
  if (loading) {
    return (
      <div className="flex justify-center items-center h-[60vh]">
        <div className="w-16 h-16 border-4 border-t-[#00d491] border-gray-300 rounded-full animate-spin"></div>
      </div>
    );
  }

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
          className="select appearance-none border px-3 py-2 rounded-md text-[#333]"
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
              className="w-full mb-10 rounded-xl shadow-md px-4 flex flex-col items-center hover:shadow-lg transition"
            >
              <div className="w-full">
                <div className="w-full flex flex-col md:flex-row justify-between items-center">
                  {/* App Info */}
                  <div className="flex flex-col md:flex-row items-center gap-4">
                    <img
                      src={app.image}
                      alt=""
                      className="w-24 h-24 object-cover rounded-lg mb-4"
                    />
                    <div>
                      <h3 className="text-xl text-center font-bold mb-2">{app.title}</h3>
                      <div className="flex justify-center md:justify-start items-center gap-4">
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
                      className="bg-[#00d491] text-white my-3 py-2 px-4 rounded-md shadow-md hover:shadow-xl text-xl font-medium hover:scale-105 transition-all duration-300"
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
      <ToastContainer />
    </div>
  );
};

export default Installation;

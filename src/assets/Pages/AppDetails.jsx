import React, { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import downloadicon from "../Images/icon-downloads.png";
import ratingicon from "../Images/icon-ratings.png";
import reviewicon from "../Images/icon-review.png";
import RatingsChart from "../Pages/RatingsChart";

const AppDetails = () => {
  const app = useLoaderData();
  const [installed, setInstalled] = useState(false);

  if (!app || !app.title) {
    return (
      <div className="text-center my-20">
        <h2 className="text-3xl font-bold text-red-500">App Not Found</h2>
        <p className="text-lg text-gray-600 mt-3">
          Sorry, we couldn't find the app you are looking for.
        </p>
      </div>
    );
  }

  useEffect(() => {
    if (!app?.title) return;

    const installationData =
      JSON.parse(localStorage.getItem("installationData")) || [];
    const isInstalled = installationData.some(
      (item) => item.title === app.title
    );
    setInstalled(isInstalled);
  }, [app]);

  const handleInstall = () => {
    if (installed) return;

    setInstalled(true);

    toast.success(`${app.title} installed successfully!`, {
      position: "top-center",
      autoClose: 2000,
      closeButton: true,
      hideProgressBar: false,
    });

    const savedApps = JSON.parse(localStorage.getItem("installedApps")) || [];
    if (!savedApps.includes(app.title)) {
      savedApps.push(app.title);
      localStorage.setItem("installedApps", JSON.stringify(savedApps));
    }

    const installationData =
      JSON.parse(localStorage.getItem("installationData")) || [];
    const alreadyExists = installationData.some(
      (item) => item.title === app.title
    );

    if (!alreadyExists) {
      installationData.push({
        title: app.title,
        image: app.image,
        size: app.size,
        companyName: app.companyName,
        downloads: app.downloads,
        ratingAvg: app.ratingAvg,
        reviews: app.reviews,
        description: app.description,
      });
      localStorage.setItem(
        "installationData",
        JSON.stringify(installationData)
      );
    }
  };

  return (
    <div className="w-11/12 md:w-4/5 mx-auto my-10">
      {/* Toast Container */}
      <ToastContainer />

      <div className="flex flex-col md:flex-row gap-6 border-b-2 border-gray-300 pb-6">
        {/*  Left App Image */}
        <div className="md:w-1/4">
          <img
            src={app.image}
            alt="app"
            className="h-auto bg-white p-4 rounded-lg object-cover"
          />
        </div>

        {/* Right App Info */}
        <div className="md:w-3/4 flex flex-col justify-between">
          <div className="pb-6 border-b-2 border-gray-300">
            <h2 className="text-2xl font-bold">{app.title}</h2>
            <p className="mt-2 text-xl font-medium">
              Developed by:{" "}
              <span className="text-blue-500 text-xl font-medium">
                {app.companyName}
              </span>
            </p>
          </div>

          {/* Stats Section */}
          <div className="flex justify-start gap-8 mt-4">
            <div className="flex flex-col items-center p-3 rounded-lg">
              <img src={downloadicon} alt="downloads" className="w-6 mb-1" />
              <h4 className="font-medium">Downloads</h4>
              <h3 className="text-lg font-bold">{app.downloads}</h3>
            </div>

            <div className="flex flex-col items-center p-3 rounded-lg">
              <img src={ratingicon} alt="rating" className="w-6 mb-1" />
              <h4 className="font-medium">Rating</h4>
              <h3 className="text-lg font-bold">{app.ratingAvg}</h3>
            </div>

            <div className="flex flex-col items-center p-3 rounded-lg">
              <img src={reviewicon} alt="reviews" className="w-6 mb-1" />
              <h4 className="font-medium">Reviews</h4>
              <h3 className="text-lg font-bold">{app.reviews}</h3>
            </div>
          </div>

          {/* Install Button */}
          <button
            onClick={handleInstall}
            disabled={installed}
            className={`w-60 mt-4 py-2 rounded-lg text-white text-xl font-medium transition ${
              installed
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-[#00d390] hover:bg-[#ff9922]"
            }`}
          >
            {installed ? "Installed" : `Install Now (${app.size})`}
          </button>
        </div>
      </div>

      {/* Ratings Chart Section */}
      <div className="border-b-2 border-gray-300 pb-6 my-6">
        {app.ratings && app.ratings.length > 0 && (
          <div className="my-6">
            <h2 className="text-xl font-medium mb-3">Ratings</h2>
            <RatingsChart ratings={app.ratings} />
          </div>
        )}
      </div>

      <h2 className="text-xl text-center md:text-left font-medium">Description</h2>
      <p>{app.description}</p>
    </div>
  );
};

export default AppDetails;

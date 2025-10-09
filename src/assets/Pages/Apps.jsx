import React, { useState } from "react";
import { useLoaderData } from "react-router";
import AppsCard from "../Pages/AppsCard";

const Apps = () => {
  const AllAppsData = useLoaderData();
  const [searchTerm, setSearchTerm] = useState("");


  const filteredApps = AllAppsData.filter((app) =>
    app.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className="w-11/12 mx-auto my-10">
        {/* top */}
        <h2 className="text-3xl font-bold text-center">Our All Applications</h2>
        <p className="text-center mt-2 text-[#627382]">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>

      <div className="w-11/12 mx-auto">
        <div className="flex justify-between items-center w-11/12 mx-auto">
          <h2 className="text-xl font-medium">
            ({filteredApps.length}) Apps Found
          </h2>

          {/* Search input */}
          <label className="input flex items-center gap-2 border rounded-lg px-3 py-2 shadow-sm">
            <svg
              className="h-[1.5em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g fill="none" stroke="currentColor">
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input
              type="search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="text-lg outline-none bg-transparent w-full"
              placeholder="Search Apps"
            />
          </label>
        </div>

        {/* App list */}
        {filteredApps.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full mb-10 mt-4">
            {filteredApps.map((app) => (
              <AppsCard key={app.id} app={app} />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500 mt-10 text-lg font-medium">
            No App Found ❌
          </p>
        )}
      </div>
    </div>
  );
};

export default Apps;

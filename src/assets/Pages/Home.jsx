import React from "react";
import { useLoaderData } from "react-router";
import Banner from "./Banner";
import StatesSection from "./StatesSection";
import HomeCard from "./HomeCard";
import { Link } from "react-router-dom";
const Home = () => {
  const AppsData = useLoaderData();
  return (
    <>
      <Banner />
      {/* States Section */}
      <StatesSection></StatesSection>
      {/* Apps Section */}
      <div className="w-11/12 mx-auto">
        <h2 className="text-2xl font-bold text-center mt-6">Trending Apps</h2>
        <p className="text-center text-gray-600 mt-2">Explore All Trending Apps on the Market developed by us</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full my-10">
      
      {
        AppsData.map(app => (<HomeCard key={app.id} app={app} />))
      }
      </div>
<div className="flex justify-center">
  <Link to="/apps" className=" py-2 px-4 text-xl font-medium rounded-xl text-white bg-gradient-to-r from-[#632ee3] to-[#9f62f2] hover:from-[#7540f0] hover:to-[#b57dfc] shadow-md hover:shadow-xl">Show All</Link>

  </div>      </div>
        {/* top */}
    </>
  );
};

export default Home;

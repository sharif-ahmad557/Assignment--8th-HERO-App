import React from "react";

const RatingsChart = ({ ratings }) => {
  if (!ratings || ratings.length === 0) return <p>No ratings found!</p>;

  const maxCount = Math.max(...ratings.map((r) => r.count));

  const sortedRatings = ratings.slice().sort((a, b) => b.name - a.name);

  return (
    <div className=" w-full mx-auto mt-2">
      {sortedRatings.map((rating) => (
        <div key={rating.name} className="flex items-center mb-2">
          <div className="w-16 text-sm text-gray-700">{rating.name}</div>
          <div className="flex-1 bg-gray-200 h-4 rounded relative">
            <div
              className="bg-orange-500 h-4 rounded"
              style={{
                width: `${(rating.count / maxCount) * 100}%`,
              }}
            ></div>
          </div>
          <div className="ml-3 text-sm text-gray-600">{rating.count}</div>
        </div>
        
      ))}
      
      <div className=" w-11/12 mx-auto flex justify-between text-xs text-gray-500 mt-4 pl-5">
        <span>0</span>
        <span>3000</span>
        <span className="">6000</span>
        <span>12000</span>
      </div>
    </div>
  );
};

export default RatingsChart;

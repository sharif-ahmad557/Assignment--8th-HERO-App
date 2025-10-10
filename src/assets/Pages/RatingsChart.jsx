import React from "react";

const RatingsChart = ({ ratings }) => {
  if (!ratings || ratings.length === 0) return <p>No ratings found!</p>;

  const maxCount = Math.max(...ratings.map((r) => r.count));

  const sortedRatings = ratings.slice().sort((a, b) => b.name - a.name);

  return (
    <div className=" w-full mx-auto mt-2">
      {sortedRatings.map((rating) => (
        <div key={rating.name} className="flex items-center mb-4">
          <div className="w-16 text-sm text-gray-700">{rating.name}</div>
          <div className="flex-1 bg-gray-200 h-4 rounded relative">
            <div
              className="bg-orange-500 h-6  rounded"
              style={{
                width: `${(rating.count / maxCount) * 100}%`,
              }}
            ></div>
          </div>
          <div className="ml-3 text-sm text-gray-600">{rating.count}</div>
        </div>
      ))}
    </div>
  );
};

export default RatingsChart;

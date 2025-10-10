import React from "react";

const RatingsChart = ({ ratings }) => {
  if (!ratings || ratings.length === 0) return <p>No ratings found!</p>;

  const maxCount = Math.max(...ratings.map((r) => r.count));
  const sortedRatings = ratings.slice().sort((a, b) => b.name - a.name);

  const step = 10000;
  const numbersRow = [];
  for (let i = 0; i <= maxCount; i += step) {
    numbersRow.push(i);
  }

  return (
    <div className="w-full bg-white p-6 rounded-lg shadow-sm">
      {/* Rating rows */}
      {sortedRatings.map((rating) => (
        <div key={rating.name} className="flex items-center mb-4">
          {/* Left side  */}
          <div className="w-16 text-sm font-medium text-[#1b3556]">
            {rating.name}
          </div>

          {/* Right side */}
          <div className="flex-1 bg-gray-200 h-4 rounded-full relative">
            <div
              className="absolute top-0 left-0 h-full bg-orange-500 rounded-full"
              style={{
                width: `${(rating.count / maxCount) * 100}%`,
              }}
            ></div>
          </div>
        </div>
      ))}

      {/* Numbers */}
      <div className="relative mt-4 text-sm font-semibold text-[#1b3556]">
        <div className="flex justify-between ml-14">
          {numbersRow.map((num, idx) => (
            <span key={idx} className={idx === 0 ? "text-left" : "text-center"}>
              {num.toLocaleString()}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RatingsChart;

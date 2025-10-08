import React from 'react';

const StatesSection = () => {
    return (
         <div className="w-full mi-h-24 py-10 bg-gradient-to-r from-[#632ee3] to-[#9f62f2] text-white">
      <h2 className="text-center text-2xl font-semibold">Trusted by Millions, Built for You</h2>

      <div className="w-11/12 mx-auto mt-8 flex flex-col sm:flex-row justify-center gap-10 text-center">
<div>
  <h2>Total Downloads</h2>
  <p className="text-4xl font-bold my-3">29.6M</p>
  <p>21% more than last month</p>

</div>
<div>
  <h2>Total Reviews</h2>
  <p className="text-4xl font-bold my-3">906K</p>
  <p>46% more than last month</p>

</div>
<div>
  <h2>Active Apps</h2>
  <p className="text-4xl font-bold my-3">132+</p>
  <p>31 more will Launch</p>

</div>
      </div>
      </div>
    );
};

export default StatesSection;
import React from 'react';
import downloadicon from '../Images/icon-downloads.png'
import ratingicon from '../Images/icon-ratings.png'
const HomeCard = ({ app }) => {
    return (
        <div className="border p-4 rounded-lg shadow-md">
            <img src={app.image} alt="" className="w-full h-32 object-cover rounded-md" />
            <h3 className="text-center text-lg font-medium mt-2">{app.title}</h3>
            
            <div className="flex justify-between mt-4">
                <span className="text-gray-500 flex items-center gap-2 bg-[#dce4c9] p-1 rounded-md text-lg font-medium">
                    <img src={downloadicon} className='w-4' alt="" />
                    {app.downloads}
                    </span>
                <span className=" flex items-center gap-2 bg-[#fff0e1] p-1 rounded-md text-[#ff8812] text-lg font-medium">
                    <img src={ratingicon} className='w-5' alt="" />
                    {app.ratingAvg}</span>
            </div>
        </div>
    );
};

export default HomeCard;
// DashboardCard.js
import React from "react";

const DashboardCard = ({ title, value }) => {
  return (
    <div className="flex flex-col bg-white shadow-lg rounded-lg w-full h-24 mx-auto">
      <div className="flex-1 bg-indigo-500 text-white text-center rounded px-6 py-4">
        <div className="flex justify-center items-center">
          <div className="text-4xl font-bold mr-2">{value}</div>
          <div className="text-xl">{title}</div>
        </div>
      </div>
    </div>
  );
};

export default DashboardCard;
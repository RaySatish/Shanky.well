// DashboardCard.js
import React from "react";

const WardenDashboardCard = ({ title, value }) => {
  return (
    <div className="flex flex-col bg-white shadow-lg rounded-lg w-full h-24 mx-auto">
      <div className="flex-1 bg-indigo-500 text-white text-center rounded px-6 py-4">
        <div className="mb-2 text-xl font-bold">{title}</div>
        <div className="text-4xl">{value}</div>
      </div>
    </div>
  );
};

export default WardenDashboardCard;
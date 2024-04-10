import React from "react";

const HostelAdmissionCard = ({ hostel, count }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6">
      <h2 className="text-xl font-semibold">{hostel}</h2>
      <p className="text-gray-600">
        Students Admitted : <strong>{count}</strong>
      </p>
    </div>
  );
};

export default HostelAdmissionCard;

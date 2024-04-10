import React, { useState } from 'react';

const DoctorsCard = ({ name, specializations, meetingTime, email, phone }) => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <div className="text-xl font-semibold mb-2">{name}</div>
      <div className="text-gray-600 mb-2">Meeting Time: {meetingTime}</div>
      {showDetails && (
        <>
          <div className="text-gray-600 mb-2">Email: {email}</div>
          <div className="text-gray-600 mb-2">Phone: {phone}</div>
        </>
      )}
      <button
        className="text-blue-500 underline hover:text-blue-700"
        onClick={toggleDetails}
      >
        {showDetails ? "Show less" : "Show more"}
      </button>
    </div>
  );
};

export default DoctorsCard;

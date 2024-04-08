import React, { useState } from "react";

function Notification({ message, type }) {
  const [showNotification, setShowNotification] = useState(true);

  const handleClose = () => {
    setShowNotification(false);
  };

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 p-4 ${
        type === "success" ? "bg-green-500" : "bg-red-500"
      } text-white ${showNotification ? "" : "hidden"}`}
    >
      <div className="container mx-auto">{message}</div>
      <button className="absolute top-0 right-0 p-2" onClick={handleClose}>
        &times;
      </button>
    </div>
  );
}

export default Notification;

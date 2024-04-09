// MainSection.js
import React from "react";
import { Outlet } from "react-router-dom";

const MainSection = () => {
  return (
    <div className="flex-grow p-6">
      <Outlet />
    </div>
  );
};

export default MainSection;

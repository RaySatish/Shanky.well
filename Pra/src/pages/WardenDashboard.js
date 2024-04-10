// AdminDashboard.js
import React from "react";
import SideMenu from "../components/SideMenu";
import MainSection from "../components/MainPage";

const ChiefWardenDashboard = () => {
  // Replace these with actual data
  return (
    <div className="flex h-screen">
      <SideMenu
        menuItems={[
          { name: "Dashboard", to: "/warden/dashboard" },
          { name: "Diagnosis", to: "/warden/diagnosis" },
          { name: "Report", to: "/warden/report" },
        ]}
      />
      <MainSection />
    </div>
  );
};

export default ChiefWardenDashboard;
// AdminDashboard.js
import React from "react";
import SideMenu from "../components/SideMenu";
import MainSection from "../components/MainPage";

const AdminDashboard = () => {
  // Replace these with actual data
  return (
    <div className="flex h-screen">
      <SideMenu
        menuItems={[
          { name: "Dashboard", to: "/admin/dashboard" },
          { name: "Appointment", to: "/admin/appointment" },
          { name: "Settings", to: "/admin/settings" },
        ]}
      />
      <MainSection />
    </div>
  );
};

export default AdminDashboard;

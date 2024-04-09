// AdminDashboard.js
import React from "react";
import SideMenu from "../components/SideMenu";
import MainSection from "../components/MainPage";
import DashboardCard from "../components/DashboardCard"; // Import DashboardCard
import BarChart from "../components/BarChart"; // Import BarChart component

const AdminDashboard = () => {
  // Replace these with actual data
  return (
    <div className="flex h-screen">
      <SideMenu />
      <MainSection />
    </div>
  );
};

export default AdminDashboard;

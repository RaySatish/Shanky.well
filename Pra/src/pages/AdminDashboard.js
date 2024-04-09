// AdminDashboard.js
import React from "react";
import SideMenu from "../components/SideMenu";
import MainSection from "../components/MainPage";
import DashboardCard from "../components/DashboardCard"; // Import DashboardCard
import BarChart from "../components/BarChart"; // Import BarChart component

const AdminDashboard = () => {
  // Replace these with actual data
  const docData = {
    doctors: 100,
    availableDoctors: 60,
    occupiedDoctors: 40,
    registeredPatients: 200,
    ongoingTreatments: 120,
    completedTreatments: 80,
  };

  const data = {
    A: 100,
    B: 120,
    C: 80,
    D: 150,
    E: 90,
    F: 110,
    G: 130,
    H: 140,
    I: 70,
    J: 100,
    K: 120,
    L: 80,
    M: 150,
    N: 90,
    O: 110,
  };

  return (
    <div className="flex h-screen">
      <SideMenu />
      <MainSection />
      <div className="w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6"> {/* Added grid classes */}
          {Object.entries(docData).map(([key, value], index) => (
            <DashboardCard key={index} title={key} value={value} /> // Use DashboardCard
          ))}
        </div>
        <div className="p-6">
          <BarChart data={data} /> {/* Use BarChart */}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
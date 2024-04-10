import React, { useState, useEffect } from "react";
import axios from "axios";
import HostelAdmissionCard from "./HostelAdmissionCard";

function Dashboard() {
  const [admissionData, setAdmissionData] = useState([]);
  const [hostelCounts, setHostelCounts] = useState({});

  useEffect(() => {
    axios
      .get("http://127.0.0.1:9000/api/v1/diagnosis")
      .then((res) => {
        setAdmissionData(res.data);
      })
      .catch((err) => {
        console.error("Failed to fetch admission data: ", err);
      });
  }, []);

  useEffect(() => {
    const counts = admissionData.reduce((acc, { hostel }) => {
      acc[hostel] = acc[hostel] ? acc[hostel] + 1 : 1;
      return acc;
    }, {});
    setHostelCounts(counts);
  }, [admissionData]);

  return (
    <div className="w-full">
      <h1 className="text-2xl font-bold mb-4">
        Number of Students Admitted in Each Hostel
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {Object.entries(hostelCounts).map(([hostel, count], index) => (
          <HostelAdmissionCard key={index} hostel={hostel} count={count} />
        ))}
      </div>
    </div>
  );
}

export default Dashboard;

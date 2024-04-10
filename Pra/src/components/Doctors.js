import React, { useState, useEffect } from "react";
import axios from "axios";

const Doctors = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:9000/api/v1/doctors")
      .then((res) => {
        setDoctors(res.data.data);
      })
      .catch((err) => {
        console.error("Failed to fetch doctors: ", err);
      });
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Doctors</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {doctors.map((doctor, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md p-6"
            style={{ maxWidth: "20rem" }}
          >
            <h2 className="text-xl font-bold mb-2">{doctor.name}</h2>
            <p className="text-gray-700 mb-2">{doctor.department}</p>
            <p className="text-gray-700 mb-2">{doctor.email}</p>
            <p className="text-gray-700 mb-2">{doctor.phone}</p>
            <div className="flex flex-wrap">
              {doctor.slots.map((slot, idx) => (
                <span
                  key={idx}
                  className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 m-1"
                >
                  {slot}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Doctors;

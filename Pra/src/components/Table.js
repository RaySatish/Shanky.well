import React, { useState, useEffect } from "react";
import axios from "axios";

const Table = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:9000/api/v1/appointments")
      .then((res) => {
        setAppointments(res.data.data);
      })
      .catch((err) => {
        console.error("Failed to fetch appointments: ", err);
      });
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Appointments</h1>
      <table className="table-auto w-full border-collapse">
        <thead>
          <tr>
            <th className="px-4 py-2 bg-gray-800 text-white">Sno</th>
            <th className="px-4 py-2 bg-gray-800 text-white">Student Name</th>
            <th className="px-4 py-2 bg-gray-800 text-white">Doctor Name</th>
            <th className="px-4 py-2 bg-gray-800 text-white">Slot</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((appointment, index) => (
            <tr
              key={appointment.id}
              className={index % 2 === 0 ? "bg-gray-200" : "bg-white"}
            >
              <td className="border px-4 py-2">{index + 1}</td>
              <td className="border px-4 py-2">{appointment.studentName}</td>
              <td className="border px-4 py-2">{appointment.doctorName}</td>
              <td className="border px-4 py-2">{appointment.slot}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;

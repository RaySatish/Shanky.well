import React, { useState, useEffect } from "react";
import axios from "axios";

const DiagnosisTable = () => {
  const [diagnoses, setDiagnoses] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:9000/api/v1/diagnosis")
      .then((res) => {
        setDiagnoses(res.data);
      })
      .catch((err) => {
        console.error("Failed to fetch diagnoses: ", err);
      });
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Diagnoses</h1>
      <table className="table-auto w-full border-collapse">
        <thead>
          <tr>
            <th className="px-4 py-2 bg-gray-800 text-white">Sno</th>
            <th className="px-4 py-2 bg-gray-800 text-white">Student Name</th>
            <th className="px-4 py-2 bg-gray-800 text-white">Doctor Name</th>
            <th className="px-4 py-2 bg-gray-800 text-white">Disease</th>
            <th className="px-4 py-2 bg-gray-800 text-white">Admitted</th>
            <th className="px-4 py-2 bg-gray-800 text-white">Hostel</th>
            <th className="px-4 py-2 bg-gray-800 text-white">Room No</th>
            <th className="px-4 py-2 bg-gray-800 text-white">Discharge Date</th>
          </tr>
        </thead>
        <tbody>
          {diagnoses.map((diagnosis, index) => (
            <tr
              key={diagnosis._id}
              className={index % 2 === 0 ? "bg-gray-200" : "bg-white"}
            >
              <td className="border px-4 py-2 text-center">{index + 1}</td>
              <td className="border px-4 py-2">{diagnosis.studentName}</td>
              <td className="border px-4 py-2">{diagnosis.doctorName}</td>
              <td className="border px-4 py-2">{diagnosis.disease}</td>
              <td className="border px-4 py-2">
                {diagnosis.admitted ? "Yes" : "No"}
              </td>
              <td className="border px-4 py-2">{diagnosis.hostel}</td>
              <td className="border px-4 py-2">{diagnosis.roomNo}</td>
              <td className="border px-4 py-2">
                {new Date(diagnosis.dischargeDate).toLocaleDateString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DiagnosisTable;

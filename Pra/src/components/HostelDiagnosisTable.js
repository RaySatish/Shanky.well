import React, { useState, useEffect } from "react";
import axios from "axios";

const HostelDiagnosisTable = () => {
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

  // Group diagnoses by hostel
  const groupedDiagnoses = diagnoses.reduce((acc, diagnosis) => {
    if (!acc[diagnosis.hostel]) {
      acc[diagnosis.hostel] = [];
    }
    acc[diagnosis.hostel].push(diagnosis);
    return acc;
  }, {});

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Hostel Diagnoses</h1>
      {Object.keys(groupedDiagnoses).map((hostel, index) => (
        <div key={index}>
          <h2 className="text-lg font-semibold mb-2">{hostel}</h2>
          <table className="table-auto w-full border-collapse mb-4">
            <thead>
              <tr>
                <th className="px-4 py-2 bg-gray-800 text-white">Sno</th>
                <th className="px-4 py-2 bg-gray-800 text-white">
                  Student Name
                </th>
                <th className="px-4 py-2 bg-gray-800 text-white">
                  Doctor Name
                </th>
                <th className="px-4 py-2 bg-gray-800 text-white">Disease</th>
                <th className="px-4 py-2 bg-gray-800 text-white">Admitted</th>
                <th className="px-4 py-2 bg-gray-800 text-white">Room No</th>
                <th className="px-4 py-2 bg-gray-800 text-white">
                  Discharge Date
                </th>
              </tr>
            </thead>
            <tbody>
              {groupedDiagnoses[hostel].map((diagnosis, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? "bg-gray-200" : "bg-white"}
                >
                  <td className="border px-4 py-2 text-center">{index + 1}</td>
                  <td className="border px-4 py-2">{diagnosis.studentName}</td>
                  <td className="border px-4 py-2">{diagnosis.doctorName}</td>
                  <td className="border px-4 py-2">{diagnosis.disease}</td>
                  <td className="border px-4 py-2">
                    {diagnosis.admitted ? "Yes" : "No"}
                  </td>
                  <td className="border px-4 py-2">{diagnosis.roomNo}</td>
                  <td className="border px-4 py-2">
                    {new Date(diagnosis.dischargeDate).toLocaleDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

export default HostelDiagnosisTable;

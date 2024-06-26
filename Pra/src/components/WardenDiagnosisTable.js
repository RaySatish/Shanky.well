// WardenDiagnosisTable.js
import React from 'react';

const WardenDiagnosisTable = ({ data }) => {
  // Default case when data is not defined or empty
  if (!data || data.length === 0) {
    return (
      <div className="text-center text-gray-500 mt-4">
        No data available.
      </div>
    );
  }

  return (
    <table className="min-w-full divide-y divide-gray-200">
      <thead className="bg-gray-50">
        <tr>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Student Name
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Floor
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Room No
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Disease
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Admitted
          </th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {data.map((entry, index) => (
          <tr key={index}>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              {entry.studentName}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              {entry.floor}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              {entry.roomNo}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              {entry.disease}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              {entry.admitted ? "Yes" : "No"}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default WardenDiagnosisTable;

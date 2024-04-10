// ChiefWardenDiagnosisTable.js
import React from 'react';

const ChiefWardenDiagnosisTable = ({ data }) => {
  // Function to count the number of students admitted from each block
  const countStudentsAdmittedPerBlock = () => {
    const blockCounts = {};
    data.forEach(entry => {
      if (entry.admitted) {
        if (blockCounts[entry.block]) {
          blockCounts[entry.block]++;
        } else {
          blockCounts[entry.block] = 1;
        }
      }
    });
    return blockCounts;
  };

  // Function to list the students affected from each block
  const studentsAffectedPerBlock = () => {
    const blockStudents = {};
    data.forEach(entry => {
      if (!blockStudents[entry.block]) {
        blockStudents[entry.block] = [];
      }
      blockStudents[entry.block].push(entry);
    });
    return blockStudents;
  };

  const blockCounts = countStudentsAdmittedPerBlock();
  const blockStudents = studentsAffectedPerBlock();

  return (
    <table className="min-w-full divide-y divide-gray-200">
      <thead className="bg-gray-50">
        <tr>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Block
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            No of Students Admitted
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Students Affected
          </th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {Object.keys(blockCounts).map((block, index) => (
          <tr key={index}>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              {block}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              {blockCounts[block]}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              {blockStudents[block].map((student, idx) => (
                <div key={idx}>{student.studentName}</div>
              ))}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ChiefWardenDiagnosisTable;

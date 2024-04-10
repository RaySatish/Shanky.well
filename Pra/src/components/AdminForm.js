import React, { useState } from 'react';

const AdminForm = () => {
  const [emailGenerated, setEmailGenerated] = useState(false);

  const generateEmail = () => {
    const studentData = [
      { regNumber: "1234", disease: "Fever" },
      { regNumber: "5678", disease: "Cough" },
      // Add more student data here as needed
    ];

    const emailSubject = "Student Health Report";
    let emailBody = "Dear Chief Warden,\n\n";

    studentData.forEach(student => {
      emailBody += `A student with registration number ${student.regNumber} has reported the following disease: ${student.disease}.\n`;
    });

    emailBody += "\nPlease take necessary actions.\n\nRegards,\nAdmin";

    const mailtoLink = `mailto:shambhupandey1008@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

    window.location.href = mailtoLink;
    setEmailGenerated(true);
  };

  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold mb-4">Admin Form</h2>
      <button
        className={`px-6 py-3 bg-green-500 text-white font-bold rounded transition duration-300 ease-in-out hover:bg-green-600 ${emailGenerated ? 'hidden' : ''}`}
        onClick={generateEmail}
      >
        Send Email to Chief Warden
      </button>
      {emailGenerated && <p className="text-green-500 mt-4">Email sent successfully!</p>}
    </div>
  );
};

export default AdminForm;

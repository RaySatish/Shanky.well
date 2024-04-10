import React, { useState, useEffect } from "react";
import axios from "axios";

const ReportEmail = () => {
  const [studentData, setStudentData] = useState([]);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:9000/api/v1/diagnosis")
      .then((res) => {
        setStudentData(res.data);
      })
      .catch((err) => {
        console.error("Failed to fetch student data: ", err);
      });
  }, []);

  const generateEmail = () => {
    setSending(true);
    const emailSubject = "Student Health Report";
    let emailBody = "Dear Chief Warden,\n\n";
    emailBody +=
      "<table style='border-collapse: collapse; width: 100%;'><tr style='background-color: #f2f2f2;'><th style='border: 1px solid #ddd; padding: 8px;'>Student Name</th><th style='border: 1px solid #ddd; padding: 8px;'>Disease</th></tr>";

    studentData.forEach((student) => {
      emailBody += `<tr><td style='border: 1px solid #ddd; padding: 8px;'>${student.studentName}</td><td style='border: 1px solid #ddd; padding: 8px;'>${student.disease}</td></tr>`;
    });

    emailBody += "</table>";
    emailBody += "\nPlease take necessary actions.\n\nRegards,\nAdmin";

    const mailtoLink = `mailto:ray.satish10090@gmail.com?subject=${encodeURIComponent(
      emailSubject
    )}&body=${encodeURIComponent(emailBody)}`;

    window.location.href = mailtoLink;
    setSending(false);
    setSent(true);
  };

  return (
    <div className="flex justify-center align-center mt-32">
      <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4 uppercase">
          Send Health Report
        </h2>
        {sending && (
          <p className="text-green-500 font-bold">Sending email...</p>
        )}
        {sent && <p className="text-green-500 font-bold">Email sent!</p>}
        {!sending && !sent && (
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full"
            onClick={generateEmail}
          >
            Send Email
          </button>
        )}
      </div>
    </div>
  );
};

export default ReportEmail;
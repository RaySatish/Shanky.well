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
        console.log(res.data);
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
    emailBody += "Here is the health report of the students:\n\n";
    studentData.forEach((student) => {
      emailBody += `Student Name: ${student.studentName}\nDisease: ${student.disease}\nHostel: ${student.hostel}\n\n`;
    });
    emailBody += "\nPlease take necessary actions.\n\nRegards,\nAdmin";

    const mailtoLink = `mailto:kumarvishesh01230@gmail.com?subject=${encodeURIComponent(
      emailSubject
    )}&body=${encodeURIComponent(emailBody)}`;

    window.location.href = mailtoLink;

    setTimeout(() => {
      setSending(false);
      setSent(true);
    }, 2000); // Wait for 0.5 seconds before updating sent state
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

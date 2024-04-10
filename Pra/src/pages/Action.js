import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useSearchParams } from "react-router-dom";

const Action = () => {
  const [appointment, setAppointment] = useState(null);
  const [diagnosis, setDiagnosis] = useState("");
  const [admitted, setAdmitted] = useState(false);
  const [dischargeDate, setDischargeDate] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [hostel, setHostel] = useState("");
  const [roomNo, setRoomNo] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const id = searchParams.get("id");
  useEffect(() => {
    axios
      .get(`http://127.0.0.1:9000/api/v1/appointments/${id}`)
      .then((res) => {
        setAppointment(res.data.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setError(err);
        setIsLoading(false);
      });
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`http://127.0.0.1:9000/api/v1/diagnosis/add`, {
        studentName: appointment.studentName,
        doctorName: appointment.doctorName,
        disease: diagnosis,
        admitted,
        hostel,
        roomNo,
        dischargeDate,
      })
      .then((res) => {
        console.log("Diagnosis added successfully:", res.data);
        axios
          .delete(`http://127.0.0.1:9000/api/v1/appointments/${id}`)
          .then((res) => {
            console.log("Appointment deleted successfully:", res.data);
            // Perform any necessary actions after deletion
          })
          .catch((err) => {
            console.error("Failed to delete appointment:", err);
            // Handle error, e.g., show an error message
          });
        // Redirect to dashboard after successful submission
        navigate("/admin/dashboard");
      })
      .catch((err) => {
        console.error("Failed to add diagnosis:", err);
        // Handle error, e.g., show an error message
      });
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Diagnosis Details</h1>
      {appointment && (
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Student Name
            </label>
            <input
              type="text"
              value={appointment.studentName}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              disabled
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Doctor Name
            </label>
            <input
              type="text"
              value={appointment.doctorName}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              disabled
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Slot
            </label>
            <input
              type="text"
              value={appointment.slot}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              disabled
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Diagnosis
            </label>
            <input
              type="text"
              value={diagnosis}
              onChange={(e) => setDiagnosis(e.target.value)}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Admitted
            </label>
            <div className="mt-1">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  value="true"
                  checked={admitted === true}
                  onChange={() => setAdmitted(true)}
                  style={{
                    appearance: "none",
                    width: "1rem",
                    height: "1rem",
                    borderRadius: "50%",
                    border: "2px solid #4F46E5",
                    marginRight: "0.5rem",
                    outline: "none",
                    backgroundColor:
                      admitted === true ? "#4F46E5" : "transparent",
                  }}
                />
                <span className="ml-2">Yes</span>
              </label>
              <label className="inline-flex items-center ml-6">
                <input
                  type="radio"
                  value="false"
                  checked={admitted === false}
                  onChange={() => setAdmitted(false)}
                  style={{
                    appearance: "none",
                    width: "1rem",
                    height: "1rem",
                    borderRadius: "50%",
                    border: "2px solid #4F46E5",
                    marginRight: "0.5rem",
                    outline: "none",
                    backgroundColor:
                      admitted === false ? "#4F46E5" : "transparent",
                  }}
                />
                <span className="ml-2">No</span>
              </label>
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Discharge Date
            </label>
            <input
              type="date"
              value={dischargeDate}
              onChange={(e) => setDischargeDate(e.target.value)}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          </div>
          <div className="flex flex-wrap -mx-3 mb-4">
            <div className="w-full md:w-1/2 px-3">
              <label className="block text-sm font-medium text-gray-700">
                Hostel
              </label>
              <input
                type="text"
                value={hostel}
                onChange={(e) => setHostel(e.target.value)}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label className="block text-sm font-medium text-gray-700">
                Room No
              </label>
              <input
                type="text"
                value={roomNo}
                onChange={(e) => setRoomNo(e.target.value)}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              />
            </div>
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Submit
          </button>
        </form>
      )}
    </div>
  );
};

export default Action;

import React, { useState, useEffect } from "react";
import axios from "axios";

const Appointment = () => {
  const [registrationNo, setRegistrationNo] = useState("");
  const [doctors, setDoctors] = useState([]);
  const [selectedDoctor, setSelectedDoctor] = useState("");
  const [slots, setSlots] = useState([]);
  const [selectedSlot, setSelectedSlot] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [appointmentDetails, setAppointmentDetails] = useState(null);

  useEffect(() => {
    // Simulating data fetching for doctors and slots
    const fakeDoctors = [
      { id: 1, name: "Dr. John Doe", specialization: "Cardiology" },
      { id: 2, name: "Dr. Jane Smith", specialization: "Dermatology" },
      { id: 3, name: "Dr. Alice Johnson", specialization: "Pediatrics" },
    ];
    setDoctors(fakeDoctors);

    const fakeSlots = [
      { id: 1, time: "9:00 AM" },
      { id: 2, time: "10:00 AM" },
      { id: 3, time: "11:00 AM" },
      { id: 4, time: "2:00 PM" },
      { id: 5, time: "3:00 PM" },
      { id: 6, time: "4:00 PM" },
    ];
    setSlots(fakeSlots);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulating data fetching for student and doctor details
    const fakeStudentDetails = {
      registrationNo: "22MIS0401",
      name: "John Doe",
      email: "john.doe@example.com",
      phone: "+1234567890",
    };

    const doctorDetails = doctors.find(
      (doctor) => doctor.name === selectedDoctor
    );

    setAppointmentDetails({
      studentDetails: fakeStudentDetails,
      doctorDetails,
      selectedSlot,
    });
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="container mx-auto p-4">
        <div className="bg-white rounded-lg shadow-lg p-4">
          <h1 className="text-2xl font-bold mb-4">Appointment Confirmation</h1>
          <div>
            <h2 className="text-lg font-semibold">Student Details</h2>
            <p>
              <strong>Registration No:</strong>{" "}
              {appointmentDetails.studentDetails.registrationNo}
            </p>
            <p>
              <strong>Name:</strong> {appointmentDetails.studentDetails.name}
            </p>
            <p>
              <strong>Email:</strong> {appointmentDetails.studentDetails.email}
            </p>
            <p>
              <strong>Phone:</strong> {appointmentDetails.studentDetails.phone}
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold mt-4">Doctor Details</h2>
            <p>
              <strong>Name:</strong> {appointmentDetails.doctorDetails.name}
            </p>
            <p>
              <strong>Specialization:</strong>{" "}
              {appointmentDetails.doctorDetails.specialization}
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold mt-4">Slot Details</h2>
            <p>
              <strong>Time:</strong> {selectedSlot}
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-lg shadow-lg p-4"
      >
        <label className="block mb-2">
          <span className="text-lg">Student Registration No:</span>
          <input
            type="text"
            value={registrationNo}
            onChange={(e) => setRegistrationNo(e.target.value)}
            className="block w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </label>
        <label className="block mb-2">
          <span className="text-lg">Doctor Name:</span>
          <select
            value={selectedDoctor}
            onChange={(e) => setSelectedDoctor(e.target.value)}
            className="block w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          >
            <option value="">Select Doctor</option>
            {doctors.map((doctor) => (
              <option key={doctor.id} value={doctor.name}>
                {doctor.name} - {doctor.specialization}
              </option>
            ))}
          </select>
        </label>
        <label className="block mb-2">
          <span className="text-lg">Slot:</span>
          <select
            value={selectedSlot}
            onChange={(e) => setSelectedSlot(e.target.value)}
            className="block w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          >
            <option value="">Select Slot</option>
            {slots.map((slot) => (
              <option key={slot.id} value={slot.time}>
                {slot.time}
              </option>
            ))}
          </select>
        </label>
        <button
          type="submit"
          className="bg-blue-500 text-white text-center my-4 mx-auto py-2 px-4 rounded-lg hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Appointment;

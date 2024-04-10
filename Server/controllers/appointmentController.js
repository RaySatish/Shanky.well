const Appointment = require("../models/appointmentModel");

// Controller function to add appointment
const addAppointment = async (req, res) => {
  try {
    const { studentName, doctorName, slot } = req.body;
    const appointment = new Appointment({ studentName, doctorName, slot });
    await appointment.save();
    res
      .status(201)
      .json({ message: "Appointment added successfully", data: appointment });
  } catch (err) {
    res
      .status(400)
      .json({ message: "Failed to add appointment", error: err.message });
  }
};

// Controller function to get all appointments
const getAllAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.find();
    res.status(200).json({
      message: "Appointments retrieved successfully",
      data: appointments,
    });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Failed to retrieve appointments", error: err.message });
  }
};

const getAppointment = async (req, res) => {
  const { id } = req.params;
  const appointment = await Appointment.findById(id);
  if (!appointment) {
    return res.status(404).json({ error: "Appointment not found" });
  }
  res.status(200).json({ data: appointment });
};

const deleteAppointment = async (req, res) => {
  try {
    const id = req.params.id;
    // Assuming you have a mongoose model for appointments
    const appointment = await Appointment.findByIdAndDelete(id);
    if (!appointment) {
      return res.status(404).json({ message: "Appointment not found" });
    }
    res.json({ message: "Appointment deleted successfully" });
  } catch (err) {
    console.error("Failed to delete appointment:", err);
    res.status(500).json({ message: "Failed to delete appointment" });
  }
};

module.exports = {
  addAppointment,
  getAllAppointments,
  getAppointment,
  deleteAppointment,
};

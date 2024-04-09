const mongoose = require("mongoose");

// Define the schema
const appointmentSchema = new mongoose.Schema({
  studentName: {
    type: String,
    required: true,
  },
  doctorName: {
    type: String,
    required: true,
  },
  slot: {
    type: String,
    required: true,
  },
});

// Create a model from the schema
const Appointment = mongoose.model("Appointment", appointmentSchema);

module.exports = Appointment;

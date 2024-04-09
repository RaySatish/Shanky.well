const mongoose = require("mongoose");

// Define student schema
const studentSchema = new mongoose.Schema({
  regno: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  branch: { type: String, required: true },
  hostel: { type: String, required: true },
  gender: { type: String, enum: ["Male", "Female", "Other"], required: true },
});

// Create model from schema
const Student = mongoose.model("Student", studentSchema);

module.exports = Student;

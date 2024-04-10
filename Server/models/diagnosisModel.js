const mongoose = require("mongoose");
const { Schema } = mongoose;

const diagnosisSchema = new Schema({
  studentName: {
    type: String,
    required: true,
  },
  doctorName: {
    type: String,
    required: true,
  },
  disease: {
    type: String,
    required: true,
  },
  admitted: {
    type: Boolean,
    required: true,
  },
  hostel: {
    type: String,
    required: true,
  },
  roomNo: {
    type: String,
    required: true,
  },
  dischargeDate: {
    type: Date,
    required: true,
  },
});

const Diagnosis = mongoose.model("Diagnosis", diagnosisSchema);

module.exports = Diagnosis;

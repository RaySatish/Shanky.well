const Diagnosis = require("./../models/diagnosisModel");

const addDiagnosis = async (req, res) => {
  try {
    const {
      studentName,
      doctorName,
      disease,
      admitted,
      hostel,
      roomNo,
      dischargeDate,
    } = req.body;

    const newDiagnosis = new Diagnosis({
      studentName,
      doctorName,
      disease,
      admitted,
      hostel,
      roomNo,
      dischargeDate,
    });

    const savedDiagnosis = await newDiagnosis.save();

    res.status(201).json(savedDiagnosis);
  } catch (error) {
    console.error("Error adding diagnosis:", error);
    res.status(500).json({ error: "Failed to add diagnosis" });
  }
};

const getAllDiagnoses = async (req, res) => {
  try {
    const diagnoses = await Diagnosis.find();
    res.status(200).json(diagnoses);
  } catch (error) {
    console.error("Error retrieving diagnoses:", error);
    res.status(500).json({ error: "Failed to retrieve diagnoses" });
  }
};

module.exports = { getAllDiagnoses, addDiagnosis };

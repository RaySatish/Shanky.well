const express = require("express");
const router = express.Router();
const {
  addDiagnosis,
  getAllDiagnoses,
} = require("./../controllers/diagnosisController");

// Add a new diagnosis
router.post("/add", addDiagnosis);

// Get all diagnoses
router.get("/", getAllDiagnoses);

module.exports = router;

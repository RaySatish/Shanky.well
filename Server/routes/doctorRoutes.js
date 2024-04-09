const express = require("express");
const {
  addDoctors,
  getAllDoctors,
} = require("../controllers/doctorController");

const router = express.Router();

router.post("/add", addDoctors);
router.get("/", getAllDoctors);

module.exports = router;

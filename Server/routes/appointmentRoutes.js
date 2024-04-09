const express = require("express");
const {
  addAppointment,
  getAllAppointments,
} = require("../controllers/appointmentController");
const router = express.Router();

router.post("/add", addAppointment);
router.get("/", getAllAppointments);

module.exports = router;

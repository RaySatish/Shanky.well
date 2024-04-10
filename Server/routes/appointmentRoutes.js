const express = require("express");
const {
  addAppointment,
  getAllAppointments,
  getAppointment,
} = require("../controllers/appointmentController");
const router = express.Router();

router.post("/add", addAppointment);
router.get("/", getAllAppointments);
router.get("/:id", getAppointment);

module.exports = router;

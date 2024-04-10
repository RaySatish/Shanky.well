const express = require("express");

const {
  addAppointment,
  getAllAppointments,
  getAppointment,
  deleteAppointment,
} = require("../controllers/appointmentController");
const router = express.Router();

router.post("/add", addAppointment);
router.get("/", getAllAppointments);
router.get("/:id", getAppointment);

router.delete("/:id", deleteAppointment);

module.exports = router;

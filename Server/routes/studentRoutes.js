const express = require("express");
const {
  getStudentByRegno,
  addStudent,
  addStudents,
} = require("../controllers/studentController");

const router = express.Router();

router.post("/add", addStudents);
router.get("/:regno", getStudentByRegno);

module.exports = router;

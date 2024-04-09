const Student = require("../models/studentModel");

// Controller function to get student details by registration number
const getStudentByRegno = async (req, res) => {
  const regno = req.params.regno;
  try {
    const student = await Student.findOne({ regno });
    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }
    res.status(200).json(student);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

const addStudent = async (req, res) => {
  const { regno, name, branch, hostel, gender } = req.body;
  try {
    // Check if student with the same regno already exists
    const existingStudent = await Student.findOne({ regno });
    if (existingStudent) {
      return res.status(400).json({ message: "Student already exists" });
    }

    // Create a new student instance
    const newStudent = new Student({ regno, name, branch, hostel, gender });

    // Save the student to the database
    await newStudent.save();

    res.status(201).json({ message: "Student added successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

async function addStudents(req, res) {
  try {
    const result = await Student.insertMany(req.body);
    console.log(`${result.length} students added successfully`);
    res.status(201).json({ message: "Student added successfully" });
  } catch (error) {
    console.error("Failed to add students:", error);
    res.status(500).json({ message: "Server error" });
  }
}

module.exports = { getStudentByRegno, addStudent, addStudents };

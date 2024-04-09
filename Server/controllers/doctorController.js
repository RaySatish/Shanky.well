const Doctor = require("../models/doctorModel");

exports.addDoctors = async (req, res) => {
  try {
    const doctors = req.body;

    // Using insertMany to insert multiple documents
    const result = await Doctor.insertMany(doctors);

    res.status(201).json({
      success: true,
      message: `${result.length} doctors added successfully`,
    });
  } catch (error) {
    console.error("Error adding doctors:", error);
    res.status(500).json({ success: false, message: "Failed to add doctors" });
  }
};

exports.getAllDoctors = async (req, res) => {
  try {
    const doctors = await Doctor.find();
    res.status(200).json({ success: true, data: doctors });
  } catch (error) {
    console.error("Error fetching doctors:", error);
    res
      .status(500)
      .json({ success: false, message: "Failed to fetch doctors" });
  }
};

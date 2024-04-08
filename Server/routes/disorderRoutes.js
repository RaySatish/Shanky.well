const express = require("express");
const {
  addData,
  deleteData,
  getAllDisorder,
  getDisorder,
} = require("../controllers/disorderController");
const router = express.Router();

router.post("/add", addData);
router.delete("/delete", deleteData);
router.get("/", getAllDisorder);
router.get("/:slug", getDisorder);

module.exports = router;

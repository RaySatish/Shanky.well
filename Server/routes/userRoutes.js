const express = require("express");
const {
  signup,
  login,
  protect,
  forgetPassword,
  resetPassword,
  logout,
} = require("../controllers/authController");
const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.get("/logout", logout);
router.post("/forgetPassword", forgetPassword);
router.post("/resetPassword/:token", resetPassword);
router.get("/display", protect, (req, res, next) => {
  res.status(200).json({
    message: "since this route is visible. it means everything is working!",
    user: req.user,
  });
});

module.exports = router;

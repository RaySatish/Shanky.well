const errorHandler = require("./controllers/errorController");
const express = require("express");
const userRouter = require("./routes/userRoutes");
const disorderRouter = require("./routes/disorderRoutes");
const doctorRouter = require("./routes/doctorRoutes");
const appointmentRouter = require("./routes/appointmentRoutes");
const studentRouter = require("./routes/studentRoutes");
const cors = require("cors");
const catchAsync = require("./utils/catchAsync");
const app = express();

// MIDDLEWARES

app.use(express.json());
app.use(cors());

app.use("/api/v1/users", userRouter);
app.use("/api/v1/disorder", disorderRouter);
app.use("/api/v1/doctors", doctorRouter);
app.use("/api/v1/appointments", appointmentRouter);
app.use("/api/v1/students", studentRouter);

app.get("/", (req, res, next) => {
  res.status(200).json({
    message: "it is just an simple project",
  });
});

// TO HANDLE ALL UNHANDLED ROUTES
app.all("*", (req, res, next) => {
  res.status(404).json({
    status: "fail",
    message: `Can't find ${req.originalUrl} on this server`,
  });
});

app.use(errorHandler);

module.exports = app;

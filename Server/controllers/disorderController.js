const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");
const Disorder = require("./../models/disorderSchema");

exports.addData = catchAsync(async (req, res, next) => {
  const list = await Disorder.create(req.body);

  if (list) {
    res.status(200).json({
      status: "success",
    });
  } else {
    res.status(200).json({
      status: "fail",
    });
  }
});

exports.deleteData = async (req, res, next) => {
  try {
    await Disorder.deleteMany();
    console.log("database deletely successfully");
    res.status(200).json({
      status: "success",
    });
  } catch (err) {
    console.log(err);
    res.status(404).json({
      status: "fail",
    });
  }
};

exports.getAllDisorder = catchAsync(async (req, res, next) => {
  const list = await Disorder.find();

  if (!list) return next(new AppError("There is an error loading data!"));

  res.status(200).json({
    status: "success",
    data: list,
  });
});

exports.getDisorder = catchAsync(async (req, res, next) => {
  const disorder = await Disorder.findOne({ slug: req.params.slug });

  if (!disorder) return next(new AppError("There is an error loading data!"));

  res.status(200).json({
    status: "success",
    data: disorder,
  });
});

const catchAsync = require("../utils/catchAsync");
const User = require("./../models/userModel");
const AppError = require("./../utils/appError");
const Email = require("./../utils/email");
const jwt = require("jsonwebtoken");
const { promisify } = require("util");

const signToken = (id) =>
  jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES,
  });

exports.signup = catchAsync(async (req, res, next) => {
  const newUser = await User.create({
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    password: req.body.password,
    confirmPassword: req.body.confirmPassword,
  });

  const token = signToken(newUser._id);
  const url = "";
  await new Email(newUser, url).sendWelcome();

  res.status(200).json({
    status: "success",
    token,
    data: {
      user: newUser,
    },
  });
});

exports.login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return next(new AppError("Please provide email and password!", 400));
  }

  const user = await User.findOne({ email }).select("+password");

  if (!user || !(await user.correctPassword(password, user.password))) {
    return next(
      new AppError("Please provide correct email and password!", 401)
    );
  }

  const token = signToken(user._id);

  res.status(200).json({
    status: "success",
    token,
  });
});

exports.protect = catchAsync(async (req, res, next) => {
  // 1) Check if the token exist
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }

  if (!token) {
    return next(
      new AppError("You are not logged in, Please login to get access", 401)
    );
  }

  const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

  const currentUser = await User.findById(decoded.id);

  if (!currentUser) {
    return next(
      new AppError("The user belonging to this token doesnot exist", 401)
    );
  }

  if (await currentUser.changePasswordAfter(decoded.iat)) {
    return next(
      new AppError("The password has been changed, please login again", 401)
    );
  }

  req.user = currentUser;

  next();
});

exports.forgetPassword = catchAsync(async (req, res, next) => {
  // 1) checking if user exist
  const user = await User.findOne({ email: req.body.email });

  if (!user) {
    return next(new AppError("User doesnot exist with this email"), 401);
  }

  // 2) creating reset token
  const resetToken = await user.createPasswordResetToken();
  await user.save({ validateBeforeSave: false });
  console.log(resetToken);

  // 3) creating reset URL and message
  const resetURL = `${req.protocol}://${req.get(
    "host"
  )}/api/v1/users/resetPassword/${resetToken}`;

  const message = `Forgot your password? Submit a PATCH request with your new password and passwordConfirm to: ${resetURL}.\nIf you didn't forget your password, please ignore this email`;
  try {
    // 4) sending mail
    await sendEmail({
      to: user.email,
      subject: "Your password reset token (valid for 10 mins)",
      message,
    });
  } catch (err) {
    user.passwordResetToken = undefined;
    user.passwordResetExpires = undefined;
    await user.save({ validateBeforeSave: false });

    return next(
      new AppError(
        "There was some error in sending email, please try again later"
      ),
      500
    );
  }

  res.status(200).json({
    status: "success",
    message: "Token has been send through email",
  });
});

exports.resetPassword = catchAsync(async (req, res, next) => {
  // 1) get the user based on the token

  const hashedToken = crypto
    .createHash("sha256")
    .update(req.params.token)
    .digest("hex");

  const user = await User.findOne({
    passwordResetToken: hashedToken,
    passwordResetExpires: { $gt: Date.now() },
  });

  // 2) if token not expired, set new password

  if (!user) {
    return next(new AppError("Token is not valid or expired!", 400));
  }

  user.password = req.body.password;
  user.confirmPassword = req.body.confirmPassword;
  user.passwordResetToken = undefined;
  user.passwordResetExpires = undefined;

  // 3) update changePasswordAt

  // 4) login the user

  const token = signToken(user._id);

  res.status(200).json({
    status: "success",
    token,
  });
});

exports.updatePassword = catchAsync(async (req, res, next) => {
  const user = await User.findById(req.user.id).select("+password");

  if (!(await user.correctPassword(req.body.currentPassword, user.password))) {
    return next(new AppError("invalid current password", 401));
  }

  user.password = req.body.password;
  user.confirmPassword = req.body.confirmPassword;
  await user.save();

  const token = signToken(user._id);

  res.status(200).json({
    status: "success",
    token,
  });
});

exports.updateMe = catchAsync(async (req, res, next) => {
  if (req.body.password || req.body.confirmPassword) {
    return next(new AppError("This route is not for updating password", 400));
  }

  const filteredObj = {
    name: req.body.name,
    email: req.body.email,
  };

  const updatedUser = await User.findByIdAndUpdate(req.user.id, filteredObj, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({
    status: "success",
    data: {
      user: updatedUser,
    },
  });
});

exports.deleteMe = catchAsync(async (req, res, next) => {
  await User.findByIdAndUpdate(req.user.id, { active: false });

  res.status(204).json({
    status: "success",
    data: null,
  });
});

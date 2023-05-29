const User = require("../models/User");
const Token = require("../models/Token");
const { StatusCodes } = require("http-status-codes");
const CustomError = require("../errors");
const {
  createTokenUser,
  sendVerificationEmail,
  sendResetPasswordEmail,
  createHash,
  createJWT,
  isTokenValid,
} = require("../utils");
const crypto = require("crypto");

const register = async (req, res) => {
  const { email, name, password } = req.body;

  const emailAlreadyExists = await User.findOne({ email });
  if (emailAlreadyExists) {
    throw new CustomError.BadRequestError("Email already exists");
  }

  // first registered user is an admin
  const isFirstAccount = (await User.countDocuments({})) === 0;
  const role = isFirstAccount ? "admin" : "user";

  const verificationToken = crypto.randomBytes(40).toString("hex");

  const user = await User.create({
    name,
    email,
    password,
    role,
    verificationToken,
  });
  const origin = process.env.ORIGIN 

  await sendVerificationEmail({
    name: user.name,
    email: user.email,
    verificationToken: user.verificationToken,
    origin,
  });
  // send verification token back only while testing in postman!!!
  res.status(StatusCodes.CREATED).json({
    msg: "Success! Please check your email to verify account",
  });
};

const verifyEmail = async (req, res) => {
  const { verificationToken, email } = req.body;

  const user = await User.findOne({ email });

  if (!user) {
    throw new CustomError.UnauthenticatedError("Verification Failed");
  }

  if (user.verificationToken !== verificationToken) {
    throw new CustomError.UnauthenticatedError("Verification Failed");
  }

  (user.isVerified = true), (user.verified = Date.now());
  user.verificationToken = "";

  await user.save();

  res.status(StatusCodes.OK).json({ msg: "Email Verified" });
};

const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw new CustomError.BadRequestError("Please provide email and password");
  }
  const user = await User.findOne({ email });

  if (!user) {
    throw new CustomError.UnauthenticatedError("Email is not correct");
  }
  const isPasswordCorrect = await user.comparePassword(password);

  if (!isPasswordCorrect) {
    throw new CustomError.UnauthenticatedError("Password is not correct");
  }
  if (!user.isVerified) {
    throw new CustomError.UnauthenticatedError("Please verify your email");
  }
  const tokenUser = createTokenUser(user);

  // create refresh token
  let refreshToken = "";
  // check for existing token
  const existingToken = await Token.findOne({ user: user._id });

  if (existingToken) {
    const { isValid } = existingToken;
    if (!isValid) {
      throw new CustomError.UnauthenticatedError("Invalid Credentials");
    }
    refreshToken = existingToken.refreshToken;
    const accessToken = createJWT({ payload: { user } }, "1d");

    res
      .status(StatusCodes.OK)
      .json({ user: tokenUser, refreshToken, accessToken });
    return;
  }

  const userAgent = req.headers["user-agent"];
  const ip = req.ip;
  const accessToken = createJWT({ payload: { user } }, "1d");
  refreshToken = createJWT({ payload: { user } }, "7d");

  const userToken = { refreshToken, ip, userAgent, user: user._id };

  await Token.create(userToken);

  res
    .status(StatusCodes.OK)
    .json({ user: tokenUser, refreshToken, accessToken });
};
const logout = async (req, res) => {
  await Token.findOneAndDelete({ user: req.user._id });

  res.status(StatusCodes.OK).json({ msg: "user logged out!" });
};

const forgotPassword = async (req, res) => {
  const { email } = req.body;
  if (!email) {
    throw new CustomError.BadRequestError("Please provide valid email");
  }

  const user = await User.findOne({ email });

  if (user) {
    const passwordToken = crypto.randomBytes(70).toString("hex");
    // send email
    const origin = process.env.ORIGIN 
    await sendResetPasswordEmail({
      name: user.name,
      email: user.email,
      token: passwordToken,
      origin,
    });

    const tenMinutes = 1000 * 60 * 10;
    const passwordTokenExpirationDate = new Date(Date.now() + tenMinutes);

    user.passwordToken = createHash(passwordToken);
    user.passwordTokenExpirationDate = passwordTokenExpirationDate;
    await user.save();

    res
      .status(StatusCodes.OK)
      .json({ msg: "Please check your email for reset password link" });
  } else {
    throw new CustomError.BadRequestError("Email does not exist");
  }
};
const resetPassword = async (req, res) => {
  const { token, email, password } = req.body;
  if (!token || !email || !password) {
    throw new CustomError.BadRequestError("Please provide all values");
  }
  const user = await User.findOne({ email });

  if (user) {
    const currentDate = new Date();

    if (
      user.passwordToken === createHash(token) &&
      user.passwordTokenExpirationDate > currentDate
    ) {
      user.password = password;
      user.passwordToken = null;
      user.passwordTokenExpirationDate = null;
      await user.save();
    }
  }

  res.send("reset password");
};

const refreshToken = async (req, res) => {
  const { refreshToken } = req.body;

  //send error if there is no token or it's invalid
  if (!refreshToken)
    throw new CustomError.UnauthenticatedError("You are not authenticated!");
  const existingToken = await Token.findOne({ refreshToken: refreshToken });
  const payload = isTokenValid(refreshToken);

  if (!existingToken) {
    throw new CustomError.UnauthorizedError("Refresh token is not valid!");
  }

  if (!existingToken.isValid) {
    throw new CustomError.UnauthenticatedError("Invalid Credentials");
  }

  const accessToken = createJWT({ payload: { user: payload.user } }, "1d");

  res
    .status(StatusCodes.OK)
    .json({ refreshToken: refreshToken, accessToken: accessToken });
};

module.exports = {
  register,
  login,
  logout,
  verifyEmail,
  forgotPassword,
  resetPassword,
  refreshToken,
};

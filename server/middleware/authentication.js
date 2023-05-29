const CustomError = require('../errors');
const { isTokenValid } = require('../utils');
const authenticateUser = async (req, res, next) => {

  try {
    let authHeader = req.header("Authorization")

    if (!authHeader) {
      throw new CustomError.UnauthenticatedError('Access Denied');
    }
    const token = authHeader.split(" ")[1];
    const payload = isTokenValid(token);

    req.user = payload.user;
    next();
  } catch (error) {
    throw new CustomError.UnauthenticatedError('Authentication Invalid');
  }
};

const authorizePermissions = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      throw new CustomError.UnauthorizedError(
        'Unauthorized to access this route'
      );
    }
    next();
  };
};

module.exports = {
  authenticateUser,
  authorizePermissions,
};

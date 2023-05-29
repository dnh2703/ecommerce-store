const jwt = require('jsonwebtoken');

const createJWT = ({ payload }, expiresIn) => {
  const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: expiresIn });
  return token;
};

const isTokenValid = (token) => jwt.verify(token, process.env.JWT_SECRET);


module.exports = {
  createJWT,
  isTokenValid,
};

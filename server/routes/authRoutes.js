const express = require('express');
const router = express.Router();

const { authenticateUser, authorizePermissions } = require('../middleware/authentication');

const {
  register,
  login,
  logout,
  verifyEmail,
  forgotPassword,
  resetPassword, jwtAuth
} = require('../controllers/authController');

router.get('/admin-auth', authenticateUser, authorizePermissions('admin'), jwtAuth)
router.get('/jwt-auth', authenticateUser, jwtAuth)
router.post('/register', register);
router.post('/login', login);
router.delete('/logout', authenticateUser, logout);
router.post('/verify-email', verifyEmail);
router.post('/reset-password', resetPassword);
router.post('/forgot-password', forgotPassword);

module.exports = router;

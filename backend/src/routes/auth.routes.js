const express = require('express');
const router = express.Router();
const { validateRegistration, validateLogin } = require('../middlewares/validate.middleware');
const authController = require('../controllers/auth.controller');
const { authenticateToken } = require('../middlewares/auth.middleware');

// Routes
router.post('/register', validateRegistration, authController.register);
router.post('/login', validateLogin, authController.login);
router.post('/logout', authenticateToken, authController.logout);


module.exports = router; 
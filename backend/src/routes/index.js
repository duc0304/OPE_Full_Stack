const express = require('express');
const router = express.Router();
const authRoutes = require('./auth.routes');

router.use('/auth', authRoutes);

// Health check route
router.get('/health', (req, res) => {
  res.status(200).json({ message: 'API is running' });
});

module.exports = router; 
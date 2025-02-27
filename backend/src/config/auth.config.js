module.exports = {
  secret: process.env.JWT_SECRET || 'duc03042003',
  expiresIn: process.env.JWT_EXPIRATION || 86400 // 24 hours
}; 
const express = require('express');
const auth = require('../middleware/authentication');
const testUser = require('../middleware/test-user');
const router = express.Router();
const { register, login, updateUser } = require('../controllers/auth');
const rateLimiter = require('express-rate-limit');

const apiLimiter = rateLimiter({
  windowMs: 15 * 60 * 1000,
  max: 1,
  message: { msg: 'Too many requests in the past 15 minutes' },
});

router.post('/register', apiLimiter, register);
router.post('/login', apiLimiter, login);
router.patch('/updateUser', auth, testUser, updateUser);

module.exports = router;

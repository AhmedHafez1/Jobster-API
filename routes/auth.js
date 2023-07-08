const express = require('express');
const auth = require('../middleware/authentication');
const router = express.Router();
const { register, login, updateUser } = require('../controllers/auth');
router.post('/register', register);
router.post('/login', login);
router.patch('/updateUser', auth, updateUser);

module.exports = router;

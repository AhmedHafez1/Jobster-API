const express = require('express');
const auth = require('../middleware/authentication');
const testUser = require('../middleware/test-user');
const router = express.Router();
const { register, login, updateUser } = require('../controllers/auth');

router.post('/register', register);
router.post('/login', login);
router.patch('/updateUser', auth, testUser, updateUser);

module.exports = router;

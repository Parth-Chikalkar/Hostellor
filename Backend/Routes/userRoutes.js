const express = require('express');
const router = express.Router();

const { createUser, loginUser , getroomies } = require('../Controllers/userController.js');

router.post('/signup', createUser);
router.post('/login', loginUser);
router.get('/roomDetails', getroomies);

module.exports = router;


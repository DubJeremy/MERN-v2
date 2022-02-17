const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/userCtrl');

router.post('/signup', userCtrl.register);
router.post('/signin', userCtrl.signin);

module.exports = router;
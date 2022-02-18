const express = require('express');
const router = express.Router();

const auth = require('../middlewares/auth');
const userCtrl = require('../controllers/userCtrl');

router.post('/signup', userCtrl.register);
router.post('/signin', userCtrl.signin);

router.get('/:id', userCtrl.userInfo);
router.put('/:id', userCtrl.userUpdate);
router.delete('/:id', userCtrl.userDelete);


module.exports = router;
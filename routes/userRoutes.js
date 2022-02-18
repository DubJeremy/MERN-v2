const express = require('express');
const router = express.Router();

const auth = require('../middlewares/auth');
const userCtrl = require('../controllers/userCtrl');

router.post('/signup', userCtrl.register);
router.post('/signin', userCtrl.signin);

router.get('/:id', userCtrl.userInfo);
// router.put('/:id', auth, userCtrl.userUpdate);
// router.delete('/:id', auth, userCtrl.userDelete);


module.exports = router;
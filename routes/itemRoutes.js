const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');
const admin = require('../middlewares/admin');
const stuffCtrl = require('../controllers/itemCtrl');

router.get('/', auth, admin, stuffCtrl.getAllItem);
router.post('/', auth, admin, multer, stuffCtrl.createItem);
router.get('/:id', auth, admin, stuffCtrl.getOneItem);
router.put('/:id', auth, admin, multer, stuffCtrl.modifyItem);
router.delete('/:id', auth, admin, stuffCtrl.deleteItem);

module.exports = router;
const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
// const multer = require('../middleware/multer-config');

const stuffCtrl = require('../controllers/itemCtrl');

router.get('/', auth, stuffCtrl.getAllItem);
router.post('/', auth, multer, stuffCtrl.createItem);
router.get('/:id', auth, stuffCtrl.getOneItem);
router.put('/:id', auth, multer, stuffCtrl.modifyItem);
router.delete('/:id', auth, stuffCtrl.deleteItem);

module.exports = router;
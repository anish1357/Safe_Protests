const express = require('express');
const UpdateController = require('../controllers/update');
const isAuth = require('../middleware/auth');
const router = express.Router();

router.route('/pending/:protestId').get(isAuth, UpdateController.getPendingUpdates);
router.route('/verify/:updateId').get(isAuth, UpdateController.verifyUpdate);
router.route('/ignore/:updateId').get(isAuth, UpdateController.ignoreUpdate);
router.route('/block/:updateId').get(isAuth, UpdateController.blockUsers);



module.exports = router;
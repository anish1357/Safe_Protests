const express = require('express');
const router = express.Router();
const isAuth = require('../middleware/auth');
const ProtestController = require('../controllers/protest');

router.route('/addUpdate/:protestId').post(isAuth, ProtestController.update);//Add update
router.route('/singleProtest/:protestId').get(isAuth, ProtestController.getProtest);//Single protest data
router.route('/signup/:protestId').get(isAuth, ProtestController.signupProtest);//Sign up for a particular protest
router.route('/present/:protestId').get(isAuth, ProtestController.presentProtest);//signup for being present
router.route('/admin/:protestId').post(isAuth, ProtestController.addAdmin);


module.exports = router;
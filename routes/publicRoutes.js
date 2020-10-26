const express = require('express');
const GlobalController = require('../controllers/global');


const router = express.Router();


router.route('/signup').post(GlobalController.registerUser);//Sign up for user 
router.route('/login').post(GlobalController.login);//Login for user
router.route('/all-protests').get(GlobalController.getProtests);//Get all protests

module.exports = router;
const express = require('express');
const UserController = require('../controllers/user');
const isAuth = require('../middleware/auth');


const router = express.Router();


router.route('/createprotest').post(isAuth, UserController.createProtest);//allow creating of protest
router.route('/myprotests/:userId').get(isAuth, UserController.myProtests);//Get all protest created by User


module.exports = router;
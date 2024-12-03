const express = require('express');
const router = express.Router();
const authController = require('../controller/authController');
const userController = require('../controller/userController');

router.post('/login', authController.login);
router.post("/cadastro", userController.createUser);
router.post("/rotarAutenticada", authController.verifyToken, userController.routerAuthenticated);


module.exports = router;

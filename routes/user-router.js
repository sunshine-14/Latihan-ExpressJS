'use strict'
const express = require('express');
const router = express.Router();
const authController = require('../controller/user-controller');

router.get('/get-data', authController.getData);
router.get('/get-data/:id', authController.getDataById);

module.exports = router
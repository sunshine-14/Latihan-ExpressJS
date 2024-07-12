'use strict'
const express = require('express');
const router = express.Router();

const  { 
    getData
} = require('../controller/auth')

router.get('/', getData)

module.exports = router
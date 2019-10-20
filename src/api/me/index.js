'use strict';

const express = require('express');
const controller = require('./me.controller');

const router = express.Router();

router.post('/login', controller.login);

module.exports = router;

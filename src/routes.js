'use strict';

const express = require('express');
const meRouter = require('./api/me');

const router = express.Router();

router.use('/me', meRouter);

module.exports = router;

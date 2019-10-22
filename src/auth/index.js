'use strict';

const express = require('express');
const passport = require('passport');

const authContrller = require('./auth.controller');

const router = express.Router();

router.get('/login', passport.authenticate('oauth2'), authContrller.login);
router.get('/logout', authContrller.logout);

module.exports = router;

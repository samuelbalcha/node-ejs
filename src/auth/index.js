'use strict';

const express = require('express');
const passport = require('passport');

const authContrller = require('./auth.controller');

const router = express.Router();

router.get('/login', passport.authenticate('oauth2'));
router.get('/logout', authContrller.logout);

router.get(
  '/',
  passport.authenticate('oauth2', { failureRedirect: '/error' }),
  function(_req, res) {
    res.redirect('/dashboard');
  }
);

module.exports = router;

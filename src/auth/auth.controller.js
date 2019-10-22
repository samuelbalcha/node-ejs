'use strict';

const authService = require('./passport.auth.service');

module.exports = {
  logout
};

function logout(req, res) {
  req.logout();
  res.redirect('/home');
}

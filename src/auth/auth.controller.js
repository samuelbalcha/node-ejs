'use strict';

const authService = require('./passport.auth.service');

module.exports = {
  login,
  logout
};

async function login(_req, res) {
  const result = await authService.login();
  res.json(result);
}

function logout(req, res) {
  req.logout();
  res.redirect('/');
}

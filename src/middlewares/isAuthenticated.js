'use strict';

const isAuthenticated = (req, res, next) => {
  if (req.user) {
    return next();
  }

  res.redirect('/home');
};

module.exports = isAuthenticated;

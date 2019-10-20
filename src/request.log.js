'use strict';

const logRequest = (req, _res, next) => {
  console.log(`${req.method} ${req.originalUrl}`);
  next();
};

module.exports = logRequest;

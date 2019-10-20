'use strict';

const service = require('./me.service');

module.exports = {
  login
};

async function login(req, res, next) {
  const result = await service.login();
  res.json(result);
}

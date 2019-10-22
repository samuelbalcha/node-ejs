'use strict';

const _ = require('lodash');

const all = {
  AUTH_AUTHORIZATION_URL:
    'https://staging-auth.wallstreetdocs.com/oauth/authorize',
  AUTH_TOKEN_URL: 'https://staging-auth.wallstreetdocs.com/oauth/token',
  AUTH_CALLBACK_URL: 'http://localhost:3000',
  ENV: process.env.NODE_ENV
};

const config = _.merge(all, require('./' + process.env.NODE_ENV + '.js'));

module.exports = config;

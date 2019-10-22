'use strict';
const passport = require('passport');
const OAuth2Strategy = require('passport-oauth2');
const request = require('request');
const config = require('../config');

const oAuth2Config = {
  authorizationURL: config.AUTH_AUTHORIZATION_URL,
  tokenURL: config.AUTH_TOKEN_URL,
  clientID: config.AUTH_CLIENT_ID,
  clientSecret: config.AUTH_CLIENT_SECRET,
  callbackURL: config.AUTH_CALLBACK_URL
};

const userInfoUrl = 'https://staging-auth.wallstreetdocs.com/oauth/userinfo';
OAuth2Strategy.prototype.userProfile = (accessToken, done) => {
  const options = {
    url: userInfoUrl,
    headers: {
      'User-Agent': 'request',
      Authorization: `Bearer ${accessToken}`
    }
  };

  request(options, callback);

  function callback(error, response, body) {
    if (error || response.statusCode !== 200) {
      return done(error);
    }

    const info = JSON.parse(body);
    console.log('info', info);
    return done(null, info.user);
  }
};

passport.use(
  'oauth2',
  new OAuth2Strategy(
    oAuth2Config,
    (_accessToken, _refreshToken, params, _profile, done) => {
      return done(null, params);
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser(async (user, done) => {
  done(null, user);
});

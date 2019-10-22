'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const session = require('express-session');
const passport = require('passport');
const path = require('path');

const { isAuthenticated, logRequest } = require('./middlewares');
const authRouter = require('./auth');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views/pages'));

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({ secret: 'wds-secrete' }));
app.use(passport.initialize());
app.use(passport.session());

app.use(logRequest);
app.use('/', authRouter);

app.get('/home', (req, res) => {
  res.render('index', renderView(req, req.user));
});

app.get('/error', (req, res) => {
  res.render('error', renderView(req));
});

app.get('/dashboard', isAuthenticated, (req, res) => {
  const { user } = req;
  res.render('dashboard', renderView(req, user));
});

app.listen(3000, () => {
  console.log('wsd-server connected at port 3000');
});

function renderView(req, data) {
  return {
    isLoggedIn: Boolean(req.user),
    ...data
  };
}

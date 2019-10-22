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
app.set('views', path.join(__dirname, '/views'));

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({ secret: 'wds-secrete' }));
app.use(passport.initialize());
app.use(passport.session());

app.use(logRequest);

app.use('/auth', authRouter);

app.get('/home', (_req, res) => {
  res.render('pages/index');
});

app.get('/dashboard', isAuthenticated, (_req, res) => {
  res.render('pages/index');
});

app.listen(3000, () => {
  console.log('wsd-server connected at port 3000');
});

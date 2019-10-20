'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const routes = require('./routes');
const logRequest = require('./request.log');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(logRequest);
app.use('/api', routes);

app.get('/', (_req, res) => {
  res.render('pages/index');
});

app.listen(3000, () => {
  console.log('wsd-server connected at port 3000');
});

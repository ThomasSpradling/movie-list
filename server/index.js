const express = require('express');
const db = require('./db');
const path = require('path');

const morgan = require('morgan');
const cors = require('cors');

const router = require('./routes');

const app = express();
module.exports.app = app;

app.set('port', 3000);

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

app.use('/list', router);

app.use(express.static(path.join(__dirname, '../client/dist')));

if (!module.parent) {
  app.listen(app.get('port'));
  console.log('Listening on', app.get('port'));
}
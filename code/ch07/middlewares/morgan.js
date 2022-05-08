const express = require('express');
const morgan = require('morgan');
const fs = require('fs');
const path = require('path');

const app = express();

const accessLogStream = fs.createWriteStream(
  path.join(__dirname, 'access.log'),
  {
    flags: 'a',
  }
);

app.use(morgan('combined', { stream: accessLogStream }));

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(8080);

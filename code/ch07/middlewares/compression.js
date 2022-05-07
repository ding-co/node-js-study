const express = require('express');
const compression = require('compression');

const app = express();

app.use('/api/getMap', compression());

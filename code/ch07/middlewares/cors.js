const express = require('express');
const cors = require('cors');

const app = express();

const corsOptions = {
  origin: 'http://example.com',
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.get('/products/:id', (req, res, next) => {
  res.json({ msg: 'This is CORS-enabled for all origins' });
});

app.get('/customers/:id', cors(corsOptions), (req, res, next) => {
  res.json({ msg: 'This is CORS-enabled for only example.com' });
});

app.listen(80, () => {
  console.log('CORS-enabled web server listening on port 80');
});

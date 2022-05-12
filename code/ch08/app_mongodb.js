const express = require('express');
const mongodb = require('./mongoose');
const Customer = require('./mongoose/schemas/customer');

const app = express();

mongodb.connect();

app.get('/customers', async (req, res) => {
  const customers = await Customer.find();
  console.log(customers);
});

app.listen(3000, () => {
  console.log('Server started. port 3000.');
});

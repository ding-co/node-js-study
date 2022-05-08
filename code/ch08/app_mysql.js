const express = require('express');
const mysql = require('./mysql');

const app = express();

app.get('/api/customers', async (req, res) => {
  const customers = await mysql.query('customerList');
  console.log(customers);
  res.send(customers);
});

app.listen(3000, () => {
  console.log('Server started. prot 3000.');
});

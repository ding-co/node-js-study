const express = require('express');
require('dotenv').config({ path: 'mysql/.env' });
const mysql = require('./mysql');

const app = express();

app.use(
  express.json({
    limit: '50mb',
  })
);

app.get('/api/customers', async (req, res) => {
  const customers = await mysql.query('customerList');
  res.send(customers);
});

app.post('/api/customer/insert', async (req, res) => {
  const result = await mysql.query('customerInsert', req.body.param);
  res.send(result);
});

app.put('/api/customer/update', async (req, res) => {
  const result = await mysql.query('customerUpdate', req.body.param);
  res.send(result);
});

app.delete('/api/customer/delete/:id', async (req, res) => {
  const { id } = req.params;
  const result = await mysql.query('customerDelete', id);
  res.send(result);
});

app.listen(3000, () => {
  console.log('Server started. prot 3000.');
});

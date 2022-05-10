const express = require('express');
const sequelize = require('./models').sequelize;

const app = express();

sequelize.sync();

const { customer } = require('./models');

app.use(
  express.json({
    limit: '50mb',
  })
);

app.get('/api/customers', async (req, res) => {
  const customerData = await customer.findAll();
  console.log(customerData);
  res.send(customerData);
});

app.listen(3000, () => {
  console.log('Server started. port 3000.');
});

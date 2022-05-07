const express = require('express');
const app = express();
const PORT = 3000;

// const customerRoute = require('./routes/customer');
// const productRoute = require('./routes/product');

app.use(
  express.json({
    limit: '50mb',
  })
);

// app.use('/customer', customerRoute);
// app.use('/product', productRoute);

// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });

// app.get('/about', (req, res) => {
//   res.send('about');
// });

// app.post('/customer', (req, res) => {
//   console.log(req.body.param);
//   res.send(req.body.param);
// });

app.listen(PORT, () => {
  console.log(`Server started. port ${PORT}.`);
});

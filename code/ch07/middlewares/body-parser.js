const express = require('express');
// const bodyParser = require('body-parser');

const app = express();

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

// app.use(express.urlencoded({ extended: false }));
// app.use(
//   express.json({
//     limit: '50mb',
//   })
// );

const urlencodedParser = express.urlencoded({ extended: false });
const jsonParser = express.json();

app.post('/login', urlencodedParser, (req, res) => {
  res.send('welcome, ' + req.body.username);
});

app.post('/api/users', jsonParser, (req, res) => {
  // req.body에서 사용자 정보 획득
})

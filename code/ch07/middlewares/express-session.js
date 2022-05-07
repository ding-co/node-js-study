const express = require('express');
const session = require('express-session');

const app = express();

app.use(
  session({
    secret: 'secret key',
    resave: false,
    saveUninitialized: true,
    cookie: {
      httpOnly: true,
      secure: true,
      maxAge: 60000,
    },
  })
);

app.listen(3000, () => {
  console.log('3000번 포트로 서버를 실행했습니다.');
});

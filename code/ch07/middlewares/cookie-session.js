const express = require('express');
const cookieSession = require('cookie-session');

const app = express();

app.use(
  cookieSession({
    name: 'session',
    keys: [
      /* secret keys */
    ],
    maxAge: 24 * 60 * 60 * 1000,
  })
);

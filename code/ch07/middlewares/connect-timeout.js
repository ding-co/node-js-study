const express = require('express');
const timeout = require('connect-timeout');

const app = express();

const haltOnTimeout = (req, res, next) => {
  if (!req.timedout) next();
};

const savePost = (post, cb) => {
  setTimeout(() => {
    cb(null, (Math.random() * 40000) >>> 0);
  }, (Math.random() * 7000) >>> 0);
};

app.post(
  '/save',
  timeout('5s'),
  express.json(),
  haltOnTimeout,
  (req, res, next) => {
    savePost(req.body, (err, id) => {
      if (err) return next(err);
      if (req.timedout) return;
      res.send('saved as id ' + id);
    });
  }
);

app.listen(3000);

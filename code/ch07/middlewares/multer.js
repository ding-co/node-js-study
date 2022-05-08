const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();

app.use(
  express.json({
    limit: '50mb',
  })
);

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, new Date().valueOf() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

app.post('/profile', upload.single('avatar'), (req, res, next) => {
  console.log(req.file);
  console.log(req.body);
});

app.post('/photos/upload', upload.array('photos', 12), (req, res, next) => {
  console.log(req.files);
});

app.listen(3000, () => {
  console.log('Server started. port 3000');
});

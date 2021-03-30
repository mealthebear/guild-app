require('dotenv').config()

const cookieParser = require('cookie-parser');
const express = require('express');
const jwt = require('jsonwebtoken');
const path = require('path');
const router = require('./router.js');

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../client/dist')));

app.use('/api', router);

app.use(cookieParser());

app.post('/auth', (req, res) => {
  const username = req.body.username;
  const user = { user: username };

  const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '15m' });

  res.cookie('accessToken', accessToken, { httpOnly: true });

  res.json({ accessToken: accessToken });
})

app.get('/bank', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'), (err) => {
    if (err) {
      res.status(500).send(err)
    }
  })
})

app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'), (err) => {
    if (err) {
      res.status(500).send(err)
    }
  })
})

app.get('/verify-token', (req, res) => {
  let token = req.cookies.accessToken;
  if (!token) {
    res.sendStatus(401);
  }

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) {
      return res.sendStatus(403);
    } else {
      return res.sendStatus(200);
    }
  })
})

app.listen(port, console.log(`Listening on port ${port}!`));

const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');
const router = require('./router.js');

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../client/dist')));

app.use('/api', router);

app.get('/bank', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'), (err) => {
    if (err) {
      res.status(500).send(err)
    }
  })
})

app.listen(port, console.log(`Listening on port ${port}!`));

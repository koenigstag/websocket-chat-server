const express = require('express');
require('dotenv').config()
const cors = require('cors');
const rootRouter = require('./routes');

/* app */
const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.status(200).send('Hello, world!');
});

app.use('/api', rootRouter);

app.use((err, req, res, next) => {
  res.status(500).send({ error: err.message }); // VERY BAD error handler
});

module.exports = app;

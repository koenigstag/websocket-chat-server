const express = require("express");
const mongoose = require("mongoose");
const mongoConfig = require("./configs/mongodb");

const app = express();

const mode = process.env.NODE_ENV || "development";
const dbConfig = mongoConfig[mode];

mongoose.connect(
  `mongodb://${dbConfig.hostname}:${dbConfig.port}/${dbConfig.dbName}`
);

app.use("/", (req, res) => {
  res.status(200).send("Hello, world!");
});

module.exports = app;

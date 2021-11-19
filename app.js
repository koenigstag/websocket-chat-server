const express = require("express");
const mongoose = require("mongoose");
const userRouter = require("./routes/users");

/* connection */
const mongoConfig = require("./configs/mongodb");
const mode = process.env.NODE_ENV || "development";
const dbConfig = mongoConfig[mode];
mongoose.connect(
  `mongodb://${dbConfig.hostname}:${dbConfig.port}/${dbConfig.dbName}`
);

/* app */
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("Hello, world!");
});

app.use("/api/users", userRouter);

module.exports = app;

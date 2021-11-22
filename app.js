const express = require("express");
const rootRouter = require("./routes");

/* app */
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("Hello, world!");
});

app.use("/api", rootRouter);

module.exports = app;

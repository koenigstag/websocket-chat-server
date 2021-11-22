const express = require("express");
const cors = require("cors");
const rootRouter = require("./routes");

/* app */
const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.status(200).send("Hello, world!");
});

app.use("/api", rootRouter);

module.exports = app;

const fs = require("fs");
const path = require("path");
const mongoose = require("mongoose");

const db = {};

const mongoConfig = require("../configs/mongodb");
const mode = process.env.NODE_ENV || "development";
const dbConfig = mongoConfig[mode];
mongoose.connect(
  `mongodb://${dbConfig.hostname}:${dbConfig.port}/${dbConfig.dbName}`
);

fs.readdirSync(__dirname)
  .filter(
    (fileName) =>
      fileName !== path.basename(__filename) && /.js$/.test(fileName)
  )
  .forEach((fileName) => {
    db[fileName.replace(".js", "")] = require(path.resolve(
      __dirname,
      fileName
    ));
  });

module.exports = db;

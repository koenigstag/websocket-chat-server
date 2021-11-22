const fs = require("fs");
const path = require("path");

const db = {};

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

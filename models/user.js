const { model } = require("mongoose");
const user = require("../schemes/user");

module.exports = model("users", user);

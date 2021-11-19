const { Schema } = require("mongoose");

module.exports = new Schema(
  {
    firstName: {
      type: "string",
      required: true,
    },
    lastName: {
      type: "string",
      required: true,
    },
    email: {
      type: "string",
      unique: true,
    },
    isMale: {
      type: "boolean",
      required: true,
    },
    birthday: {
      type: "date",
    },
  },
  {
    timestamps: true,
  }
);

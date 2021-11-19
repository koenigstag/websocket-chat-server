const { Schema } = require("mongoose");

module.exports = new Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
    },
    isMale: {
      type: Boolean,
      required: true,
    },
    birthday: {
      type: Date,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

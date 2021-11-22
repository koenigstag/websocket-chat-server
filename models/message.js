const { model, Schema } = require("mongoose");

const messageShema = new Schema(
  {
    text: {
      type: Schema.Types.String,
      required: true,
    },

    author: {
      type: Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = model("messages", messageShema);

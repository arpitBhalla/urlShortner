const mongoose = require("mongoose");
const { nanoid } = require("nanoid");
const { Schema } = mongoose;

const Model = new Schema(
  {
    url: { type: String, required: true },
    short: {
      type: String,
      default: nanoid(7),
      trim: true,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("url", Model);

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// create schema
const ImageSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  url: {
    type: String,
  },
  tag: {
    type: String,
  },
  date: {
    type: String,
  },
});

module.exports = Image = mongoose.model(
  "image",
  ImageSchema
);

const mongoose = require("mongoose");
const { Schema } = mongoose();

const booksSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  published: { type: string, required: true },
  genre: { type: String, required: true },
});

module.exports = mongoose.model("Books", booksSchema);

const express = require("express");
const cors = require("cors");
const app = express();
const products = require("./data/data.json");
const booksModel = require("./model/booksModel");

app.use(cors());
app.use(express.json());

app.get("/books", async (req, res) => {
  const books = await booksModel.find({});
  return res.send(books).status(200);
});

app.get("/books/:id", async (req, res) => {
  const { id } = req.params;
  const book = await booksModel.findById(id);

  return res.send(book).status(200);
});

module.exports = app;

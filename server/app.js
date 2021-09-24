const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

const products = require("./data/data.json");

// Make GET route for "/" that gets all books/gifts
// Hard code data in data.json

app.get("/", (req, res) => {
  return res.send("Some data").status(200);
});

app.get("/products", (req, res) => {
  return res.send(products).status(200);
});

module.exports = app;

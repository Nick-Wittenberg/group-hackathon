const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

// Hardcoded data
const products = require("./data/data.json");

// Maybe this isn't needed?
app.get("/", (req, res) => {
  return res.send("Some data").status(200);
});

app.get("/products/:id", (req, res) => {
  return (products.filter(item => item.id === req.params.id));
})

app.get("/products", (req, res) => {
  return res.send(products).status(200);
});

module.exports = app;

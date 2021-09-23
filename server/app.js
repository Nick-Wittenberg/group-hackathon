const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

// Make GET route for "/" that gets all books/gifts
// Hard code data in data.json
//

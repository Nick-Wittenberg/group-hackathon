const port = process.env.PORT || 5000;
const app = require("./app");

const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/mongo");

app.listen(port, () => {
  console.log(`App server started at http://localhost:${port}`);
});

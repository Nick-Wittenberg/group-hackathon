const port = process.env.PORT || 5000;
const app = require("./app");

app.listen(port, () => {
  console.log(`App server started at http://localhost:${port}`);
});

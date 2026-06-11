const express = require("express");
const app = express();

console.dir(app);

let port = 3000;

app.listen(port, () => {
  console.log(`App is listening on port ${port}`)
});

app.use((req, res) => {
  // console.log(req);
  console.log("request received");
  res.send("<h1>Fruits</h1> <ul><li>Banana</li><li>Apple</li></ul>");
});
const express = require("express");
const app = express();

console.dir(app);

let port = 3000;

app.listen(port, () => {
  console.log(`App is listening on port ${port}`)
});

app.get("/", (req, res) => {
  res.send("You contacted root path");
});

app.get("/apple", (req, res) => {
  res.send("You contacted apple path");
});

app.get("/orange", (req, res) => {
  res.send("You contacted orange path");
});

app.post("/", (req, res) => {
  res.send("You sent a post request to root");
})

// app.get("*", (req, res) => {
//   res.send("This path doesn't exist");
// });

app.get("/:username/:id", (req, res) => {
  let {username, id} = req.params;
  let htmlStr = `<h1>Hello my name is ${username} and my ID is ${id}</h1>`;
  res.send(htmlStr);
});



app.use((req, res) => {
  res.status(404).send("ERROR 404: This page doesn't exist.");
});


// app.use((req, res) => {
//   // console.log(req);
//   console.log("request received");
//   res.send("<h1>Fruits</h1> <ul><li>Banana</li><li>Apple</li></ul>");
// });
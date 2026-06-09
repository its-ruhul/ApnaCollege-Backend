const figlet = require("figlet");

figlet("Ruhul loves Priyanshi even more!!", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});
const express = require("express");

const main = express();
const port = 8000;
const web = require("./routes/web");

// html css ke liye
main.set("view engine", "ejs");
// main.get("/advance", (req, res) => {
//   res.send("advance page");
// });
//httml css
main.use(express.static("public"));
//rougt load
main.use("/", web);

//create server
main.listen(port, () => {
  console.log("server start localhost:8000");
});

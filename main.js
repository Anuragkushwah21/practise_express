const express = require("express");

const main = express();
const port = 8000;
const web = require("./routes/web");
const connectDb = require('./db/connectDb')
const fileupload=require('express-fileupload')
main.use(fileupload({useTempFiles:true}))
    //connect flash and session
const session = require('express-session')
const flash = require('connect-flash')
    //get cookies
const cookieParser=require('cookie-parser')
main.use(cookieParser())



connectDb() //get db
// insert data
main.use(express.urlencoded({ extended: false }));
//message
main.use(session({
  secret: 'secret',
  cookie: { maxAge: 60000 },
  resave: flash,
  saveUninitialized: flash

}))
//flash message
main.use(flash())

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

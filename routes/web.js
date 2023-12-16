const express = require("express");
const FrontController = require("../Controller/FrontController");
const route = express.Router();

route.get("/", FrontController.login);
route.get("/about", FrontController.about);
route.get("/register", FrontController.register);
route.get("/desbord", FrontController.desbord);
route.get("/contact", FrontController.contact);
route.get("/purchagepage", FrontController.purchagepage);
route.get("/course", FrontController.course);
route.get("/profile", FrontController.profile);

// main.get("/brouser", (req, res) => {
//     res.send("brouser page");
//   });

module.exports = route;

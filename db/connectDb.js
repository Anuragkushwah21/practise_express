const mongoose = require("mongoose");
const Live_URL =
  "mongodb+srv://anuragkofficial21:ram123@cluster0.r3sc4oj.mongodb.net/admission_practice?retryWrites=true&w=majority";
const Local_URL = "mongodb://0.0.0.0:27017/admission_practice";

const connectDb = () => {
  mongoose
    // .connect(Local_URL)
    .connect(Live_URL)

    .then(() => {
      console.log("connected sucessfully");
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = connectDb;

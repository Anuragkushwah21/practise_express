const mongoose = require("mongoose");

const Studentschema = new mongoose.Schema(
  {
    name: {
      type: String,
      Required: true,
    },
    email: {
      type: String,
      Required: true,
    },
    password: {
      type: String,
      Required: true,
    },
    role: {
      type: String,
      default: "user",
    },
    is_varified: {
      type: Number,
      default: 0,
    },
    token: {
      type: String,
      default: "",
    },
    image: {
      public_id: {
        type: String,
        Required: true,
      },
      url: {
        type: String,
        Required: true,
      },
    },
  },
  { timestamps: true }
);
const StudentModel = mongoose.model("user", Studentschema);
module.exports = StudentModel;

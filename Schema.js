const { Schema, mongoose } = require("mongoose");
const userSchema = new Schema({
  firstname: String,
  lastname: String,
  email: String,
  isAdmin: {
    type: Boolean,
    default: false,
  },
  password: String,
});

const dataSchema = new Schema({
  imgURL: String,
  description: String,
  title: String,
  date: String,
});

exports.userSchema = userSchema;
exports.dataSchema = dataSchema;

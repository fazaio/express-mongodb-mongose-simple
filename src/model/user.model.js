const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    email: String,
    username: String,
    password: String,
    roles: String,
  },
  {
    timestamps: true,
  }
);

mongoose.set("strictQuery", false);
const Users = mongoose.model("Users", userSchema);

module.exports = Users;

const express = require("express");
const cors = require("cors");
const users = require("./src/router/users");

const app = express();
const bodyParser = require("body-parser");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.raw());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/users", users); // user router

app.listen(3000, () => {
  console.log(`Example app listening on port 3000`);
});

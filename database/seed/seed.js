const Mongoose = require("mongoose");
const Photo = require("../index.js");
const populateDb = require("./populate.js");

populateDb(Photo).then(() => {
  console.log("Mongoose connection closing");
  Mongoose.connection.close();
});

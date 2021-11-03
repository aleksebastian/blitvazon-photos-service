const Mongoose = require("mongoose");
require("dotenv").config();
let mongoUri;

if (process.env.MODE === "dev") {
  mongoUri = "mongodb://localhost/photos";
} else {
  mongoUri = "mongodb://mongo:27017/photos";
}

const mongooseOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
};

Mongoose.connect(mongoUri, mongooseOptions, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log("Connected to mongodb");
  }
});

const PhotoSchema = Mongoose.Schema({
  id: Number,
  primaryUrl: String,
  productUrls: Array,
  featuresUrls: Array,
});

const Photo = Mongoose.model("Photo", PhotoSchema);

module.exports = Photo;

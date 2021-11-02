const Mongoose = require("mongoose");
// uncomment and replace first argument in line 11 to use in db in local
const localDb = "mongodb://localhost/photos";
const dockerDb = "mongodb://mongo:27017/photos";
const mongooseOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
};

Mongoose.connect(dockerDb, mongooseOptions, (err) => {
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

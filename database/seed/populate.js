const Mongoose = require("mongoose");
const getPhotos = require("./getPhotoUrls.js");
const prepareDbRecordsForInsert = require("./prepareDbRecordsForInsert.js");

const populateDb = async (database) => {
  try {
    let primaryPhotosUrls = await getPhotos.getPhotoUrls("primary");
    let otherPhotosUrls = await getPhotos.getPhotoUrls("images");
    let dbRecordsToInsert = prepareDbRecordsForInsert(
      primaryPhotosUrls,
      otherPhotosUrls
    );
    let savePhotos = await insertRecords(database, dbRecordsToInsert);
  } catch (e) {
    console.error(e);
  } finally {
    return "ok";
  }
};

const insertRecords = async (database, dbRecordsToInsert) => {
  try {
    let checkForPreviousSeedCount = await database.countDocuments();

    if (checkForPreviousSeedCount) {
      await database.db.dropDatabase();
    }

    let insertIntoDb = await database.insertMany(dbRecordsToInsert);
    console.log(`Database seeded with ${insertIntoDb.length} items`);
  } catch (e) {
    console.error(e);
  }
};

module.exports = populateDb;

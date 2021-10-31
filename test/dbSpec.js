const { expect, assert } = require("chai");
const Mongoose = require("mongoose");
const Photo = require("../database/index.js");
const populateDb = require("../database/seed/populate.js");

const faker = require("faker");

describe("Database", () => {
  before(() => {
    // Leaving for possible future use
  });

  describe("Database seeding", () => {
    it("should seed the database with 100 records", async () => {
      try {
        let seed = await populateDb(Photo);
        assert(
          seed === "ok",
          "populateDb function should return ok on successful insert"
        );
      } catch (e) {
        console.error(e);
      }
    });
  });

  describe("Database re-seeding", () => {
    it("should not duplicate records when re-seeding", async () => {
      try {
        let seed = await populateDb(Photo);
        let recordCount = await Photo.countDocuments();
        assert(
          recordCount === 100,
          "record count should still be 100 after re-seeding."
        );
      } catch (e) {
        console.error(e);
      }
    });
  });

  after(() => {
    // console.log("Closing Mongoose connection");
    // Mongoose.connection.close();
  });
});

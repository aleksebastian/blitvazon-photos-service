const Mongoose = require("mongoose");
const Photo = require("./index.js");

const getProductPrimaryPhoto = async (id) => {
  let productInfo = await Photo.findOne({ id: id }).select("primaryUrl");
  let productPrimaryPhotoUrl = productInfo.primaryUrl;

  return productPrimaryPhotoUrl;
};

const getAllProductPhotos = async (id) => {
  let productPhotos = await Photo.findOne({ id: id }).select(
    "primaryUrl productUrls"
  );
  return productPhotos;
};

const getMultipleProductsPrimaryPhotos = async (ids) => {
  let primaryPhotosQuery = await Photo.find({ id: { $in: ids } }).select(
    "id primaryUrl"
  );
  let primaryPhotos = {};

  primaryPhotosQuery.forEach((photoInfo) => {
    primaryPhotos[photoInfo.id] = photoInfo.primaryUrl;
  });
  return new Promise((resolve, reject) => resolve(primaryPhotos));
};

const getProductFeaturesPhotos = async (id) => {
  let productInfo = await Photo.findOne({ id: id }).select("id featuresUrls");
  return productInfo;
};

module.exports = {
  getProductPrimaryPhoto: getProductPrimaryPhoto,
  getAllProductPhotos: getAllProductPhotos,
  getMultipleProductsPrimaryPhotos: getMultipleProductsPrimaryPhotos,
  getProductFeaturesPhotos: getProductFeaturesPhotos,
};

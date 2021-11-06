const s3 = require("../deploy/s3.js");
const fs = require("fs");
const path = require("path");

const bundleName = "photos_bundle";

const uploadBuild = async (file, encoding = "", cacheAge = "300") => {
  await s3.createBucket();
  const buildFile = fs.createReadStream(file);
  buildFile.on("error", (err) => {
    console.log(`File error: ${err}`);
  });
  const fileParts = file.split("/");
  const fileName = fileParts[fileParts.length - 1];
  s3.uploadToS3(
    `js/${fileName}`,
    buildFile,
    "text/javascript",
    encoding,
    "public-read",
    cacheAge
  );
};

const run = async () => {
  await uploadBuild(
    path.join(__dirname, `../public/${bundleName}.js`),
    "",
    "31536000"
  );
  await uploadBuild(
    path.join(__dirname, `../public/${bundleName}.js.gz`),
    "gzip",
    "31536000"
  );
  await uploadBuild(
    path.join(__dirname, `../public/${bundleName}.js.br`),
    "br",
    "31536000"
  );
  await uploadBuild(path.join(__dirname, `../public/299.${bundleName}.js`));
  await uploadBuild(path.join(__dirname, `../public/344.${bundleName}.js`));
  process.exit;
};

run();

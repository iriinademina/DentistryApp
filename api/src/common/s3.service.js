const aws = require("aws-sdk");
const multer = require("multer");
const multerS3 = require("multer-s3");
const { v4: uuidv4 } = require('uuid')

const s3 = new aws.S3();

aws.config.update({
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  region: "us-east-2",
});

const getStorage = () => {
    return multerS3({
      s3,
      bucket: process.env.AWS_S3_BUCKET_NAME,
      key: (request, file, cb) => {
        if (file && file.mimetype === 'image/png' || file.mimetype === 'image/jpg' || file.mimetype === 'image/jpeg') {
          cb(null, uuidv4());
        } else {
          cb(null, false);
          return cb(new Error(ERROR_WRONG_FORMAT));
        }
      }
    })
  }

const uploadSingleFile = (request, response) => {
    return new Promise((resolve, reject) => {
      const storage = getStorage();
      const uploader = multer({ storage }).single('file');

      uploader(request, response, (error) => {
        if (error) {
          return reject(error);
        }
        resolve(request.file && request.file.key);
      });
    });
  }

module.exports = uploadSingleFile;


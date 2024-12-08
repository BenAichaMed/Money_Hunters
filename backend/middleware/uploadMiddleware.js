const multer = require("multer");
const path = require("path");
const fs = require("fs");
const Course = require("../models/courseModel");
const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/img/courses");
  },
  filename: function (req, file, cb) {
    console.log(file.originalname);
    cb(null, file.originalname);
  },
});
const upload = multer({ storage: storage });
exports.uploadCoursePhoto = [
  upload.single("photo"),
  (req, res, next) => {
    req.url = path.join("public/img/courses", req.file.filename);

    next();
  },
];

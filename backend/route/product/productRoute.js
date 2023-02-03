const express = require("express");
const { createProductCtrl,} = require("../../controllers/productCtrl");
const { PhotoUpload,postImgResize } = require('../../middleware/upload');

const productRoute = express.Router();

productRoute.post("/",PhotoUpload.single('image'),
postImgResize,createProductCtrl);

module.exports = productRoute;

const express = require("express");
const { createProductCtrl,fetchProductsCtrl} = require("../../controllers/productCtrl");
const { PhotoUpload,productImgResize} = require('../../middleware/upload');

const productRoute = express.Router();

productRoute.post("/",PhotoUpload.single('image'),
productImgResize ,createProductCtrl);
productRoute.get('/',fetchProductsCtrl);

module.exports = productRoute;

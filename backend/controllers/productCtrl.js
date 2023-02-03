const expressAsyncHandler = require("express-async-handler");

const Product = require("../models/Product");

const cloudinaryUploadImg = require("../utils/cloudinary");

// create Post----------------------
const createProductCtrl = expressAsyncHandler(async (req, res) => {
  //1. get the path to img
  const localPath = `public/images/products/${req.file.filename}`;
  //2.upload to cloudinary
  const imgUploaded = await cloudinaryUploadImg(localPath);

  // console.log(req.file);
  try {
    const product = await Product.create({
      ...req.body,
      //   image:imgUploaded?.url,
    });
    res.json(product);
  } catch (error) {
    res.json(error);
  }
});
//--------------Fetch all products --------------------------------//
const fetchProductsCtrl = expressAsyncHandler(async (req, res) => {
  const hasCategory =req.query.category
  try {
    //check if it has a category
    if(hasCategory){
      const products = await Product.find({category:hasCategory}).sort('-createdAt');
      res.json(products)
    }else{
      const products = await Product.find({}).sort("-createdAt");
    res.json(products);
    }
    
  } catch (error) {
    res.json(error);
  }
});
module.exports = {
  createProductCtrl,fetchProductsCtrl
};

const expressAsyncHandler = require("express-async-handler");
const Category = require("../models/Category");

//---------------------------create category---------------------------------//

const createCategoryCtrl = expressAsyncHandler(async (req, res) => {
  try {
    const category = await Category.create({
      title: req.body.title,
    });
    res.json(category);
  } catch (error) {
    res.json(error);
  }
});

//---------------------------Fetch all---------------------------------//

const fetchCategoryCtrl = expressAsyncHandler(async (req, res) => {
  try {
    const categories = await Category.find({})
    .sort("-createdAt");
    res.json(categories);
  } catch (error) {
    res.json(error);
  }
});

module.exports = {
  createCategoryCtrl,
  fetchCategoryCtrl,
};

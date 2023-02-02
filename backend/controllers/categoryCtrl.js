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

module.exports = {
  createCategoryCtrl,
};

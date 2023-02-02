const express = require("express");
const { createCategoryCtrl,fetchCategoryCtrl} = require("../../controllers/categoryCtrl");

const categoryRoute = express.Router();

categoryRoute.post("/", createCategoryCtrl);
categoryRoute.get('/',fetchCategoryCtrl);
module.exports = categoryRoute;

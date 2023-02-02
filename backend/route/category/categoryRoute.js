const express = require("express");
const { createCategoryCtrl } = require("../../controllers/categoryCtrl");

const categoryRoute = express.Router();

categoryRoute.post("/", createCategoryCtrl);
module.exports = categoryRoute;

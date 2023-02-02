const express = require("express");
const dotenv = require("dotenv").config();
const PORT = 5000;
const connectDB = require("./config/db");
const categoryRoute = require("./route/category/categoryRoute");
const app = express();

//middleware
app.use(express.json());

// category Route
app.use("/api/category", categoryRoute);

app.listen(PORT, console.log(`server is running ${PORT}`));

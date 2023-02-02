const express = require("express")
const dotenv =require('dotenv').config()
const PORT =5000;
const connectDB =require("./config/db");

const app =express()

//middleware
app.use(express.json());


app.listen(PORT,console.log(`server is running ${PORT}`));

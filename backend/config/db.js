require("dotenv").config();
const mongoose = require("mongoose");

const DB = process.env.DATABASE;

const connectDB = () => {
  mongoose
    .connect(DB)
    .then(() => console.log("Database connected"))
    .catch((err) => console.log(err));
};

module.exports = connectDB;

//MongoDB Connection

const mongoose = require("mongoose");
require("dotenv").config();

const mongoConnect = () => {
  mongoose
    .connect(
      `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}${process.env.MONGO_URL}/${process.env.MONGO_DB}`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    )
    .then(() => console.log("MongoDB Connected"))
    .catch((err) => console.log(err));
};

module.exports = mongoConnect;

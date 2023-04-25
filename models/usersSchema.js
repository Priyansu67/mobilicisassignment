//MongoDB Schema for Product

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const usersSchema = new Schema(
  {
    id: {
      type: "Number",
      index: true,
      required: true,
    },
    first_name: {
      type: "String",
    },
    last_name: {
      type: "String",
    },
    email: {
      type: "String",
    },
    gender: {
      type: "String",
    },
    income: {
      type: "String",
    },
    city: {
      type: "String",
    },
    car: {
      type: "String",
    },
    quote: {
      type: "String",
    },
    phone_price: {
      type: "String",
    },
  }
);

usersSchema.index({ id: 1 });

module.exports = mongoose.model("Users", usersSchema);

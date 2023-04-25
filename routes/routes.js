const express = require("express");
const router = express.Router();
const {
  getUsersByCarsByIncome,
  getMaleUsersByPhonePrice,
  getUsersByCharEmail,
  getUsersByCarBrands,
} = require("../controllers/usersController");
const getTopCities = require("../controllers/citiesController");

// Route to get users with income lower than provided bracket and have a car of brand “BMW” or “Mercedes”
//To pass multiple values in query string, use comma separated values in the query string for example: /users/cars/10000?carBrands=BMW,Mercedes
router.get(
  "/users/cars/:incomeBracket",
  getUsersByCarsByIncome
);

// Route to get male users which have phone price greater than a given price e.g. 10000
router.get(
  "/users/male/phone/:priceBracket",
  getMaleUsersByPhonePrice
);

// Route to get users whose last name starts with a character and has a quote character length greater than the length and email includes his/her last name
//Example query string: /users/email?character=a&length=100
router.get("/users/email", getUsersByCharEmail);

// Route to get users which have a car of brand “BMW”, “Mercedes” or “Audi” and whose email does not include any digit
//Example query string: /users/cars?carBrands=BMW,Mercedes,Audi
router.get("/users/cars", getUsersByCarBrands);

// Route to get top 10 cities which have the highest number of users and to get their average income
router.get("/cities", getTopCities);

module.exports = router;

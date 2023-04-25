const Users = require("../models/usersSchema");

const getUsersByCarsByIncome = async (req, res) => {
  try {
    //Convert the income bracket to integer
    const incomeBracket = parseInt(req.params.incomeBracket);

    //Split the car brands in the query string into an array
    const carBrands = req.query.carBrands.split(",");

    //Regex to match car brands in the query string with the car brands in the database
    //This regex is case insensitive and can match if the car brand query is a substring of the car brand in the database for example: if the car brand in the database is "BMW" and the query string is "bmw" or "bm" or "b", it will match
    const carBrandRegex = new RegExp(`.*${carBrands.join("|")}.*`, "i");

    //Query the database to get users with income lower than provided bracket and have a car of brand provided in the query string
    const filteredUsers = await Users.find({
      //Convert $4000 to 4000 and then compare with the income bracket

      $expr: {
        $lt: [{ $toDouble: { $substr: ["$income", 1, -1] } }, incomeBracket],
      },
      car: { $regex: carBrandRegex },
    }).sort({ id: 1 });

    //Send the response
    res.send(filteredUsers);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Error querying users");
  }
};

const getMaleUsersByPhonePrice = async (req, res) => {
  try {
    //Convert the price bracket to integer
    const priceBracket = parseInt(req.params.priceBracket);

    //Filter the users according to gender and phone price
    const filteredUsers = await Users.aggregate([
      {
        $match: {
          gender: "Male",
          //gt is used to match phone price greater than the price bracket and toInt is used to convert the phone price to integer
          $expr: { $gt: [{ $toInt: "$phone_price" }, priceBracket] },
        },
      },
    ]).sort({ id: 1 });

    //Send the response
    res.send(filteredUsers);
  } catch (err) {
    console.log(err);
    res.status(500).send("Error querying users");
  }
};

const getUsersByCharEmail = async (req, res) => {
  try {
    //Get the character and length from the query string
    const character = req.query.character;
    const length = parseInt(req.query.length);

    //Query the database to get users with last name starting with the character in the query string, quote length greater than the length in the query string and email including the character in the query string
    const filteredUsers = await Users.find({
      //The regex in last_name is case insensitive and can match if last name starts with the character in the query string
      last_name: { $regex: new RegExp(`^${character}`, "i") },
      //The regex in quote is case sensitive and can match if quote character length is greater than the length in the query string
      quote: { $regex: new RegExp(`^.{${length},}$`) },
      //The regex in email is case insensitive and can match if email includes his/her last name
      email: { $regex: new RegExp(`${character}.*${character}`, "i") },
    });

    //Send the response
    res.send(filteredUsers);
  } catch (err) {
    console.log(err);
    res.status(500).send("Error querying users");
  }
};

const getUsersByCarBrands = async (req, res) => {
  try {
    //The regex in email is used to match if email does not include any digit
    const regex = /\d/;

    //Split the car brands in the query string into an array
    const carBrands = req.query.carBrands.split(",");

    //Regex to match car brands in the query string with the car brands in the database
    const carBrandRegex = new RegExp(`.*${carBrands.join("|")}.*`, "i");

    //Query the database to get users with car of brand provided in the query string and whose email does not include any digit
    const filteredUsers = await Users.find({
      car: { $regex: carBrandRegex },
      email: { $not: RegExp(regex) },
    }).sort({ id: 1 });

    //Send the response
    res.send(filteredUsers);
  } catch (err) {
    console.log(err);
    res.status(500).send("Error querying users");
  }
};

module.exports = {
  getUsersByCarsByIncome,
  getMaleUsersByPhonePrice,
  getUsersByCharEmail,
  getUsersByCarBrands,
};

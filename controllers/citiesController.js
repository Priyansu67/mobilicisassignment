const Users = require("../models/usersSchema");

module.exports = getTopCities = async (req, res) => {
  try {
    //Get all users from the database
    const users = await Users.find({});
    //Group users by city
    const groupedCities = {};
    //Loop through all users and add the city to the groupedCities object if it does not exist
    users.forEach((user) => {
      if (groupedCities[user.city]) {
        groupedCities[user.city].users += 1;
        groupedCities[user.city].totalIncome += parseFloat(
          user.income.replace("$", "")
        );
      } else {
        //If the city does not exist in the groupedCities object, add it and set the users to 1 and totalIncome to the income of the user
        groupedCities[user.city] = {
          users: 1,
          totalIncome: parseFloat(user.income.replace("$", "")),
        };
      }
    });

    const cityData = Object.keys(groupedCities).map((city) => {
      return {
        city,
        users: groupedCities[city].users,
        averageIncome:
          groupedCities[city].totalIncome / groupedCities[city].users,
      };
    });

    const sortedCities = cityData
      .sort((a, b) => b.users - a.users)
      .slice(0, 10);
    res.json(sortedCities);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

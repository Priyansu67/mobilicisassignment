const express = require("express");
const mongoConnect = require("./config/mongoConnect");
const app = express();
const path = require("path");
const cors = require("cors");
const port = 3000;

//JSON parser to parse the body of the request
app.use(express.json());

//CORS middleware to allow cross origin requests
app.use(cors());

//Connect to MongoDB
mongoConnect();

//Use the routes
app.use("/", require("./routes/routes"));

//Serve the react app build folder
app.use(express.static(path.join(__dirname, ".", "client", "dist")));

//Serve the react app
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, ".", "client", "dist", "index.html"));
});

app.listen(port, () =>
  console.log(`Server listening on port https://localhost:${port}`)
);

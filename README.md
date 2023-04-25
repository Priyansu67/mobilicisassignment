
# Node.js Application with Express Framework and MongoDB Database

This is a sample project created for the internship position at Mobilicis India Private Limited. The project is built using Node.js, Express Framework, and MongoDB Database. The application connects to the frontend application built using Next.js and fetches data from the database based on certain criteria.


## Table of Contents

- [Prerequisites](##prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#apiendpoints)

## Prerequisites
Before you begin, ensure you have met the following requirements:

- You have installed Node.js and NPM on your machine.
- You have a MongoDB atlas account.
- You have created a MongoDB database and user credentials.

## Installation
To install and run this project on your machine, please follow these steps:
1. npm install at both client and backend
```
npm install
```
2. Run build command to create a production build that will be server through backend
```
npm run build
```

3. Create a .env file inside backend with four important mongodb config values
```
MONGO_USER=mongouser
MONGO_PASS=mongopass
MONGO_DB=mobilicis
MONGO_URL=@cluster0.k1esaea.mongodb.net
```
4. Start the project which will now server the build files with localhost at port 3000
```
npm start
```

## Usage
To use this project, you need to start the server and connect it to your frontend application. The server runs on port 3000 by default. You can change this port number by setting the PORT environment variable.

To fetch data from the database, you need to make API requests to the server. The API endpoints are described in the next section.

## API Endpoints
This project provides the following API endpoints:

|Endpoint|Method|Description|
|---------------|-----------|---------------------------------|
|/users/cars/5?carBrands=bmw,mercedes|GET|Fetches users with income lower than $5 USD and have a car of brand “BMW” or “Mercedes”.|
|/users/male/phone/10000|GET|Fetches male users which have phone price greater than 10,000.
|/users/email?character=M&length=15|GET|Fetches users whose last name starts with “M” and has a quote character length greater than 15 and email includes his/her last name.
|/users/cars?carBrands=BMW,Mercedes,Audi|GET|Fetches users which have a car of brand “BMW”, “Mercedes” or “Audi” and whose email does not include any digit.
|/cities|GET|	Fetches data of top 10 cities which have the highest number of users and their average income.|



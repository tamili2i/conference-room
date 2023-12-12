const Sequelize = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
  process.env.DATABASE_NAME, // DATABASE_NAME
  process.env.DATABASE_USERNAME, // DATABASE_USERNAME
  process.env.DATABASE_PASSWORD, // DATABASE_PASSWORD
  {
    host: process.env.DATABASE_HOST_NAME, // DATABASE_HOST_NAME
    dialect: 'mysql'
  }
);

// `authenticate()` method is used to connect with the database and tests whether the given credentials are correct.
try {
  sequelize.authenticate().then(async () => {
    console.log('Database connection has been established successfully');
    require("../models/room");
  }).catch(error => {
    console.error('Unable to connect to the database: ', error);
  });
} catch (error) {
  console.error('Error while establishing DB connectivity. Error: ', error);
}

module.exports = sequelize;

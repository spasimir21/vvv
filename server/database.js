const config = require('./config.js');
const mysql = require('mysql');

const database = mysql.createPool(config.database);

function query(database, sqlSource, parameters) {
  return new Promise((resolve, reject) => {
    database.query(sqlSource, parameters, (err, result) => {
      if (err != null) reject(err);
      resolve(result);
    });
  });
}

module.exports = database;

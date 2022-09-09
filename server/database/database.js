const sqlite3 = require('sqlite3');
const path = require('path');
const fs = require('fs');

const database = new sqlite3.Database(path.join(__dirname, '../database.db'));

const sqlSetupQuery = fs.readFileSync(path.join(__dirname, './databaseSetup.sql')).toString();

database.exec(sqlSetupQuery, (_, err) => {
  if (err) console.log('Database Error:', err);
});

module.exports = database;

const sqlite3 = require('sqlite3');
const fs = require('fs');

const database = new sqlite3.Database('./database.db');

const sqlQuery = fs.readFileSync('./database/databaseSetup.sql').toString();

database.serialize(() => database.run(sqlQuery));

database.close();

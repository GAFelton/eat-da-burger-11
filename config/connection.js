'use strict';

const util = require('util');
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'apassword',
    database: 'burgers_db'
});

connection.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
  
    console.log("connected as id " + connection.threadId);
  });

// Setting up connection.query to use promises instead of callbacks.
// This allows us to use the async/await syntax.
connection.query = util.promisify(connection.query);

module.exports = connection;
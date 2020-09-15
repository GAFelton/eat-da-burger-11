'use strict';

const mysql = require('mysql');
var connection;

// if deployed on Heroku, use JawsDB.
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
}
// Else, run on local connection (for development).
else {
  connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'apassword',
    database: 'burgers_db'
  });
}

// Error catch for initial connection.
connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }

  console.log("connected as id " + connection.threadId);
});


// Export for ORM.
module.exports = connection;
const connection = require("./connection");

// Helper function for printing the correct number of question marks.
function printQuestionMarks(num) {
    var arr = [];
  
    for (var i = 0; i < num; i++) {
      arr.push("?");
    }
  
    return arr.toString();
  }

const orm = {
    // GET METHOD
    selectAll: function (tableName, cb) {
        var queryString = "SELECT * FROM " + tableName + ";";
        connection.query(queryString, function (err, result) {
            if (err) { throw err; }
            cb(result);
        });
    },

    // POST METHOD
    insertOne: function(table, cols, vals, cb) {
        var queryString = "INSERT INTO " + table;

        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(vals.length);
        queryString += "); ";

        console.log(queryString);

        connection.query(queryString, vals, function(err, result) {
            if(err) {throw err}
            cb(result);
        });
    },

    // PUT METHOD
    updateOne: function(table, valsToSet, condition, cb) {
        var queryString = "UPDATE " + table;
        queryString += " SET ?";
        queryString += " WHERE ";
        queryString += condition;
        queryString += ";";

        console.log(queryString);

        connection.query(queryString, [valsToSet], function(err, result) {
            if (err) {throw err};
            cb(result);
        });
    }

};

module.exports = orm;
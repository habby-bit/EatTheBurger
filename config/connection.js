var mysql = require("mysql");

var connection;
if (process.env.JAWSDB_URL) {
    // Database is JawsDB on Heroku
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    // Database is local
    connection = mysql.createConnection({
      host: "localhost",
      port: 3306,
      user: "root",
      password: "rootroot",
      database: "burgers_db"
    })
};

// Makes the connection between mysql and node
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Exports the connection for our ORM to use
module.exports = connection;
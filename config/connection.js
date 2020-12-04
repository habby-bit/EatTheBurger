var mysql = require("mysql");

var connection;
if (process.env.JAWSDB_URL) {
    // Database is JawsDB on Heroku
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    // Database is local
    connection = mysql.createConnection({
      host: "de1tmi3t63foh7fa.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
      port: 3306,
      user: "t5aftnwd76fsajoe",
      password: "q6pmh3mvqz7yqcu2",
      database: "bsaveltrmd1rw2d6"
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
const express = require("express");
const mysql = require("mysql");
const db = {
    // user: "root",
    user: "uzey35wx08fxxsmp",
    // host: "localhost",
    host: "byhwavuppyienosgunop-mysql.services.clever-cloud.com",    
    // password: "password",
    password: "gvuMHvWrxsA9atFuK9ci",
    // database: "LoginSystem",
    database: "byhwavuppyienosgunop",
    insecureAuth: true
};
var connection;

function handleDisconnect() {
  connection = mysql.createConnection(db); // Recreate the connection, since
                                                  // the old one cannot be reused.

  connection.connect(function(err) {              // The server is either down
    if(err) {                                     // or restarting (takes a while sometimes).
      console.log('error when connecting to db:', err);
      setTimeout(handleDisconnect, 2000); // We introduce a delay before attempting to reconnect,
    }                                     // to avoid a hot loop, and to allow our node script to
  });                                     // process asynchronous requests in the meantime.
                                          // If you're also serving http, display a 503 error.
  connection.on('error', function(err) {
    console.log('db error', err);
    if(err.code === 'PROTOCOL_CONNECTION_LOST') { // Connection to the MySQL server is usually
      handleDisconnect();                         // lost due to either server restart, or a
    } else {                                      // connnection idle timeout (the wait_timeout
      throw err;                                  // server variable configures this)
    }
  });

  connection.query('SELECT NOW()', function(error, result){
        if(error) throw error
        console.log(result)
   });
}

handleDisconnect();


module.exports = connection;

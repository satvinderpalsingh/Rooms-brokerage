const express = require("express");
const mysql = require("mysql");
const db = mysql.createConnection({
    user: "root",
    // user: "sql6426390",
    host: "localhost",
    // host: "sql6.freemysqlhosting.net",    
    password: "password",
    // password: "lm6Ua4pHRj",
    database: "LoginSystem",
    // database: "sql6426390",
    insecureAuth: true
});

module.exports = db;

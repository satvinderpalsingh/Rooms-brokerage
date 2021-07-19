const express = require("express");
const mysql = require("mysql");
const db = mysql.createConnection({
    user: "root",
    // user: "uzey35wx08fxxsmp",
    host: "localhost",
    // host: "byhwavuppyienosgunop-mysql.services.clever-cloud.com",    
    password: "password",
    // password: "gvuMHvWrxsA9atFuK9ci",
    database: "LoginSystem",
    // database: "byhwavuppyienosgunop",
    insecureAuth: true
});

module.exports = db;

// server/index.js

const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    user : "root",
    host : "localhost",
    password : "password",
    database : "LoginSystem",
    insecureAuth : true
});

app.post('/register',(req,res)=> {

  const firstname = req.body.firstname;
  const lastname = req.body.lastname;
  const email = req.body.email;
  const notification = req.body.notification;
  const password = req.body.password;

  db.query("INSERT INTO users (firstname, lastname, email, notification, password) VALUES (?,?,?,?,?)", 
  [firstname, lastname, email, notification, password],
  (err, result)=> {
    if (err){
      console.log(err);
    }
    else {
      console.log("User Registerd");
    }
  })
})

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
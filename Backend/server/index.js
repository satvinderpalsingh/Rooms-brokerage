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

  db.query("SELECT * FROM users WHERE (email = ?)",
  [email],
  (err,result) => {
    if (err){
      res.send({error : err});
    }
    if (result.length > 0){
      res.send({message : "Email Already Registered"});

    }
    else{
      // User registration
      

      db.query("INSERT INTO users (firstname, lastname, email, notification, password) VALUES (?,?,?,?,?)", 
      [firstname, lastname, email, notification, password],
      (err, result)=> {
        if (err){
          console.log(err);
        }
        else {          
          res.send({message : "Successfully Registered"});
        }
      })  


      // User registration
    }
  }

  )

  
})

app.post('/login',(req,res) => {
  
  const email = req.body.email;  
  const password = req.body.password;

  db.query("SELECT * FROM users WHERE (email = ?) AND (password = ?)", 
  [email, password],
  (err, result)=> {
    if (err){
      res.send({err : err});
    }
    
    
    if (result.length > 0) {
      res.send(result);
      
    }
    else {
      res.send({ message : "Wrong email or password or make sure you have registered "})
    }
  });


});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
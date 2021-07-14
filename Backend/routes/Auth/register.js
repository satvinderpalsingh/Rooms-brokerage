var express = require('express');

const database = require('../../database');

var router = express.Router();

const db = database;

const bcrypt = require('bcrypt');
const saltRounds = 10;

router.post('/',(req,res)=> {

    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const email = req.body.email;
    const notification = req.body.notification;
    const password = req.body.password;

    bcrypt.hash(password,saltRounds, (err, hash) => {

      if (err){
        console.log(err); 
      }
      ////QUERY////
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
            [firstname, lastname, email, notification, hash],
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
      ////QUERY////


    });
  
    
  
    
});

module.exports = router
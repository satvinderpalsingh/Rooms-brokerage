var express = require('express');

const app = express();

const database = require('../../database');

var router = express.Router();

const db = database;

const bcrypt = require('bcrypt');
const saltRounds = 10;

router.post('/',(req,res) => {
    
  
    const email = req.body.email;  
    const password = req.body.password;
  
    db.query("SELECT * FROM users WHERE (email = ?);", 
    [email],
    (err, result)=> {
      if (err){
        res.send({err : err});
      }
      
      
      if (result.length > 0) {
        bcrypt.compare(password, result[0].password, (err, response) => {
          if (response){
            req.session.user = result;
            console.log(req.session)
            res.send(result);
          }
          else {
            res.send({ message : "Wrong email or password or make sure you have registered "});
          }
        });
        
      }
      else {
        res.send({ message : "User Doesn't Exists"});
      }
    });
  
  
});

module.exports = router
var express = require('express');

const database = require('../../database');

var router = express.Router();

const db = database;

router.post('/',(req,res) => {
  
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

module.exports = router
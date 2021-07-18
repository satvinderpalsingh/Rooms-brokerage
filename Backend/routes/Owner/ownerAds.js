

var express = require('express');

const database = require('../../database');

var router = express.Router();

const db = database;




router.get('/', (req, res) => {

  const email = req.query.getemail;
  // console.log(email);

  db.query("SELECT * FROM owner_uploads WHERE (email = ?)",
    [email],
    (err, result) => { 
      if (err) {
        console.log(err);    
        res.send({message: "Some Error has occured"});
      }
      else {
        console.log(result); 
        res.send(result);      
      }
    }

  )
})

module.exports = router
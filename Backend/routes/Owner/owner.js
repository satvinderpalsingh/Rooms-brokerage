var express = require('express');

const database = require('../../database');

var router = express.Router();

const db = database;

router.post('/', (req, res) => {

  const email = req.body.email;
  const firstname = req.body.firstname;
  const lastname = req.body.lastname;
  const address = req.body.address;
  const no_bedrooms = req.body.no_bedrooms;
  const capacity = req.body.capacity;
  const action = req.body.action;
  const area = req.body.area;
  const cost = req.body.cost;  
  const phone_no = req.body.phone_no;
  const facilities = req.body.facilities;
  const image = req.body.image;
  const description = req.body.description;

  db.query("SELECT * FROM users WHERE (email = ?)",
    [email], (err, result) => {
      if (err) {
        console.log(err);
        
      }
      else {
        console.log(result);
        if (result.length > 0) {
          db.query("INSERT INTO owner_uploads (email, firstname, lastname,address,no_bedrooms,capacity,action,area,cost,phone_no,facilities,image,description) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)",
            [email, firstname, lastname, address, no_bedrooms, capacity, action, area, cost, phone_no, facilities, image, description],
            (err, result) => {
              if (err) {
                console.log(err);
              }
              else {                
                res.send({message: "Succesfully added!"})
              }
            })
        }
        else {
          res.send({message: "Incorrect/Unregistered Email Address"});
        }
      }
    }

  )
})

module.exports = router
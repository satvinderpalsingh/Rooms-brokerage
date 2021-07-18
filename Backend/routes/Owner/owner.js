var express = require('express');

const database = require('../../database');

var router = express.Router();

const db = database;

router.post('/', (req, res) => {


  const Adtitle = req.body.adtitle;
  const email  = req.body.email;
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

  db.query("INSERT INTO owner_uploads (Adtitle, email, address, no_bedrooms, capacity, action, area, cost, phone_no, facilities, image, description) VALUES (?,?,?,?,?,?,?,?,?,?,?,?)",
    [Adtitle, email,  address, no_bedrooms, capacity, action, area, cost, phone_no, facilities, image, description],
    (err, result) => {
      if (err) {
        console.log(err);
        res.send({message: "Some Error Occured"})
      }
      else {

        res.send({ message: "Succesfully added!" });

      }
    })
})

module.exports = router
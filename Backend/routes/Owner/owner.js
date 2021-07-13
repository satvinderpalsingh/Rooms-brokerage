var express = require('express');

const database = require('../../database');

var router = express.Router();

const db = database;

router.post('/',(req,res)=> {

    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const address = req.body.address;
    const no_bedrooms=req.body.no_bedrooms;
    const capacity=req.body.capacity;
    const action=req.body.action;
    const area=req.body.area;
    const cost=req.body.cost;
    const email = req.body.email;
    const phone_no=req.body.phone_no;
    const facilities=req.body.facilities;
    const image=req.body.image;
    const description=req.body.description;

    db.query("SELECT * FROM owner_uploads WHERE (email = ?)",
    [email],
    db.query("INSERT INTO owner_uploads (firstname, lastname,address,no_bedrooms,capacity,action,area,cost,email,phone_no,facilities,image,description) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)", 
      [firstname, lastname, address,no_bedrooms,capacity,action,area,cost,email,phone_no,facilities,image,description],
      (err, result)=> {
        if (err){
          console.log(err);
        }
        else {          
          res.send({message : "Successfully Added"});
        }
      })
    )  
})

module.exports = router
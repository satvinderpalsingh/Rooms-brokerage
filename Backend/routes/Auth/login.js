var express = require('express');

const app = express();

const database = require('../../database');

var router = express.Router();

const db = database;

const bcrypt = require('bcrypt');
const saltRounds = 10;

const jwt = require('jsonwebtoken');

router.post('/', (req, res) => {      //path name is just "/" because the actual we have declared in index.js of routes


  const email = req.body.email;
  const password = req.body.password;

  db.query("SELECT * FROM users WHERE (email = ?);",
    [email],
    (err, result) => {
      if (err) {
        res.send({ err: err });
      }


      if (result.length > 0) {
        bcrypt.compare(password, result[0].password, (err, response) => {
          if (response) {


            const id = result[0].id;
            const token = jwt.sign({ id }, "jwtSecret", {
              expiresIn: 300,
            })

            // req.session.user = result;

            res.json({ auth: true, token: token, result: result });
          }
          else {
            res.json({ auth: false, message: "wrong username or password" });
          }
        });

      }
      else {
        res.json({ auth: false, message: "no user found" });
      }
    });


});

module.exports = router
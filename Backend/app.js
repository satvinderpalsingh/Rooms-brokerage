//app.js

/* 
Libraries:
  1. express
  2. jsonwebtoken
  3. cors
  4. mysql
  5. bcrypt

Optional:
  6. body-parser
  7. cookie-parser
  8. express-session

*/

const express = require("express");  //requiring express

const app = express();    //Declaring app var for using and making request with the frontend

const cors = require("cors");  //Requiring cors for making the connection between the server and browser

app.use(cors({   //Setting up the cors
  origin: ["http://localhost:3000"],
  methods: ["GET", "POST"],
  credentials: true
}));

const jwt = require('jsonwebtoken'); //requiring JWT for authentication


const indexRouter = require('./routes/index');  //Main Routing Module


const PORT = process.env.PORT || 3001;   //Creating Port



app.use(express.json());  //For parsing data from the website



const verifyJWT = (req, res, next) => {    //Verifying the JWT Token
  const token = req.headers["x-access-token"]

  if (!token) {
    res.send("You need a token, please give it us next time!");
  }
  else {
    jwt.verify(token, "jwtSecret", (err, decoded) => {
      if (err) {
        res.json({ auth: false, message: "U failed to authenticate" });
      }
      else {
        req.userId = decoded.id;
        next();
      }
    })
  }
}

app.get('/isUserAuth', verifyJWT, (req, res) => {    //Get data for validating if the user is logged in or not
  res.send("Authenticated");
})

app.get('/logout', (req, res) => {    //For logging out
  const token = req.headers["x-access-token"]


})

app.use('/', indexRouter);

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});







/*                                   Code is for creating the session                            */

// const bodyParser = require('body-parser');
// const cookieParser = require('cookie-parser');
// const session = require('express-session');
// app.use(cookieParser());
// app.use(bodyParser.urlencoded({ extended : true }));

// app.use(session({
//   key : "userId",
//   secret : "Keep_it_very_secret_in_normal_use",
//   resave : false,
//   saveUninitialized : false,
//   cookie : {
//       expires: 60 * 60 * 24,
//   }
// }))
// app.get("/login", (req,res) => {
//   if (req.session.user){
//     res.send({loggedIn: true, user: req.session.user});
//   }
//   else {
//     res.send({loggedIn: false });
//   }
// })

/*                                   Code is for creating the session                            */
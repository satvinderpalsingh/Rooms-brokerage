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

const express = require("express"); 

const app = express();   

const cors = require("cors"); 

app.use(cors({ 
  origin: ["http://localhost:3000"], //working locally
  // origin: [""],   // live server
  methods: ["GET", "POST"],
  credentials: true
}));



const jwt = require('jsonwebtoken'); 


const indexRouter = require('./routes/index');  


const PORT = process.env.PORT || 3001;   



app.use(express.json());  

app.use((req, res, next) => {
  const allowedOrigins = ['http://mysql://uzey35wx08fxxsmp:gvuMHvWrxsA9atFuK9ci@byhwavuppyienosgunop-mysql.services.clever-cloud.com:3306/byhwavuppyienosgunop.0.0.1:8020', 'http://localhost:3000'];
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
       res.setHeader('Access-Control-Allow-Origin', origin);
  }
  //res.header('Access-Control-Allow-Origin', 'http://127.0.0.1:8020');
  res.header('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.header('Access-Control-Allow-Credentials', true);
  return next();
});



const verifyJWT = (req, res, next) => {    
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

app.get('/isUserAuth', verifyJWT, (req, res) => {  
  res.send("Authenticated");
})

app.get('/logout', (req, res) => { 
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
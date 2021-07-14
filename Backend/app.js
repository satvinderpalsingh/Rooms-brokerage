//app.js

const express = require("express");
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');

const cors = require("cors");

const indexRouter = require('./routes/index');


const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json());

app.use(cors({
  origin : ["http://localhost:3000"],
  methods : ["GET", "POST"],
  credentials : true
}));

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended : true }));

app.use(session({
  key : "userId",
  secret : "Keep_it_very_secret_in_normal_use",
  resave : false,
  saveUninitialized : false,
  cookie : {
      expires: 60 * 60 * 24,
  }
}))

app.get("/login", (req,res) => {
  if (req.session.user){
    res.send({loggedIn: true, user: req.session.user});
  }
  else {
    res.send({loggedIn: false });
  }
})






app.use('/',indexRouter);

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
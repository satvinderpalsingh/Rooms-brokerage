//Steps 

// Declare the route here with path as the "/pathname"


var express = require('express');
var router = express.Router();

const login = require('./Auth/login');
const register = require('./Auth/register');
const owner = require('./Owner/owner');
const ownerAds = require('./Owner/ownerAds');

router.use('/login', login);
router.use('/register', register);
router.use('/Ownerupload', owner);
router.use('/ownerAds',ownerAds);

module.exports = router;


var express = require('express');
var router = express.Router();

const login = require('./Auth/login');
const register = require('./Auth/register');
const owner = require('./Owner/owner');

router.use('/login', login);
router.use('/register',register);
router.use('/OwnerUpload',owner);


module.exports = router;


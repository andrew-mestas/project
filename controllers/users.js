var express = require('express');
var User = require('../models/user');
var router = express.Router();
console.log(User.find({}))

router.get('/', function(req, res) {
  User.find({},function(err, users) {
    if (err) return res.send({message: 'An error occurred when finding users'});
    console.log(users)
    res.send(users);
  });
});

module.exports = router;

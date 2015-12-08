var express = require('express');
var Container = require('../models/container');
var router = express.Router();
console.log(Container.find({}))

router.get('/', function(req, res) {
  Container.find({},function(err, containers) {
    if (err) return res.send({message: 'An error occurred when finding containers'});
    console.log(containers)
    res.send(containers);
  });
});

module.exports = router;

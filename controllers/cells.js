var express = require('express');
var Cell = require('../models/cell');
var router = express.Router();
console.log(Cell.find({}))

router.get('/', function(req, res) {
  Cell.find({},function(err, cells) {
    if (err) return res.send({message: 'An error occurred when finding cells'});
    console.log(cells)
    res.send(cells);
  });
});

module.exports = router;

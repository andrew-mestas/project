var express = require('express');
var app = express();
var ejsLayout = require("express-ejs-layouts");
app.use(express.static(__dirname + "/static"));
app.use(ejsLayout);
app.set("view engine", "ejs");

app.get('/', function(req, res){
	res.render("index");
});


app.listen(3000,"0.0.0.0");

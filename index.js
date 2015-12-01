var express = require('express');
var app = express();
var ejsLayout = require("express-ejs-layouts");

app.use(ejsLayout);
app.set("view engine", "ejs");

app.get('/', function(req, res){
	res.send("test");
});


app.listen(3000);

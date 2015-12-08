var https = require('https');
var fs = require('fs');

var options = {
  key: fs.readFileSync('./sslcert/key.pem'),
  cert: fs.readFileSync('./sslcert/cert.pem')
};
var express = require('express');
var app = express();
var a = https.createServer(options, app).listen(8000);

var ejsLayout = require("express-ejs-layouts");
// var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var User = require('./models/user');
var Cell = require('./models/cell');
var Container = require('./models/container');
// var expressJwt = require('express-jwt');
// var jwt = require("jsonwebtoken");
mongoose.connect('mongodb://localhost:27017/augmentedRealityDB');
// app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static(__dirname + "/static"));
app.use(ejsLayout);
app.set("view engine", "ejs");

// var newCell = Cell({
// 	location: [47.6232447, -122.3304342]
// });

// var newContainer = Container({
// 	position: { x:0, y:0, z:4 },
// 	items: null, 
// 	belongsTo: null,
// 	data: [{
// 			id:'n',
// 			geometry:{ shape:'cube', x:1, y:1, z:1 }, 
//             rotation:{ x:30, y:30, z:0 },
//             material:{ 
// 			          type: 'phong',
// 			          color:0xFF0000, 
// 			         },
// 	        }, { poi_id: 'north' }],
// 	cellContained: newCell._id
// });

// var newUser = User({
// 	name: 'Bobby Dylan',
// 	email: 'testing@test.com',
// 	password: 'password',
// 	holding: [{containerId: null, dateVisited: new Date()}],
// 	cellId: null
// });



// app.use('/api/users', require('./controllers/users'));
// app.use('/api/cells', require('./controllers/cells'));
// app.use('/api/containers', require('./controllers/containers'));


app.get('/', function(req, res){
	res.render("index");
});

app.listen(3000,"0.0.0.0");

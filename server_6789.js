/**
@author DangTM
12/05/2016
**/
var express = require("express");
var request = require('request');

var app     = express();
var server = require('http').createServer(app);  
var io = require('socket.io')(server);
var path    = require("path");
var cors = require("cors");
var fs = require("fs");
//var redis = require("redis");
//var client = redis.createClient();
var client = {}; // use instead of use redis
//var file = require('./core-file');
var urlRoot = require('url');
var bodyparser = require('body-parser');
app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json());
app.use(cors());
app.use(express.static(__dirname));
var ipAddr = 'http://172.16.9.188:8123';
/**
 Start Handle HTMT Template Page
**/
var pathTemplate = path.join(__dirname,'esignage/templateEvent');
var tempName = "";
app.use('/template', express.static(path.join(pathTemplate, '/')));
app.use('/admin', express.static(path.join(__dirname, '/')));
app.get('/template/:template',function(req,res){
 var tmp = req.params.template;
 res.sendFile(path.join(pathTemplate,'esignage/templateEvent', tmp));
});
app.get('/getFileName', function(req, res){
       if(tempName != ""){
               res.setHeader('Content-Type', 'application/json');
               tempName = 'http://localhost:6789/template/' + tempName;
               var json = {status: 1, message: tempName};
               res.send(JSON.stringify(json));
               tempName = "";
       } else {
               var json = {status: 0, message: 'file not save'};
               res.send(JSON.stringify(json));
       }
});
app.post('/saveHTML', function(req, res) {
       var data = req.query.data;
       var pathFile = pathTemplate + req.query.name;
       fs.writeFile(pathFile, data, function(err) {
                res.setHeader('Content-Type', 'application/json');
               if (err) {
                       var json = {status: 0, message: err};
                       res.send(JSON.stringify(json));
                       return;
               }
               tempName = req.query.name;
               var json = {status: 1, message: pathFile};
               res.send(JSON.stringify(json));
       });
});
app.get('/template/content/*', function(req, res){
  var url = req.url.match('^[^?]*')[0].replace('/template/content/','');
  res.sendFile(path.join(pathTemplate, url));
});
/**
 * End Handle HTML Template
 */

app.get('/admin',function(req,res){
	res.sendFile(path.join(__dirname,'dashboard.html'));
});
app.get('/',function(req,res){
  res.sendFile(path.join(__dirname,'blank.html'));
});
app.post('/upload', function(req, res){
	file.upload(req, res);
});
io.sockets.on('connection', function(socket){
	  console.log(client);
	  socket.on('disconnect', function () {
			console.log('socket.io is disconnected');
	  });
	  socket.on('user', function(username){
	      // save username 
		  console.log(username + ' log into web with socket ' + socket.id);
//		  client.set(username, socket.id, function(err) {
//		      if (err) throw err;
//		      console.log(username + "socket is now" + socket.id);
//		  });
		  // add username
		  client[username] = socket.id;
	  });
	  socket.on("service", function(data, callback) {
	    // Fetch the socket id from Redis
//	    client.get(data.username, function(err, socketId) { 
//	      if (err) throw err;
//	      io.sockets.socket(socketId).emit('service', data);
//	    }); 
		  console.log('Input >>', data);
		  console.log('client >>', client);
		  request({
			    uri: ipAddr + '/esmile_iot/admin/getrealtime',
			    method: 'POST',
			    body: JSON.stringify({'username':data.user_name, 'store_id': data.store_id}),
			    headers: {'content-type':'application/json'}
			  }, function(error, response, body){
					if(error){
						return error;
					} else {
						var data = JSON.parse(body);
//						console.log(data);
						if(data.status_code == 200){
							var socketId = client[data.username];
//							io.sockets.clients(socketId).emit('service_response', data); 
							console.log('send data service to socket id', socket.id);
							return callback(data);
						}
					}
	    		});
	  });
	  socket.on("quickstats", function(data, callback) {
	    // Fetch the socket id from Redis
//	    client.get(data.username, function(err, socketId) {
//	      if (err) throw err;
//	      io.sockets.socket(socketId).emit('quickstats', data);
//	    });
		  console.log('Input >>', data);
		  request.post({
			    uri: ipAddr + '/esmile_iot/admin/getquickstats',
			    method: 'POST',
			    body: JSON.stringify({"user_id": data.user_id, "store_id":data.store_id, "from": data.from, "to": data.to}),
			    headers: {'content-type':'application/json'}
			  }, 
			  function(error, response, body){
					if(error){
						console.log(error);
						return;
					} else {
						var data = JSON.parse(body);
						if(data.status_code == 200){
							 var socketId = client[data.username];
							 console.log('send data quickstats to socket id', socket.id);
							 return callback(data);
						}
					}
	    		});
		 
	  });
	  socket.on("waittime", function(data, callback) {
		  console.log('Input >>', data);
		  request.post({
			    uri: ipAddr + '/esmile_iot/admin/sumwait',
			    method: 'POST',
			    body: JSON.stringify({"store_id": data.store_id, "table_id": data.table_id, "from": data.from, "to": data.to}),
			    headers: {'content-type':'application/json'}
			  }, 
			  function(error, response, body){
					if(error){
						console.log(error);
						return;
					} else {
						var data = JSON.parse(body);
						if(data.status_code == 200){
							 var socketId = client[data.username];
							 console.log('send data waittime to socket id', socket.id);
							 return callback(data);
						}
					}
	    		});
	   });
	  socket.on("ranking", function(data, callback) {
		  console.log('Input >>', data);
		  request.post({
			    uri: ipAddr + '/esmile_iot/admin/sumlike',
			    method: 'POST',
			    body: JSON.stringify({"store_id": data.store_id, "table_id": data.table_id, "from": data.from, "to": data.to}),
			    headers: {'content-type':'application/json'}
			  }, 
			  function(error, response, body){
					if(error){
						console.log(error);
						return;
					} else {
						var data = JSON.parse(body);
						if(data.status_code == 200){
							 var socketId = client[data.username];
							 console.log('send data ranking to socket id', socket.id);
							 return callback(data);
						}
					}
	    		});
	   });
	});
server.listen(6789, function(){
	console.log('Server listening on port ' + server.address().port);
});
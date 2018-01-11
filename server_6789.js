/**
@author DangTM
12/05/2016
**/
var express = require("express");
var request = require('request');
var app     = express();
var path    = require("path");
var cors = require("cors");
var fs = require("fs");
var geocoder = require('geocoder');
//var file = require('./core-file');
var urlRoot = require('url');
var bodyparser = require('body-parser');
app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json());
app.use(cors());
app.use(express.static(__dirname));
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
       }else {
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
app.get('/getHTML', function(req, res){
    var url = req.query.url;
    console.log(urlRoot.parse(url).hostname);
    request.get(url,
                    function(error, response, body){
            res.charset = 'UTF-8';
            body = body.replace(/href="/g, 'href="'+url+'');
            body = body.replace(/src="/g, 'href="'+url+'');
            res.send(body);
    });
});

app.get('/languages/text/:code', function(req, res){
	var code = req.params.code;
	res.charset = 'UTF-8';
	res.sendFile(path.join(__dirname,'ELCommon/language/text_' + code + '.json'));
});
var server = app.listen(6789, function(){
	console.log('Server listening on port ' + server.address().port);
});
var express = require('express');

var app = express();

var PORT = process.env.PORT||3000;
//request what user send (json, cookie, data) and response what we send to user

var middleware = require('./middleware.js');


app.use(middleware.logger);

app.get('/about',middleware.requireAuthentication, function(req,res){
   res.send('About us!'); 
});


app.use(express.static(__dirname+'/public'));//use html file


app.listen(PORT,function(){
    console.log('Express server started at port:'+PORT);
});//порт который не используется компьютером


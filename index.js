var express = require('express');
var socket = require('socket.io');
var http=require('http');
var fs=require('fs');
//App setup
var app = express();
/* var options={
         key:fs.readFileSync('server.key','utf8'),
         cert:fs.readFileSync('server.crt','utf8'),
         ca:fs.readFileSync('inmdt.crt','utf8')
 };
*/
var wServer=http.createServer(app);
//Static files
app.use(express.static('public'));

//Socket setup
var io = socket(wServer);

io.on('connection', function(socket){
  console.log('made socket connection',socket.id);

  socket.on('chat', function(data){
    io.sockets.emit('chat', data);
  });
});
wServer.listen(4001,function(){
console.log('listening on port 4001');
})

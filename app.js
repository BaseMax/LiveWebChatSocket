// https://github.com/BaseMax/LiveChatSocket
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = 5000;

app.get('/', function(request, response){
	response.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
	console.log('A user connected');
	socket.on('disconnect', function(){
		console.log('A user disconnected');
	});
	socket.on('chat message', function(author, message){
		io.emit('chat message', author, message);
	});
});

http.listen(port, function(){
	console.log('Listening on *:' + port);
});

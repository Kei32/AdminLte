module.exports = function (io,route) {
	io.of(route).on('connection', function (socket) {
	  socket.emit('message', { message: 'welcome to the chat2' });
	  socket.on('send', function (data) {
	  	socket.emit('message', data);
	    io.of('/chanel_1').emit('message', data);
	  });
	});
};

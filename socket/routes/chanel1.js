module.exports = function (io,route) {

	io.of(route).on('connection', function (socket) {
	  socket.emit('message', { message: 'welcome to the chat1' });
	  socket.on('send', function (data) {
	    socket.emit('message', data);
	  });
	});
	
};

var db = require('../../db.service').messages;

module.exports = function (io, route) {

  io.of(route).on('connection', function (socket) {
    db.find({}, function (err, messages) {
      socket.emit('message', {message : 'welcome to the chat1'});
      socket.emit('history', {history : messages});
    });
    socket.on('send', function (data) {
      db.insert({messageData : data});
      socket.emit('message', data);
    });
  });

};

window.onload = function () {

  var messages = [];
  var socket = io.connect('http://' + location.host + '/chanel_1');
  var field = document.getElementById("field");
  var sendButton = document.getElementById("send");
  var content = document.getElementById("content");
  var name = document.getElementById("name");

  socket.on('message', function (data) {
    if (data.message) {
      messages.push(data);
      var html = '';
      for (var i = 0; i < messages.length; i++) {
        html += '<b>' + (messages[i].username ? messages[i].username : 'Server') + ': </b>';
        html += messages[i].message + '<br />';
      }
      content.innerHTML = html;
    } else {
      console.log("There is a problem:", data);
    }
  });
  socket.on('history', function (date) {
    if (date.history) {
      date.history.forEach(function (message) {
        messages.push(message.messageData);
      });
      var html = '';
      for (var i = 0; i < messages.length; i++) {
        html += '<b>' + (messages[i].username ? messages[i].username : 'Server') + ': </b>';
        html += messages[i].message + '<br />';
      }
      content.innerHTML = html;
    } else {
      console.log("There is a problem:", date);
    }
  });

  sendButton.onclick = sendMessage = function () {
    if (name.value == "") {
      alert("Please type your name!");
    } else {
      var text = field.value;
      socket.emit('send', {message : text, username : name.value});
      field.value = "";
    }
  };


  var messages2 = [];
  var socket2 = io.connect('http://' + location.host + '/chanel_2');
  var field2 = document.getElementById("field2");
  var sendButton2 = document.getElementById("send2");
  var content2 = document.getElementById("content2");
  var name2 = document.getElementById("name2");

  socket2.on('message', function (data) {
    if (data.message) {
      messages2.push(data);
      var html2 = '';
      for (var i = 0; i < messages2.length; i++) {
        html2 += '<b>' + (messages2[i].username ? messages2[i].username : 'Server') + ': </b>';
        html2 += messages2[i].message + '<br />';
      }
      content2.innerHTML = html2;
    } else {
      console.log("There is a problem:", data);
    }
  });

  sendButton2.onclick = sendMessage2 = function () {
    if (name2.value == "") {
      alert("Please type your name!");
    } else {
      var text = field2.value;
      socket2.emit('send', {message : text, username : name2.value});
      field2.value = "";
    }
  };


}
$(document).ready(function () {
  $("#field").keyup(function (e) {
    if (e.keyCode == 13) {
      sendMessage();
    }
  });
});

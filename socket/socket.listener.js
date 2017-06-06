var chanel1 = require('./routes/chanel1');
var chanel2 = require('./routes/chanel2');

module.exports = function (io) {
	chanel1(io,'/chanel_1');
	chanel2(io,'/chanel_2');
};

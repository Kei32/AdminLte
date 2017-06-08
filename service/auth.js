var crypto = require('crypto');

var sessionDB = require('./db.service').sessions;
var userDB = require('./db.service').users;

module.exports = function (req, res, next) {
  console.log(req.url+req.method);
  if('get logout'){
    //redirect to login
  }
  if('post login'){
    //set cookies & go to board res.cookie('s_hash','as7d6f5saf75sd7f'); var hash = crypto.createHash('md5').update(name).digest('hex');
  }
  var session_cookie = req.cookies.s_hash;
  if (session_cookie === undefined){
    //redirect to login
  }
  //db_session = db.find session_cookie
  //if db_session = undefined
  //then redirect to login
  //if last access time > 1hour
  //then redirect to lockscreen
  //else set last access = time now
  //req set user & principal
  //

  next();
};

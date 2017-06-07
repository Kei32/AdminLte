var Datastore = require('nedb');
var db = {};

db.messages = new Datastore({filename : './db/messages.db', autoload : true});

module.exports = db;

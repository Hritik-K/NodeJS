var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoos = require('passport-local-mongoose');

var User = new Schema({
    admin:   {
        type: Boolean,
        default: false
    }
});

User.plugin(passportLocalMongoos);

module.exports = mongoose.model('User', User);
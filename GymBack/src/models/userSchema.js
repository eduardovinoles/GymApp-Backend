var mongoose = require('mongoose');

var Schema = mongoose.Schema;


var userSchema = new Schema({
    name: {
        type: String,
        required: true
    } ,
    ci: {
        type: String,
        required: true
    } ,
    tel: String,
    address: String,
    type: {
        type: String,
        required: true
    } 
});

// Compile model from schema
var userModel = mongoose.model('user', userSchema);

module.exports = userModel 


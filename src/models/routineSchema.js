var mongoose = require('mongoose');

var Schema = mongoose.Schema;


var routineSchema = new Schema({
    id: {
        type: String,
        required: true
    },
    lastActiveAt: Date, 
    monday: String,
    tuesday: String,
    wednesday: String,
    thursday: String,
    friday: String,
    saturday: String,
    sunday: String,
});

// Compile model from schema
var routineModel = mongoose.model('routine', routineSchema);

module.exports = routineModel 

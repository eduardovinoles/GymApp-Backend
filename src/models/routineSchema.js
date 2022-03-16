var mongoose = require('mongoose');

var Schema = mongoose.Schema;


var routineSchema = new Schema({
    name: String,
    exercises: [{
        name: String,
        muscleGroup: String
    }]
});

// Compile model from schema
var routineModel = mongoose.model('routine', routineSchema);

module.exports = routineModel

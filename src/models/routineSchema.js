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
var RoutineModel = mongoose.model('routine', routineSchema);

module.exports = RoutineModel

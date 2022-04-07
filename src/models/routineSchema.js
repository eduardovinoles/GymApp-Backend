var mongoose = require('mongoose');

var Schema = mongoose.Schema;


var routineSchema = new Schema({
    name: String,
    day: String,
    exercises: [{
        name: String,
        muscleGroup: String,
        reps: String,
        sets: String,
        rest: String
    }]
});

// Compile model from schema
var RoutineModel = mongoose.model('dayRoutine', routineSchema);

module.exports = RoutineModel

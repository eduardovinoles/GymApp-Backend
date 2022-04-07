var mongoose = require('mongoose');

var Schema = mongoose.Schema;


var exerciseSchema = new Schema({
    clientId: { type: String, index: true },
    date: Date,
    name: String,
    exercises: [{
        name: String,
        muscleGroup: String,
        reps: String,
        sets: String,
        rest: String
    }]
});

// Compile model from schema
var ExerciseModel = mongoose.model('routine', exerciseSchema);

module.exports = ExerciseModel

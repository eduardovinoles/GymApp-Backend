var mongoose = require('mongoose');

var Schema = mongoose.Schema;


var exerciseSchema = new Schema({
    _clientId: Schema.Types.ObjectId,
    date: Date,
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
var ExerciseModel = mongoose.model('routine', exerciseSchema);

module.exports = ExerciseModel

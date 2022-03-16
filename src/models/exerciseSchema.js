trainingSesion
    client (reference to clients)
    date date
    excercise string (reference to excercises)
    series int
    repetitions int */

    var mongoose = require('mongoose');

var Schema = mongoose.Schema;


var exerciseSchema = new Schema({
    name: String,
    exercises: [{
        name: String,
        muscleGroup: String
    }]
});

// Compile model from schema
var exerciseModel = mongoose.model('routine', exerciseSchema);

module.exports = exerciseModel

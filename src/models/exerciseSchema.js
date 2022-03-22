const { ObjectId } = require('mongodb');
var mongoose = require('mongoose');

var Schema = mongoose.Schema;


var exerciseSchema = new Schema({
    _id: ObjectId,
    date: Date,
    exercise: String,
    series: Number,
    repetitions: Number
});

// Compile model from schema
var ExerciseModel = mongoose.model('routine', exerciseSchema);

module.exports = ExerciseModel

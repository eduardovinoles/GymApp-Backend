var mongoose = require('mongoose');

var Schema = mongoose.Schema;


var exerciseSchema = new Schema({
    clientId: Schema.ObjectId,
    date: Date,
    exercise: String,
    series: Number,
    repetitions: Number
});

// Compile model from schema
var exerciseModel = mongoose.model('routine', exerciseSchema);

module.exports = exerciseModel

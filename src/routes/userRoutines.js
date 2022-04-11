const { response } = require('express');
var express = require('express');
var router = express.Router();

const ExerciseModel = require('../models/exerciseSchema')

router.get('/', async (req, res) => {

    const routine = await ExerciseModel.find({})
    try {
        res.send(routine)
    } catch (error) {
        res.send(error)
    }
})

router.get('/:clientId', async (req, res) => {

    const userRoutine = await ExerciseModel.findById(req.params.clientId)
    try {
        res.send(userRoutine)
    } catch (error) {
        res.send(error)
    }
})

router.post('/', async (req, res) => {
    const userExercise = req.body
     const newUserExercise = new ExerciseModel({
        clientId: req.body.clientId,
        date: req.body.date,
        name: req.body.name,
        day: req.body.day,
        exercises: req.body.exercises 
    }); 
    try {
        await newUserExercise.save()
        res.send(userExercise)
        
    } catch (error) {
        res.send(error)
    }
})

router.put('/:id', async (req, res) => {

    try {
        let response = await ExerciseModel.findByIdAndUpdate(req.params.id, req.body)
        await ExerciseModel.save()
        res.send(response)
    } catch (error) {
        res.send(error)

    }
})

router.delete('/:id', async (req, res) => {

    try {
        const routine = await ExerciseModel.findByIdAndDelete(req.params.id)

        if (!routine) res.status(404).send("No routine found")
        res.status(200).send()
    } catch (error) {
        res.send(error)

    }
})

module.exports = router;
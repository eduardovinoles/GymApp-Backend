const { response } = require('express');
var express = require('express');
var router = express.Router();

const exerciseModel = require('../models/exerciseSchema')

router.get('/', async (req, res) => {

    const routine = await exerciseModel.find({})
    try {
        res.send(routine)
    } catch (error) {
        res.send(error)
    }
})

router.get('/:id', async (req, res) => {

    const userRoutine = await exerciseModel.findById(req.params.id)
    try {
        res.send(userRoutine)
    } catch (error) {
        res.send(error)
    }
})

router.post('/', async (req, res) => {

    const newUserExercise = new exerciseModel({
        clientId: req.body.id,
        date: req.body.date,
        exercise: req.body.exercise,
        series: req.body.series,
        repetitions: req.body.repetitions 
    });
    try {
        await newUserExercise.save()
        res.send(newUserExercise)
        console.log(newUserExercise)
    } catch (error) {
        res.send(error)
    }
})

router.put('/:id', async (req, res) => {

    try {
        let response = await exerciseModel.findByIdAndUpdate(req.params.id, req.body)
        await exerciseModel.save()
        res.send(response)
    } catch (error) {
        res.send(error)

    }
})

router.delete('/:id', async (req, res) => {

    try {
        const routine = await exerciseModel.findByIdAndDelete(req.params.id)

        if (!routine) res.status(404).send("No routine found")
        res.status(200).send()
    } catch (error) {
        res.send(error)

    }
})

module.exports = router;
var express = require('express');
var router = express.Router();

const RoutineModel = require('../models/routineSchema')

router.get('/', async (req, res) => {

    const routine = await RoutineModel.find({})
    try {
        res.send(routine)
    } catch (error) {
        res.send(error)
    }
})

router.get('/:ci', async (req, res) => {

    const user = await RoutineModel.findById(req.params.ci)
    try {
        res.send(userRoutine)
    } catch (error) {
        res.send(error)
    }
})

router.post('/', async (req, res) => {

    const newUserRoutine = new RoutineModel({  ci: req.body.ci, monday: req.body.monday, tuesday: req.body.tuesday, wednesday: req.body.wednesday, thursday: req.body.thursday, friday: req.body.friday, saturday: req.body.saturday, sunday: req.body.sunday  });
    try {
        await newUserRoutine.save()
        res.send(newUserRoutine)
        console.log(newUserRoutine)
    } catch (error) {
        res.send(error)
    }
})

router.put('/:ci', async (req, res) => {

    try {
        await RoutineModel.findByIdAndUpdate(req.params.ci, req.body)
        await RoutineModel.save()
        res.send(modRoutine)
    } catch (error) {
        res.send(error)

    }
})

router.delete('/:ci', async (req, res) => {

    try {
        const routine = await RoutineModel.findByIdAndDelete(req.params.ci)

        if (!routine) res.status(404).send("No routine found")
        res.status(200).send()
    } catch (error) {
        res.send(error)

    }
})

module.exports = router;
const { response } = require('express');
var express = require('express');
var router = express.Router();

const UserModel = require('../models/userSchema')
const RoutineModel = require('../models/routineSchema')

router.get('/', async (req, res) => {


    try {
        const newUserRoutine = new RoutineModel({
            name: "training 3",
            day: "Wednesday training",
            exercises: [
                {
                    name: "Push-ups",
                    muscleGroup: "Entire upper body",
                    reps: 3,
                    sets: 20,
                    rest: 30
                },
                {
                    name: "Reverse leg curls",
                    muscleGroup: "Gluteus",
                    reps: 3,
                    sets: 15,
                    rest: 30
                },
                {
                    name: "Alternating Leg Raises",
                    muscleGroup: "Abs",
                    reps: 2,
                    sets: 30,
                    rest: 30
                },
                {
                    name: "Twist & Slot",
                    muscleGroup: "Abs/Obliqs",
                    reps: 2,
                    sets: 30,
                    rest: 30
                },
                {
                    name: "Interval Training",
                    muscleGroup: "",
                    reps: 0,
                    sets: 0,
                    rest: 0
                },


            ]
        });

        await newUserRoutine.save()
    } catch (error) {
        res.send(error)
    }

   
    let training3 = {
        title: "Wednesday training",
        row1: { exercise: "Push-ups", muscle: "Entire upper body", reps: 3, sets: 20, rest: 30 },
        row2: { exercise: "Reverse leg curls", muscle: "Gluteus", reps: 3, sets: 15, rest: 30 },
        row3: { exercise: "Alternating Leg Raises", muscle: "Abs", reps: 2, sets: 30, rest: 30 },
        row4: { exercise: "Twist & Slot", muscle: "Abs/Obliqs", reps: 2, sets: 30, rest: 30 },
        row5: { exercise: "Interval Training", muscle: "", reps: 0, sets: 0, rest: 0 }
    }




    const users = await UserModel.find({})
    try {
        res.send(users)
    } catch (error) {
        res.send(error)
    }
})

router.get('/:id', async (req, res) => {

    const user = await UserModel.findById(req.params.id)
    try {
        res.send(user)
    } catch (error) {
        res.send(error)
    }
})

router.post('/', async (req, res) => {
    console.log(JSON.stringify(req.body))
    const newUser = new UserModel({
        tel: req.body.tel, name: req.body.name, ci: req.body.ci,
        address: req.body.address, type: req.body.type, medicalCare: req.body.medicalCare,
        birthDate: req.body.birthDate, notes: req.body.notes, active: req.body.active
    });
    try {
        console.log('new user:' + newUser)

        await newUser.save()
        res.send(newUser)
    } catch (error) {
        res.send(error)
    }
})

router.put('/:id', async (req, res) => {
    console.log('test: put')
    console.log(req.body)
    try {
        let response = await UserModel.findByIdAndUpdate(req.params.id, req.body)
        console.log(response)
        res.send(response)
    } catch (error) {
        console.error(error)
        res.send(error)
    }
})

router.delete('/:id', async (req, res) => {

    try {
        const user = await UserModel.findByIdAndDelete(req.params.id)

        if (!user) res.status(404).send("No user found")
        res.status(200).send()
    } catch (error) {
        res.send(error)

    }
})

module.exports = router;

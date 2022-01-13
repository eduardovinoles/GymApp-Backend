const { response } = require('express');
var express = require('express');
var router = express.Router();

const UserModel = require('../models/userSchema')

router.get('/', async (req, res) => {

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
    console.log(req.body)

    // Create an instance of model SomeModel
    const newUser = new UserModel({ name: req.body.name, ci: req.body.ci, tel: req.body.tel, address: req.body.address, type: req.body.type });
    try {
        await newUser.save()
        res.send(newUser)
        console.log(newUser)
    } catch (error) {
        res.send(error)
    }
})

router.put('/:id', async (req, res) => {

    try {
        await UserModel.findByIdAndUpdate(req.params.id, req.body)
        await UserModel.save()
        res.send(user)
    } catch (error) {
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

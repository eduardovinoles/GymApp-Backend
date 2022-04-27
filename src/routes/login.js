const { response } = require('express');
var express = require('express');
var router = express.Router();

router.get('/login', async (req, res) => {

    const users = await UserModel.find({})
    try {
        res.send({
            token: 'test123'
          });
    } catch (error) {
        res.send(error)
    }
})

module.exports = router;

const { response } = require('express');
var express = require('express');
var router = express.Router();


router.post('/login', async (req, res) => {
    try {
    res.send({
        token: 'test123'
      });
    } catch (error) {
        res.send(error)
    }
})

module.exports = router;
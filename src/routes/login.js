const { response } = require('express');
var express = require('express');
var router = express.Router();

router.post('/', (req, res) => {
    console.log(JSON.stringify(req.body))
    const token = { token: 'test123' }
    res.send(token);
})

module.exports = router;

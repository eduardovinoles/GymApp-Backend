const { response } = require('express');
var express = require('express');
var router = express.Router();

router.post('/login', (req, res) => {
const token =  {token: 'test123'}
    res.send(token);
})

module.exports = router;

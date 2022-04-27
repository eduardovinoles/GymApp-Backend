const { response } = require('express');
var express = require('express');
var router = express.Router();

router.post('/login', (req, res) => {
   
        res.send({
            token: 'test123'
          });
        })

module.exports = router;

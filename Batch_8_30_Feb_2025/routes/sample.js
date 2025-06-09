var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    var data = {
      name: 'Raj',
      age: 20,
      gender: 'Male'
    };

    res.send(JSON.stringify(data));
});

module.exports = router;

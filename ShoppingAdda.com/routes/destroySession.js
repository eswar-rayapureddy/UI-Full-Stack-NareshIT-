var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
   console.log("From logout ----------- " + process.pid);
   req.session.destroy();
   res.send(JSON.stringify({msg: 'success'}));
});

module.exports = router;

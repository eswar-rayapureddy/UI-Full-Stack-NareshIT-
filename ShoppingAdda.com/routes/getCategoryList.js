var express = require('express');
var router = express.Router();
var dbUtils = require("./common/dbUtility");

/* GET home page. */
router.get('/', function(req, res, next) {
    console.log("From get category list ----------- " + process.pid);
    var categoryList = [];

    dbUtils.doDbCommunication({}, 'find', 'productCategories').then((response) => {
        categoryList = response[0].categories;
        res.send(JSON.stringify(categoryList));
    });

    
});

module.exports = router;

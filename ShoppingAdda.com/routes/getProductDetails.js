var express = require('express');
var router = express.Router();
var dbUtils = require("./common/dbUtility");
var jwt = require('jsonwebtoken');

router.post('/', (req, res) => {
    console.log("From Get product details ----------- " + process.pid);


    var userPassedJwtToken = req.headers['authorization'] ? req.headers['authorization'] : '';
    userPassedJwtToken = userPassedJwtToken.replace('Bearer ', '');

    jwt.verify(userPassedJwtToken, process.env.JWT_SECRET, (err, data) => {
        if (data) { // authorized user with valid token
            var productDetails = [];    
            var userQuery = {};
            console.log("inside")
            if (Object.keys(req.body).length) { // user passed some query
                if (req.body.priceRange) {
                    userQuery.price = {
                        '$gt': parseInt(req.body.priceRange)
                    }
                }
                if (req.body && req.body.categoryList && req.body.categoryList.length) {
                    userQuery.category = {
                        '$in': req.body.categoryList
                    }
                }
                if (req.body.id) {
                    userQuery.id = req.body.id;
                }
            }

            console.log("prepared user query");
            console.log(userQuery);

            dbUtils.doDbCommunication(userQuery, 'find', 'productDetails').then((result) => {
                productDetails = result;
                res.send(JSON.stringify(productDetails));
            });
        } else { // invalid user with invalid token
            res.send(JSON.stringify({'msg': 'Unauthorized user'}));
        }
    });    
});

module.exports = router;
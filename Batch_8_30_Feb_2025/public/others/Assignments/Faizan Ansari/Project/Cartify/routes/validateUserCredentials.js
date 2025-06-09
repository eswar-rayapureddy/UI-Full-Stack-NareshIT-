var express = require('express');

var router = express.Router();

router.post('/', (request, response) => {
    console.log(request.body);
    var responseObj = {};
    if(request.body.accountID == 'admin' &&  request.body.accountPassword == 'admin123'){
        responseObj.status = 'Valid credentials'
    } else {
        responseObj.status = 'Invalid credentials'
    }
    response.send(JSON.stringify(responseObj));
}); 

module.exports = router;
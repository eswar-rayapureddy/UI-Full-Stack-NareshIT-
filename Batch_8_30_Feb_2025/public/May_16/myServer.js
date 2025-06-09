var http = require('http');

var server = http.createServer((req, res) => {
    res.writeHead(200, {
        "content-type": 'text/json'
    });
    var data = {
        name:' raj',
        age: 10,
        gender: 'Male'
    }
    res.end(JSON.stringify(data));
});

server.listen(8080, () => {
    console.log("server is listing at 8080");
});
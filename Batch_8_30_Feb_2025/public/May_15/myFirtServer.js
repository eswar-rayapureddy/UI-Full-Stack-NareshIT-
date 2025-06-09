


    var http = require("http");

    var myserver = http.createServer((request, response) => {

        response.statusCode = 201; // Set the response status code to 200 (OK)
        response.setHeader('Content-Type', 'text/html');

        console.log(request);
        response.end("<b>Hello i got created</b>");
    });

    myserver.listen(8080, () => {
        console.log("server is listing at 8081");
    })



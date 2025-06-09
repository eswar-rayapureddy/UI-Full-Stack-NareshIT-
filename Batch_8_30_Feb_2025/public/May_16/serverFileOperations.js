var http = require('http');
var fs = require("fs");

var server = http.createServer((req, res) => {
    res.writeHead(200, {
        "content-type": 'text/plain'
    });

    // fs.readFile('userDetails.txt', (error, filecontent) => {
    //     if (error) {
    //         res.end("Error whilw reading file")
    //     } else {
    //         res.end(filecontent);
    //     }
    // });
   
    // fs.writeFile("userDetails.txt", "USer details 2 name teena", (error) => {
    //     res.end("File content been written")
    // });

    fs.appendFile("userDetails.txt", "userdetails 3 been written", () => {
            res.end("File content been written")
    });
   
});

server.listen(8080, () => {
    console.log("server is listing at 8080");
});
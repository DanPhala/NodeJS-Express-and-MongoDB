//configure to use node http module
const http = require('http');

const hostname = 'localhost';
const port = 3000;

//Setting up the server
//request and server
const server = http.createServer((req, res) => {
    console.log(req.headers); //putting the headers of the incoming request

    //respond message (200 == Okay)
    res.statusCode = 200;
    //Response body will contain data in the form of html
    res.setHeader('Content-Type', 'text/html');
    //end the response and the information will be sent to the client
    res.end('<html><body><h1>Hello, World!</h1></body></html>');
});

//will restart the open to enable the server to listen to request on that port
server.listen(port, hostname, () =>{
    //using back qoutes because we will be using some variables in there
    //things inside dollar are replaced by the actual values in the string
    console.log(`server running at http://${hostname}:${port}`)
});
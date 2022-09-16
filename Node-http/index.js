//configure to use node http module
const http = require('http');
const Fs = require('fs');
const path = require('path');   //Allow to specify path for the files to be read


const hostname = 'localhost';
const port = 3000;

//Setting up the server
//request and server
const server = http.createServer((req, res) => {
    console.log("Request for " + req.url + ' by method ' + req.method); //putting the headers of the incoming request

    //Examine the method
    if(req.method == 'GET'){
            var fileUrl;    //Initializing a variable
            if(req.url == '/') {
                fileUrl = '/index.html';
            }
            else{
                fileUrl = req.url;
            } 

            var filePath = path.resolve('./public' + fileUrl);
            const fileExt = path.extname(filePath);

            if(fileExt == '.html'){
                //we know the file is html
                Fs.exists(filePath, (exists) => {
                    //Callback function
                        if(!exists){
                            res.statusCode = 404;
                            res.setHeader('Content-Type','text/html' );
                            res.end('<html><body><h1>Error 404: ' + fileUrl + ' is not found<h1></body></html>');

                            return;
                        }
                        res.statusCode = 200;
                        res.setHeader('Content-Type', 'text/html');
                        fs.createReadStream(filePath).pipe(res);    //taken a file and constructed it into the response

                }) // checking if the file exist
            }
            else {
                    //If the file is not an html 
                    res.statusCode = 404;
                    res.setHeader('Content-Type','text/html' );
                    res.end('<html><body><h1>Error 404: ' + fileUrl + ' not an HTML file <h1></body></html>');
            
                    return;
            }
    }
    else {
        //Error
        res.statusCode = 404;
        res.setHeader('Content-Type','text/html' );
        res.end('<html><body><h1>Error 404: ' + fileUrl + ' not supported<h1></body></html>');

        return;
    }

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
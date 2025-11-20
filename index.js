//the backend api file 

//Node Modules:
const http = require('http')


//Server API
const server = http.createServer((request, response)=>{
    switch(request.url){
        case "/home":
            response.end("HOME PAGE");
            break;
        case "/page1":
            response.end("PAGE 1");
            break;
        default:
            response.end("No results found!");
    }
})
server.listen(3000,console.log("server running on 3000"));


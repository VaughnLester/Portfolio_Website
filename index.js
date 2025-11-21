//the backend api file 

//Node Modules:
const http = require('http'); //primarily to create server 
const fs = require('fs').promises; //to use async function promises to read files


//Server API
const server = http.createServer(async (request, response)=>{
    switch(request.url){
        case "/home":
            const homePage = await fs.readFile("index.html")
            response.end(homePage);
            break;
        case "/page1":
            response.end("PAGE 1");
            break;
        default:
            response.end("No results found!");
    }
})
server.listen(3000,console.log("server running on 3000"));


//TASK: Add error handling to each route, host it on render for now 


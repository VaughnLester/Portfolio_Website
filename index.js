//the backend api file 

//Node Modules:
const http = require('http'); //primarily to create server 
const fs = require('fs').promises; //to use async function promises to read files


//Server API
const server = http.createServer(async (request, response)=>{
    switch(request.url){
        case "/home":
            try{
                const homePage = await fs.readFile("index.html")
                response.end(homePage);
                break;
            }
            catch(error) {console.log("error loading page /home")}
        case "/page1":
            response.end("PAGE 1");
            break;
        default:
            response.end("Error:404 No path found!");
    }
})
server.listen(3000,console.log("server running on 3000"));


//TASK: Add error handling to each route, host it on render for now 


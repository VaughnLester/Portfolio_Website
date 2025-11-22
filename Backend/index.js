//the backend api file 

//Node Modules:
const http = require('http'); //primarily to create server 
const fs = require('fs').promises; //to use async function promises to read files


//Server API
const server = http.createServer(async (request, response)=>{
    switch(request.url){
        case "/home":
            try{
                const homePage = await fs.readFile("Frontend/index.html")
                response.end(homePage);
                break;
            }
            catch(error) {console.log("error loading page /home, "+error)}
        default:
            try{
                const defaultPage = await(fs.readFile("Frontend/noPathFound.html"))
                response.end(defaultPage);
            }
            catch (error){console.log("Error loading no path found page, "+error);}
    }
})
server.listen(3000,console.log("server running on 3000"));


//TASK: Add error handling to each route, host it on render for now 


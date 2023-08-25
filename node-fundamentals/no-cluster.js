const http = require("http")

const server = http.createServer((req,res) => {
    if(req.url === "/"){
        res.writeHead(200, {"Content-type": "text/plain"})
        res.end("home page")
    }else if (req.url === "/slow"){
       for(let i = 0; i<6000000000; i++){}
       res.writeHead(200, {"Content-type": "text/plain"})
        res.end("slow page")
    }
})
server.listen(8000,() => {
    console.log("server running at port 8000")
})
const cluster = require("cluster")
const http = require("http")
const OS = require("os")

console.log(OS.cpus().length)
if (cluster.isMaster) {
    console.log(`this is master process ${process.pid} is running`)
    cluster.fork()
    cluster.fork()
} else {
    console.log(`this is worker process ${process.pid} started`)

    const server = http.createServer((req, res) => {
        if (req.url === "/") {
            res.writeHead(200, { "Content-type": "text/plain" })
            res.end("home page")
        } else if (req.url === "/slow") {
            for (let i = 0; i < 6000000000; i++) { }
            res.writeHead(200, { "Content-type": "text/plain" })
            res.end("slow page")
        }
    })
    server.listen(8000, () => {
        console.log("server running at port 8000")
    })
}
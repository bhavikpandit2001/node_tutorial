const http = require("http")
const { Worker } = require("worker_threads")

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.writeHead(200, { "Content-type": "text/plain" })
        res.end("home page")
    } else if (req.url === "/slow") {
        const worker = new Worker("./worker-threads.js")
        worker.on("message", (j) => {
            res.writeHead(200, { "Content-type": "text/plain" })
            res.end(`slow page${j}`)
        })
    }
})
server.listen(8000, () => {
    console.log("server running at port 8000")
})
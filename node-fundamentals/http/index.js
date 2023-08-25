const http = require("node:http")
const db = require("./db.json")
const fs = require("fs")

const server = http.createServer((req, res) => {
    const name = "World";

    //res.writeHead(200, {"Content-type": "application/json"})

    // // res.end(JSON.stringify(db))
    // res.writeHead(200, {"Content-type": "text/html"})
    // let html = fs.readFileSync("./index.html","utf-8")
    // html = html.replace("{{name}}", name)
    // res.end(html)

    if (req.url === "/") {
        res.writeHead(200, { "Content-type": "text/html" })
        let html = fs.readFileSync("./index.html", "utf-8")
        html = html.replace("{{name}}", name)
        res.end(html)
    } else if (req.url === "/api") {
        res.writeHead(200, { "Content-type": "application/json" })
        res.end(JSON.stringify(db))
    }
    else if (req.url === "/api/superhero") {
        res.writeHead(200, { "Content-type": "application/json" })
        res.end(JSON.stringify(db.superheros))
    } else {
        res.writeHead(404)
        res.end("page noy found")
    }
})
server.listen(3000, () => {
    console.log("server running on port 3000")
})
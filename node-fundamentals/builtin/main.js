const fs = require("node:fs")
const zlib = require("node:zlib")

const gZip = zlib.createGzip()
//create read stream 
const readableStream = fs.createReadStream("./file.txt",{
    encoding: "utf-8",
    highWaterMark: 1
})

//chaining system using pipe..
readableStream.pipe(gZip).pipe(fs.WriteStream("./file2.txt.gz"))
const writableStream = fs.createWriteStream("./file2.txt")

readableStream.pipe(writableStream)

// readableStream.on("data", (chunk) => {
//     console.log(chunk)
//     writableStream.write(chunk)
// })
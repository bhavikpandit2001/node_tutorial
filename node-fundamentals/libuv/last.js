const fs = require("fs")

const readableStream = fs.createReadStream(__filename)
readableStream.close()

readableStream.on("close", () => {
    console.log("readable stream close event callback")
})

setImmediate(() => {
    console.log("setImmediate 1")
})
setTimeout(() => {
    console.log("timeout 3")
},0) 
    
Promise.resolve().then(() => {
    console.log("this is promise.resolve.then calback 1")
})

process.nextTick(() => {
    console.log("this is process.nextTick method 1")
})
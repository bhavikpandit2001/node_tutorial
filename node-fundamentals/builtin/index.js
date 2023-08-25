const { basename } = require("node:path")
const path = require("node:path")

//__file name and __dirname
console.log(__filename)
console.log(__dirname)

//path.basename
console.log(path.basename(__filename))
console.log(path.basename(__dirname))

//path.extname
console.log(path.extname(__filename))
console.log(path.extname(__dirname))

//path.parse
console.log(path.parse(__filename))
console.log(path.format(path.parse(__filename)))

//path.isAbsolute
console.log(path.isAbsolute(__filename))
console.log(path.isAbsolute("./data.json"))

// path.join
console.log(path.join("root","bhavik","index.html"))
console.log(path.join("/root","bhavik","index.html"))
console.log(path.join("/root","//bhavik","index.html"))
console.log(path.join("root","bhavik","../index.html"))
console.log(path.join(__dirname,"index.html"))

//path.resolve
console.log(path.resolve("root","bhavik","index.html"))
console.log(path.resolve("/root","bhavik","index.html"))
console.log(path.resolve("/root","//bhavik","index.html"))
console.log(path.resolve("root","bhavik","../index.html")) 
console.log(path.resolve(__dirname,"index.html"))

const buffer = new Buffer.from("bhavik")
console.log(buffer.toJSON())
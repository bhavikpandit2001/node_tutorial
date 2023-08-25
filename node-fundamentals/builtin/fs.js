// const fs = require("node:fs")
const fsPromise = require("node:fs/promises")

// console.log("first")

// //reading file syncronously
// const fileContent = fs.readFileSync("./file.txt", "utf-8")
// console.log(fileContent)
// console.log("second")

// //reading file Asyncronously
// fs.readFile("./file.txt", "utf-8", (error, data) => {
//     if (error) {
//         console.log(error)
//     } else {
//         console.log(data)
//     }
// })
// console.log("third")

// fs.writeFileSync("./greet.txt", "thats batman")
// fs.writeFile("./greet.txt", "hello bhavik", (error, data) => {
//     if (error) {
//         console.log(error)
//     } else {
//         console.log(data)
//     }
// })

// fsPromise.readFile("file.txt", "utf-8")
//     .then(data => console.log(data))
//     .catch(error => console.log(error))

async function readFile (){
    try {
        const data = await fsPromise.readFile("file.txt", "utf-8")
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}

readFile()
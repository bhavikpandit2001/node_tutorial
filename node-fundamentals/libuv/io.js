// const fs = require("fs")

// fs.readFile(__filename, () => {
//     console.log("this is read file 1")
//     setImmediate(() => {
//         console.log("setImmediate 1")
//     })

//     process.nextTick(() => {
//         console.log("this is inner process.nextTick method 1")
//     })

//     Promise.resolve().then(() => {
//         console.log("this is inner promise.resolve.then calback 1")
//     })
// })

// process.nextTick(() => {
//     console.log("this is process.nextTick method 1")
// })

// Promise.resolve().then(() => {
//     console.log("this is promise.resolve.then calback 1")
// })
// setTimeout(() => {
//     console.log("timeout 1")
// }, 0) 

setImmediate(() => {
    console.log("setImmediate 1")
})
setImmediate(() => {
    console.log("setImmediate 2")
    process.nextTick(() => {
        console.log("this is process.nextTick method 1")
    })
    
    Promise.resolve().then(() => {
        console.log("this is promise.resolve.then calback 1")
    })
})
setImmediate(() => {
    console.log("setImmediate 3")
})
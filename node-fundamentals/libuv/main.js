// console.log("console 1")

// process.nextTick(() => {
//     console.log("this is process.nextTick method 1")
// })
// console.log("console 2")

// Promise.resolve().then(() => {
//     console.log("this is promise.resolve.then calback")
// })
// process.nextTick(() => {
//         console.log("this is process.nextTick method 1")
// //     })
// setTimeout(() => {
//     console.log("timeout 1")
// },0)
// setTimeout(() => {
//     console.log("timeout 2")
//     process.nextTick(() => {
//         console.log("this is process.nextTick method INSIDE TIMEOUT ")
//     })
// },0)
// setTimeout(() => {
//     console.log("timeout 3")
// },0)

// process.nextTick(() => {
//     console.log("this is process.nextTick method 1")
// })
// process.nextTick(() => {
//     console.log("this is process.nextTick method 2")
//     process.nextTick(() => {
//         console.log("this is process.nextTick method inside next Tick 2")
//     })
// })
// process.nextTick(() => {
//     console.log("this is process.nextTick method 3")
// })

// Promise.resolve().then(() => {
//     console.log("this is promise.resolve.then calback 1")
// })
// Promise.resolve().then(() => {
//     console.log("this is promise.resolve.then calback 2")
//     Promise.resolve().then(() => {
//         console.log("this is promise.resolve.then calback inside promise.resolve 2")
//     })
// })
// Promise.resolve().then(() => {
//     console.log("this is promise.resolve.then calback 3")
// })
setTimeout(() => {
    console.log("timeout 1")
},1000) 
setTimeout(() => {
    console.log("timeout 2")
},500) 
setTimeout(() => {
    console.log("timeout 3")
},0) 
// const eventEmitter = require("node:events")
// const { emit } = require("node:process")

// const emitter = new eventEmitter()

// emitter.on("order-pizza", (size, topping) => {
//     console.log(`order recieved backing a ${size} pizza with ${topping}`)
// })
// emitter.on("order-pizza", (size) => {
// if(size === "large"){
//     console.log(`please add complimentory drink with this order`)
// }
// })

// console.log("systum")

// emitter.emit("order-pizza", "large", "mushroom")

const PizzaShop = require("./PizzaShop")
const Drinks = require("./drinks")

const pizzaShop = new PizzaShop
const drinkMachine = new Drinks

pizzaShop.on("order",(size, topping) => {
    console.log(`pizza ordered of ${size} with ${topping}`)
    drinkMachine.ServeDrinks(size)
})

pizzaShop.order("large","mushrooms")
pizzaShop.DisplayOrder()
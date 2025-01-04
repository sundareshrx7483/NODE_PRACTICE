const PizzaShop = require("./Pizza-shop.js")
const drinkMachine = require("./drinkMachine.js")

const pizzaShop = new PizzaShop()
const drink=new drinkMachine()

pizzaShop.on("order", (size,topping) => {
    console.log(`Order Received! Baking pizza as ${size} with ${topping}`);
    drink.serveDrink(size)
})


pizzaShop.order("large", "mushroom")
pizzaShop.display()

// const EventEmitter = require("node:events")

// const Emitter = new EventEmitter();

// Emitter.on("order-pizza", (size,toppings) => {
//     console.log(`Order Received! Baking pizza as ${size} with ${toppings}`)
// })



// console.log("I will First Execute untill the event emits")


// Emitter.emit("order-pizza","large","mushroom")
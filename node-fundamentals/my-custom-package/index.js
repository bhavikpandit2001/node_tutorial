const upperCase = require("upper-case").upperCase;
const greet = (name) => {
    console.log(upperCase(`hello ${name}`))
}

greet("bhavik")
module.exports = greet;
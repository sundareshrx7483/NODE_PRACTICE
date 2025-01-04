const SuperHero = require('./SuperHero.js')
const Batman = new SuperHero('Batman')
console.log(Batman.getName()) 
Batman.setName('Batman 2')
console.log(Batman.getName())

const superman = new SuperHero('Superman')
console.log(superman.getName())
superman.setName('Superman 2')
console.log(superman.getName())

const Heman = new SuperHero("heman")
console.log(Heman.getName());
Heman.setName("HEMAN")
console.log(Heman.getName());




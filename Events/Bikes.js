const EventEmitter = require('events'); 
class Bikes extends EventEmitter {
    constructor() {
        super();
        this.bikes = [];
    }

    addBike(bike) {
        this.bikes.push(bike);
        this.emit('newBike', bike);
    }

    getBikes() {
        return this.bikes;
    }

    removeBike(bike) {
        this.bikes = this.bikes.pop(bike);
        this.emit('bikeRemoved', bike);
    }

    getBike(bike) {
        return this.bikes.find(b => b === bike);
    }
}


module.exports = Bikes;
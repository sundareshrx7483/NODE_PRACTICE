const Bikes = require('./Bikes');

const bikes = new Bikes();
bikes.on('newBike', (bike) => {
    console.log(`New bike added: ${bike}`);
})

bikes.on('bikeRemoved', (bike) => {
    console.log(`Bike removed: ${bike}`);
})

bikes.addBike('RX100');
bikes.getBikes();
bikes.removeBike('RX100');
bikes.getBikes();
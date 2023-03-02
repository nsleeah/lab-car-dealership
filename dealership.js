const Dealership = function(name, maxNumberOfCars, carsInStock){
    this.name = name;
    this.maxNumberOfCars = maxNumberOfCars;
    this.carsInStock = carsInStock = []; //Every Dealership Starts With Empty Array.
};

//Methods
//Counts the number of cars in stock.
Dealership.prototype.carsInStock = function () {
    return this.carsInStock.length;
}

//Adds a car to the stock
Dealership.prototype.addCar = function (car) {
    if (this.carStock.length < this.maxCars) {
      this.carStock.push(car);
    }
};

//Return an array containing each car's manufacturer
Dealership.prototype.allManufacturers = function () {
    return this.carStock.map((car) => {
      return car.manufacturer;
    });
  };

  //Find all the cars from a given manufacturer
  Dealership.prototype.findCarsFromManufacturer = function (manufacturer) {
    return this.carStock.filter((car) => car.manufacturer === manufacturer);
  };

  //Find the total value of all the cars in stock
  Dealership.prototype.totalCarValue = function () {
    return this.carStock.reduce((reducer, car) => reducer + car.price, 0);
  };


// Enumeration..
//Map, Reduce and Filter..


module.exports = {Dealership};

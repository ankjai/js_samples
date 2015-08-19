var Vehicle = function() {
    // body...
    console.log("Vehicle");
}

/**
 * Car class can use prototype of Vehicle class
 */
var Car = function(loc) {
    // body...
    var obj = Object.create(Vehicle.prototype);
    obj.loc = loc;
    return obj;
}

Vehicle.prototype.move = function() {
    // body...
    this.loc++;
}

/**
 * Train can use prototype of Vehicle class
 */
var Train = function(loc) {
    // body...
    var obj = Object.create(Vehicle.prototype);
    obj.loc = loc;
    return obj;
}

// run
var amy = new Car(2);
amy.move();

var ben = new Train(4);
ben.move();

console.log("amy loc:" + amy.loc);
console.log("ben loc:" + ben.loc);

// object instanceof constructor
console.log("amy instanceof Car:" + (amy instanceof Car));
console.log("amy instanceof Vehicle:" + (amy instanceof Vehicle));
console.log("Car instanceof Vehicle:" + (Car instanceof Vehicle));

// the instanceof test returns true
// to what ever constructor the following statement returns
console.log("amy.prototype.constructor:" + amy.constructor);

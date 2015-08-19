var Vehicle = function() {
    // body...
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

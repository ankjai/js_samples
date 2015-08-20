var Car = function(loc) {
    // body...
    // in pseudoclassical patterns the Object.create()
    // and return statements are included by default.
    // also, instead of using obj var we will be replacing them w/ 
    // **this**
    // ** this = Object.create(Car.prototype); **
    this.loc = loc;
    // ** return this; **
}

Car.prototype.move = function() {
    // body...
    this.loc++;
}

// run
var amy = new Car(2);
amy.move();

var ben = new Car(4);
ben.move();

console.log("amy loc:" + amy.loc);
console.log("ben loc:" + ben.loc);

/**
 * in our earlier js examples I have used new Car()
 * but there was no need of using keyword "new"
 *
 * I could have simply written statements as:
 * var amy = Car(2);
 */

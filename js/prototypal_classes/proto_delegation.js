var Car = function(loc) {
    // body...
    // .extend() copies all prop
    // but Object.create() delegate to that
    // shared prototype object (Car.methods)
    var obj = Object.create(Car.methods);
    obj.loc = loc;
    return obj;
};

// prototype object
Car.methods = {
    move: function() {
        // body...
        this.loc++;
    },
    method1: function() {
        // body...
        console.log("accessing obj's loc thru method1: " + this.loc);
    }
};

// run
var amy = Car(1);
amy.move();

var ben = Car(4);
ben.move();

// log
console.log("amy loc:" + amy.loc);
console.log("ben loc:" + ben.loc);

amy.method1();
ben.method1();

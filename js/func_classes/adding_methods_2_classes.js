var Car = function(loc) {
    // body...
    var obj = {
        loc: loc
    };
    // thru extend() adding new method to Car class
    // is as easy as adding new prop/func dir to "methods"
    // which is prop of Car class itself.
    $.extend(true, obj, Car.methods);

    return obj;
};

// encapsulate methods by putting Car.
// so its clear that the methods getting
// added in this prop is only for Car class.
Car.methods = {
    move: function() {
        // body...
        this.loc++;
    },
    // 
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

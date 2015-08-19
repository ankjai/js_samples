/**
 * Since prototypal pattern is so common, the language designer
 * decided to add official convention to support this.
 */
var Car = function(loc) {
    // body...
    // changed Car.methods to Car.prototype
    var obj = Object.create(Car.prototype);
    obj.loc = loc;
    return obj;
};

// prototype object
// Car.methods = {
//     move: function() {
//         // body...
//         this.loc++;
//     },
//     method1: function() {
//         // body...
//         console.log("accessing obj's loc thru method1: " + this.loc);
//     }
// };
// 
// changing the above convention to add property
// to Car.methods we now do:
Car.prototype.move = function() {
    // body...
    this.loc++;
}

Car.prototype.method1 = function() {
    // body...
    console.log("accessing obj's loc thru method1: " + this.loc);
}

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

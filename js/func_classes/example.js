/**
 * Car class builds the object that its going to augment.
 *
 * class have different name - starts w/ capital letter "Car"
 * and should be a noun.
 *
 * functions that produce these fleets of similar objects are
 * called "Constructor Functions"
 *
 * Constructor is simply a function that we use to produce
 * new instance of that class.
 * 
 * @param {[type]} loc [description]
 */
var Car = function(loc) {
    // body...
    var obj = {
        loc: loc
    };
    obj.move = function() {
        // body...
        obj.loc++;
    }
    return obj;
}

// run
// objects that get return from these invocations
// are called instances of the class.
// this operation is known as instantiating.
var amy = Car(1);
amy.move();

var ben = Car(4);
ben.move();

// log
console.log("amy loc:" + amy.loc);
console.log("ben loc:" + ben.loc);


/**
 * class is a contruct that is capable of building similar objects.
 */
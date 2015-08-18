/**
 * Functional Class Patterns w/ shared methods.
 * OR
 * Simply Functional Shared Pattern.
 * 
 * I dont understand this concept very well.
 * Why we need to move the move() from constructor and
 * create a global var move.
 * As per instructions, this will not create multiple move objects
 * instead one move function object is shared across all Car objects to
 * save memory.
 */
var Car = function(loc) {
    // body...
    var obj = {
        loc: loc
    };
    // moved move() outside constructor
    obj.move = move;
    return obj;
}

var move = function() {
    // body...
    this.loc++;
}

// run
var amy = Car(1);
// as per above logic, why this move()
// is not creating a new move obj?
amy.move();

var ben = Car(4);
ben.move();

// log
console.log("amy loc:" + amy.loc);
console.log("ben loc:" + ben.loc);

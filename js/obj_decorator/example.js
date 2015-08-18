// decorator pattern
var carlike = function(obj, loc) {
    // body...
    obj.loc = loc;
    obj.move = function() {
        // body...
        obj.loc++;
    }
    return obj;
}

// run
var amy = carlike({}, 1);
amy.move();

var ben = carlike({}, 5);
ben.move();

// log
console.log("amy loc:" + amy.loc);
console.log("ben loc:" + ben.loc);

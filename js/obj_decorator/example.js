/**
 * carlike is a decorator as it accepts the
 * object its going to augment.
 * @param  {empty object} obj [description]
 * @param  {int} loc [description]
 * @return {augmented obj}     [description]
 */
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


/**
 * The difference between the decorator and a class is
 * decorator accepts the object it is going to augment whereas
 * class builds the object that it is later going to augment.
 */
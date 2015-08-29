// super class
var Vehicle = function(loc) {
    // body...
    this.loc = loc;
}

Vehicle.prototype.move = function() {
    // body...
    this.loc++;
}

// sub classes
var Van = function(loc) {
    // body...
    // making Van a subclass of Vehicle
    Vehicle.call(this, loc);
}
Van.prototype = Object.create(Vehicle.prototype);
Van.prototype.constructor = Van;
Van.prototype.grab = function() {
    // body...
    console.log("grabbed");
}

var Cop = function(loc) {
    // body...
    // making Cop a subclass of Vehicle
    Vehicle.call(this, loc);
    this.help = function() {
        // body...
        console.log("helped");
    }
}
Cop.prototype = Object.create(Vehicle.prototype);


// run
var goon = new Van(2);
goon.move();
console.log("goon loc:" + goon.loc);
goon.grab();
console.log("goon constructor: "+goon.constructor);

var police = new Cop(5);
police.move();
console.log("police loc:" + police.loc);
police.help();
console.log("police constructor: "+police.constructor);


// will throw error as help is obj of Cop
// and not Van
// goon.help();

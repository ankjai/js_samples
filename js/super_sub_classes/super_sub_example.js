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
    var obj = new Vehicle(loc);
    obj.grab = function() {
        // body...
        console.log("grabbed");
    }
    return obj;
}

var Cop = function(loc) {
    // body...
    // making Cop a subclass of Vehicle
    var obj = new Vehicle(loc);
    obj.help = function() {
        // body...
        console.log("helped");
    }
    return obj;
}


// run
var goon = Van(2);
goon.move();
console.log("goon loc:" + goon.loc);
goon.grab();

var police = Cop(5);
police.move();
console.log("police loc:" + police.loc);
police.help();

// will throw error as help is obj of Cop
// and not Van
goon.help();

var propOne = {
    name: "propOneName"
};
var propTwo = {
    name: "someName",
    log: function(arg) {
        // body...
        console.log("this obj:" + this.name);
        console.log("arg obj:" + arg.name);
    }
};
var propThree = {
    name: "propThreeName"
};

var temp1 = propOne;
temp1.name = "temp1";

var temp2 = propTwo;
temp2.name = "temp2";

// "this" is bound to the object found to the left of the dot
// where the containing function is called.
temp2.log(temp1);

var temp3 = propThree;
temp3.name = "temp3";

// you can use .call() to explicitly pass
// the first argument to be bound as "this"
temp2.log.call(temp3, temp1);

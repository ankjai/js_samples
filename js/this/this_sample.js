var obj = {
    name: "someName",
    /**
     * "this" is bound to the object found to the left of the dot
     * where the containing function is called.
     */
    log: function() {
        // body...
        console.log(this.name);
    }
};

var temp1 = obj;
temp1.name = "temp1";
temp1.log();

var temp2 = obj;
temp2.name = "temp2";
temp2.log();

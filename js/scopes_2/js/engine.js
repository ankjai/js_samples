/**
 * Wrapping everything in a function which is then immediately invoked 
 * means all the variables within that function are bound to the local scope.
 */
var Engine = (function(global) {
    var someText = "someText",
        ctx = "ctxText";

    console.log("not invoking Engine obj.")

    global.ctx = ctx;
})(this);

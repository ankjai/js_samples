// .extend( target [, object1 ] [, objectN ] ) is a helper function
// does not come w/ a language
// 
// needs jQuery framework support
// 
// execute this code in browser by running index.html

var objA = {
    a: 1
};

var objB = {
    b: 2
};

console.log("a:" + objB.a);
console.log("b:" + objB.b);

objB = $.extend(true, objB, objA);

console.log("a:" + objB.a);
console.log("b:" + objB.b);

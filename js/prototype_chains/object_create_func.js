var objA = {
    a: "a"
};

var objB = {
    b: "b"
};

// undefined
console.log("a:" + objB.a);
console.log("b:" + objB.b);

objB = Object.create(objA);
console.log("a:" + objB.a);
// undefined as Object.create() produces new object
// that delegates failed lookups to the fallback
console.log("b:" + objB.b);

// assign prop to objB after Object.create()
objB.b = "bb";
console.log("a:" + objB.a);
console.log("b:" + objB.b);

objA.a = "aa";
// "aa" as Object.create() is NOT ONE TIME
// and keeps ongoing lookup-time delegation
console.log("a:" + objB.a);
console.log("b:" + objB.b);

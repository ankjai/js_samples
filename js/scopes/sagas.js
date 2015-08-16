/**
 * @param  {integer} min inclusive
 * @param  {integer} max exclusive
 * @return {integer} return random integer between min and max
 */
var getRandomInt = function(min, max) {
    // body...
    return Math.floor(Math.random() * (max - min)) + min;
}

/**
 * @return {String} returns a hero name
 *
 * global scope
 */
function aHero() {
    // body...
    var heroNames = ["Achilles", "Alexander", "Bahadur", "Caesar", "Gabriel"];
    var indexNo = getRandomInt(0, 5);
    // console.log("aHero index: " + indexNo);
    return heroNames[indexNo];
}

// global scope:
// The global scope is shared between (.js) files.
var hero = aHero();

// newSaga scope
var newSaga = function() {
    // body...
    function aVerb() {
        // body...
        var verbs = ["adopt", "annoy", "bend", "bounce", "cut", "feed"];
        var indexNo = getRandomInt(0, 6);
        // console.log("aVerb index: " + indexNo);
        return verbs[indexNo];
    }
    // if no var is written; the scope is global
    // bad practice
    var verb = aVerb();

    // saga scope
    var saga = function() {
        // body...
        function aThing() {
            // body...
            var things = ["plastic fork", "remote", "sand paper", "table", "hair brush", "paper"];
            var indexNo = getRandomInt(0, 6);
            // console.log("aThing index: " + indexNo);
            return things[indexNo];
        }

        var thing = aThing();

        console.log(hero + " " + verb + " " + thing);
    }

    saga();
    saga();
}

newSaga();
newSaga();
// this wont work as verb and thing are out of scope.
// console.log(hero + " " + verb + " " + thing);

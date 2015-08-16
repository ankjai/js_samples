/**
 * @param  {integer} min inclusive
 * @param  {integer} max exclusive
 * @return {integer} return random integer between min and max
 */
var getRandomInt = function(min, max) {
    // body...
    return Math.floor(Math.random() * (max - min)) + min;
}

// global array var
var sagas = [];

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
    sagas.push(function() {
        // body...
        function aThing() {
            // body...
            var things = ["plastic fork", "remote", "sand paper", "table", "hair brush", "pizza"];
            var indexNo = getRandomInt(0, 6);
            // console.log("aThing index: " + indexNo);
            return things[indexNo];
        }

        var thing = aThing();

        console.log(hero + " " + verb + " " + thing);
    });
};

newSaga();
sagas[0]();
sagas[0]();
newSaga();
sagas[0]();
sagas[1]();
sagas[0]();
// this will give error as we have not pushed 3rd sagas obj
// in sagas array by running newSaga()
// sagas[2]();

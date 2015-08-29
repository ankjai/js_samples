var Enemy = function() {
    console.log("Enemy function");
}

Enemy.prototype.render = function() {
    console.log("Enemy.render()");
    console.log("ctx: " + ctx);
}

var enOne = new Enemy();
enOne.render();

// var engine = new Engine();
// var ctx = Engine().ctx;

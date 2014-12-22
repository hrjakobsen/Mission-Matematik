
// A cross-browser requestAnimationFrame
// See https://hacks.mozilla.org/2011/08/animating-with-javascript-from-setinterval-to-requestanimationframe/
var requestAnimFrame = (function(){
    return window.requestAnimationFrame       ||
        window.webkitRequestAnimationFrame    ||
        window.mozRequestAnimationFrame       ||
        window.oRequestAnimationFrame         ||
        window.msRequestAnimationFrame        ||
        function(callback){
            window.setTimeout(callback, 1000 / 60);
        };
})();

// Create the canvas
var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
canvas.width = 768;
canvas.height = 576;
document.body.appendChild(canvas);

// The main game loop
var lastTime;
function main() {
    var now = Date.now();
    var dt = (now - lastTime) / 1000.0;

    update(dt);
    render();

    lastTime = now;
    requestAnimFrame(main);
};

function init() {
    /*document.getElementById('play-again').addEventListener('click', function() {
        reset();
    });*/

    reset();
    lastTime = Date.now();
    main();
}

/*resources.load([
    'img/sprites.png',
    'img/terrain.png'
]);
resources.onReady(init);*/

/*var player = {
    pos: [0, 0],
    sprite: new Sprite('img/sprites.png', [0, 0], [39, 39], 16, [0, 1])iuhijniuhuihb
};*/

// Update game objects
function update(dt) {
    gameTime += dt;

    handleInput(dt);

    updateEntities(dt);

    checkCollisions();
};

function handleInput(dt) {
    if(input.isDown('DOWN') || input.isDown('s')) {
        //Down
    }

    if(input.isDown('UP') || input.isDown('w')) {
        //Up
    }

    if(input.isDown('LEFT') || input.isDown('a')) {
        //Left
    }

    if(input.isDown('RIGHT') || input.isDown('d')) {
        //Right
    }

    if(input.isDown('SPACE') &&
       //Space
    }
}

function updateEntities(dt) {
    //player.sprite.update(dt);
}

function checkCollisions() {
    checkPlayerBounds();
}

function checkPlayerBounds() {
    // Check bounds
}

// Draw everything
function render() {
    ctx.fillRect(0, 0, canvas.width, canvas.height);
};

// Reset game to original state
function reset() {
   //Reset
};

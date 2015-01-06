
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

resources.load([
    'img/Man.png',
    'img/terrain.png'
]);
resources.onReady(init);

// Player variable
var PlayerSpeed = 75; // Pixels per second
var player = {
    sprite: new Sprite(.2, 'img/Man.png', [0, 0], [252, 592], 0),
    Physics: new Particle([0, 0], [252 * .2, 592 * .2], [0, 0], [0, -982]) // Pos, Size, Val, Acc
};

// The Level
var Level = {
	BoxCount: 5,
	Boxes: [
		{
			sprite: new Sprite(5, 'img/terrain.png', [0, 0], [20, 20], 0),
			Physics: new Box([0, 500], [100, 100])
		}, {
			sprite: new Sprite(5, 'img/terrain.png', [0, 0], [20, 20], 0),
			Physics: new Box([100, 500], [100, 100])
		}, {
			sprite: new Sprite(5, 'img/terrain.png', [0, 0], [20, 20], 0),
			Physics: new Box([200, 500], [100, 100])
		}, {
			sprite: new Sprite(5, 'img/terrain.png', [0, 0], [20, 20], 0),
			Physics: new Box([300, 500], [100, 100])
		}, {
			sprite: new Sprite(5, 'img/terrain.png', [0, 0], [20, 20], 0),
			Physics: new Box([400, 500], [100, 100])
		}
	]
};

// The main game loop
var lastTime;
var gameTime = 0;
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

// Update game objects
function update(dt) {
    gameTime += dt;

    handleInput(dt);

    updateEntities(dt);

    updatePhysics(dt);
};

function handleInput(dt) {
    if(input.isDown('DOWN') || input.isDown('s')) {
        //Down
        //player.pos[1] += dt * PlayerSpeed;
    }

    if(input.isDown('UP') || input.isDown('w')) {
        //Up
        //player.pos[1] -= dt * PlayerSpeed;
    }

    if(input.isDown('LEFT') || input.isDown('a')) {
        //Left
        //player.pos[0] -= dt * PlayerSpeed;
    }

    if(input.isDown('RIGHT') || input.isDown('d')) {
        //Right
        //player.pos[0] += dt * PlayerSpeed;
    }

    if(input.isDown('SPACE')) {
       //Space
    }
}

function updateEntities(dt) {
    //player.sprite.update(dt);
}

function updatePhysics(dt) {
    // Player update
    for (var i = 2; i < 129; i *= 2) {
    	var PlayerCopy = player;
    	player.Physics.update(dt / i);
    	var intersection = false;
	    for (var ii = 0; ii < Level.BoxCount; ii ++) {
	    	if (Level.Boxes[ii].Physics.checkForCollisionWithBox(player.Physics)) {
		    	intersection = true;
	    	}
	    }
	    if (intersection) {
		    player = PlayerCopy;
		    player.Physics.vel[1] = 0;
	    }
    }
}

// Draw everything
function render() {
	ctx.fillStyle="red";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    renderEntity(player);
    
    for (var i = 0; i < Level.BoxCount; i ++) {
	    renderEntity(Level.Boxes[i]);
    }
};

function renderEntity(entity) {
    ctx.save();
    ctx.translate(entity.Physics.pos[0], entity.Physics.pos[1]);
    entity.sprite.render(ctx);
    ctx.restore();
}

// Reset game to original state
function reset() {
   //Reset
};

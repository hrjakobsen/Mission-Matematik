
(function() {
    function Particle(pos, size, vel, acc, mass) {
        this.pos = pos;
        this.size = size;
        this.vel = vel
        this.acc = acc;
        this.mass = mass;
    };

    Particle.prototype = {
        update: function(dt) {
            this.pos[0] += this.vel[0] * dt;
            this.pos[1] -= this.vel[1] * dt;
            
            this.vel[0] += this.acc[0] * dt;
            this.vel[1] += this.acc[1] * dt;
        },
        
        EncounteredFriction: function(dt, friction) {
	        this.vel[0] *= (1 - friction * dt);
            this.vel[1] *= (1 - friction * dt);
            
            if (Math.abs(this.vel[0]) < .1) {this.vel[0] = 0;}
            if (Math.abs(this.vel[1]) < .1) {this.vel[1] = 0;}
        },
        
        AddForce: function(Force) {
	        this.vel[0] += Force[0];
            this.vel[1] += Force[1];
        }
    };

    window.Particle = Particle;
})();


(function() {
    function Box(pos, size, friction) {
        this.pos = pos;
        this.size = size;
        this.friction = friction;
    };

    Box.prototype = {
    	checkForCollisionWithBox: function(box) {
    		 if (this.pos[0] + this.size[0] < box.pos[0]) return false;
			 if (this.pos[0] > box.pos[0] + box.size[0]) return false;
			 if (this.pos[1] + this.size[1] < box.pos[1]) return false;
			 if (this.pos[1] > box.pos[1] + box.size[1]) return false;
			 return true; // Boxes overlap
        }
    };

    window.Box = Box;
})();


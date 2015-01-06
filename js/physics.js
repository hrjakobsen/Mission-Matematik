
(function() {
    function Particle(pos, size, vel, acc) {
        this.pos = pos;
        this.size = size;
        this.vel = vel
        this.acc = acc;
    };

    Particle.prototype = {
        update: function(dt) {
            this.pos[0] += this.vel[0] * dt;
            this.pos[1] -= this.vel[1] * dt;
            
            this.vel[0] += this.acc[0] * dt;
            this.vel[1] += this.acc[1] * dt;
        }
    };

    window.Particle = Particle;
})();


(function() {
    function Box(pos, size) {
        this.pos = pos;
        this.size = size;
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


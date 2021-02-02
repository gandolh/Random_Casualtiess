class Particle {
    constructor() {
        this.pos = createVector(random(width), random(height))
        this.vel = createVector(0, 0);
        this.acc = createVector(0, 0);
        this.maxSpeed = 4;
        this.prevPos = this.pos.copy();
    }
    update() {
        this.vel.add(this.acc);
        this.vel.limit(this.maxSpeed);
        this.pos.add(this.vel);
        this.acc.mult(0);
    }
    follow(vectors) {
        let x = floor(this.pos.x / scl);
        let y = floor(this.pos.y / scl);
        let index = x + y * cols;
        let force = vectors[index];
        this.applyForce(force);
    }
    applyForce(force) {
        this.acc.add(force);
    }
    show() {
        stroke(255, 5);
        strokeWeight(1);
        line(this.pos.x, this.pos.y, this.prevPos.x, this.prevPos.y);
        this.updatePrevPos();
        //point(this.pos.x,this.pos.y);
    }
    updatePrevPos() {
    	this.prevPos.x=this.pos.x; 
    	this.prevPos.y=this.pos.y; 
    }
    edges() {
        if (this.pos.x > width) {
            this.pos.x = 0;
			this.updatePrevPos();
        } else if (this.pos.x < 0) {
            this.pos.x = width;
			this.updatePrevPos();
        } else if (this.pos.y > height) {
            this.pos.y = 0;
			this.updatePrevPos();
        } else if (this.pos.y < 0) {
            this.pos.y = height;
           this.updatePrevPos();	 
        }
    }
}
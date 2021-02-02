class Boid {
    constructor(length,angle,colore) {
        this.colore=colore;
        this.position = createVector(length*cos(angle),length*sin(angle));
        this.velocity = this.position.copy();
        this.velocity.normalize();

        this.acceleration = createVector();
    }
    update(){
    	this.position.add(this.velocity);
    	this.velocity.add(this.acceleration);
    	this.acceleration.mult(0);
    }
    show() {
        strokeWeight(30);
        stroke(this.colore);
        point(this.position.x, this.position.y);
    }
}
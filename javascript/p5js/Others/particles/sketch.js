let ag = [];

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(51);
    for (let i = 0; i <= 200; i++) ag.push(new agent());
    	 background(51);
}

function draw() {
   background(51);
    strokeWeight(4)
    stroke(200,20)
    for (let a of ag) {

        a.go(ag);
    }
}
class agent {
    constructor() {
        this.loc = createVector(random(width), random(height));
        this.vel = p5.Vector.random2D();
        this.vel.setMag(random(1, 3));
        this.acc = createVector(0, 0);
        this.maxForce = 0.2;
        this.maxSpeed = 4;
    }
    update() {
        this.loc.add(this.vel);
        this.vel.add(this.acc);
        this.acc.mult(0);
    }
    edges() {
        if (this.loc.x > width) this.loc.x = 0;
        else if (this.loc.x < 0) this.loc.x = width;
        else if (this.loc.y > height) this.loc.y = 0;
        else if (this.loc.y < 0) this.loc.y = height;
    }
    collision(arr) {
        for (let a of arr) {
            let d = dist(this.loc.x, this.loc.y, a.loc.x, a.loc.y);
            let angle = this.loc.angleBetween(a.loc);
            if (a != this && d < 100 && angle != 0 && angle != PI) {
                a.vel.rotate(random(-0.009, 0.009));
                this.vel.rotate(random(-0.009, 0.009));
                line(a.loc.x,a.loc.y,this.loc.x,this.loc.y)
            }
        }

    }

    show() {
        push();
        translate(this.loc.x, this.loc.y);
        rotate(this.vel.heading());
        line(0, 0, 100, 0);
        pop();
    }
    go(arr) {
        this.collision(arr);
        this.update();
        this.edges();
        //this.show();
    }
}
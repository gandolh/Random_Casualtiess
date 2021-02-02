let ag = [];
let xoff=0,xoffPass=0.01;
let colors;
let prev=0,act=1
function setup() {
    createCanvas(windowWidth, windowHeight);
    background(51);
    for (let i = 0; i <= 150; i++) ag.push(new agent());
   colors=[color('#B27300'),color('#12FFBE'),color('#FFC00F'),color('#C700CA'),color('#AE00B0')];
}

function draw() {
   // background(51,;);
    strokeWeight(4);
    let c=lerpColor(colors[prev],colors[act],xoff);
    c.setAlpha(5);
    stroke(c);
    if(xoff>1){
    	xoff=0;prev++;act++;


    }
    xoff+=xoffPass;
    for (let a of ag) {

        a.go(ag);
    }
}
class agent {
    constructor() {
        let n=3;
        this.loc = createVector(random(width/n,(n-1)*width/n), random(width/n,(n-1)*width/n));
        // this.loc = createVector(random(width),random(height));
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
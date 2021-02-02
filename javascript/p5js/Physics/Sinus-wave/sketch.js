let a = 0,starta=0;
  aVelocity = 0.01;
let penduls = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  let per=10; //perioada 
  for (let i = 0; i < width/per; i++) {
    penduls[i] = new Pendul(i*per,map(sin(a),-1,1,0,height),starta);
  starta+=0.24;
  }
}

function draw() {
  background(0);
  translate(0,height/2);  
  for (let p of penduls) {
    p.move();
    p.show();
  }

}
class Pendul {
  constructor(x,y,a) {
    this.x = x;
    this.y = y;
    this.r = 50;  //radius of circle
    this.ampy = height/12; //amplitude =  maximum height
    this.a = a;
    this.aVelocity = 0.01;
  }
  move() {
    this.y = this.ampy * sin(this.a);
    this.a += this.aVelocity;
  }
  show() {
    ellipse(this.x, this.y, this.r, this.r);
  }
}
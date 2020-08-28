let princDot;
let dots = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  fill(255);
  princDot = new Dot();
  for (let i = 1; i <= 24; i++)
   dots.push(new Dot2(i * PI / 24,i*10));
  //dots.push(new Dot2(PI / 2));
  //dots.push(new Dot2(0));
}

function draw() {

  background(0);
colorMode(HSB);

  translate(width / 2, height / 2);
  noFill();
  stroke(170,255,255);
  strokeWeight(2);
  ellipse(0, 0, 400);
  fill(255);
  princDot.update();
  princDot.show();
    for (let d of dots){
  	push();
  	    rotate(d.aLine);
    	    stroke(170,120,50,20);
          line(0,0,198,0);
   	  line(0,0,-198,0);	
   	  pop();
  }
  for (let d of dots) d.show();


}
class Dot {
  constructor() {
    this.a = 0;
    this.aVel = 0.01;
  }
  update() {
    this.a += this.aVel;
  }
  show() {

    let x = 200 * cos(this.a);
    let y = 200 * sin(this.a);
    ellipse(x, y, 30)
  }
}
class Dot2 {
  constructor(aLine,colore) {
    this.aLine = aLine;
    this.colore=colore%360;

  }
  show() {
    push();
    let angle = this.aLine - princDot.a;
    rotate(this.aLine);
    let x = 200 * cos(angle);

   	fill(this.colore,80,120);
    noStroke();
    ellipse(x, 0, 15);

    pop();
  }

}
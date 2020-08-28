let constant,factor=0.01;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  rectMode(CENTER);
  constant = 4;
}

function draw() {
  background(0);
  noFill();
  translate(0,-210,0);
  stroke(255);

  push();
  translate(0, -60, 120);
  titirez(8);
  pop();
    push();
  translate(-125, 0, 120);
  titirez(3);
  pop();
      push();
  translate(125, 0, 120);
  titirez(4);
  pop();
  rotateY(millis() / 1000);
  push();
  stroke(255,190);
    translate(350, 0,0);
 	 titirez(5);
 	 pop();	
}

function polygon(x, y, radius, npoints) {
  let angle = TWO_PI / npoints;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius;
    let sy = y + sin(a) * radius;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}
function titirez(sides){
    rotateX(PI / 2.5);
  rotateZ(millis() / 1000);
  for (let i = 1; i <= 10; i+=0.75) {
    translate(0, 0, -20);
    polygon(0, 0, i * constant, sides);
  }
    for (let i = 10; i >=1; i-=0.75) {
    translate(0, 0, -20);
    polygon(0, 0, i * constant, sides);
  }
  if(constant>6 || constant<4)factor*=-1;
    constant += factor;
}
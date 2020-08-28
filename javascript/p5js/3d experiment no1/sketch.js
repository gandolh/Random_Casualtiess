let constant;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  rectMode(CENTER);
  constant = 12;
}

function draw() {
  background(0);
  noFill();

  stroke(255);
  rotateX(PI / 3);
  rotateZ(millis() / 1000);

  translate(0, 0, 30);
  for (let i = 1; i <= 10; i++) {
    translate(0, 0, -30);
    polygon(0, 0, i * constant, 8);
  }
  constant += 3;
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
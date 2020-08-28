let circleSquares = [];

function setup() {
  colorMode(HSB);
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i <= width; i += 120)
    for (let j = 0; j <= height; j += 120)
      circleSquares.push(new squareOfCircles(i, j, 60, 0, 60));
}

function draw() {
  background(0);
  noStroke();
 
  for (let c of circleSquares) {
    c.update();
    c.display();
  }
}
class squareOfCircles {
  constructor(xSq, ySq, r, a, radius) {
    this.radius = radius;
    this.squares = [];
    this.r = r;
    for (let i = 0; i <= 3; i++) {
      this.x = this.r * cos(PI / 2 * i);
      this.y = this.r * sin(PI / 2 * i);
      this.squares[i] = (new Circ(this.x, this.y));
    }
    this.xSq = xSq;
    this.ySq = ySq;
    this.a = 0;
    this.aVel = 0.01;
    this.rVel = 0.6;
    
  }
  update() {
    this.a += this.aVel;
    if (this.r > 70 || this.r < 25) this.rVel *= (-1);
    this.r += this.rVel;
    for (let i = 0; i <= 3; i++) {
      this.squares[i].x = this.r * cos(PI / 2 * i);
      this.squares[i].y = this.r * sin(PI / 2 * i);
    }
  }
  display() {
    push();
    translate(this.xSq, this.ySq);
    rotate(this.a);
    for (let c of this.squares){ 
      fill(c.colore);
      ellipse(c.x, c.y, this.radius);
    }

    pop();
  }

}
class Circ {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.colore=color(random(360),60,100);
  }
}
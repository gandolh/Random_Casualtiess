let penduls = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  let as = PI / 2;
  for (let i = 0; i < 15; i++) as -= 0.2, penduls[i] = new Pendulum(as);
}

function draw() {
  background(0);
  translate(width / 2, 0);
  for (let p of penduls) {
    p.update();
    p.show();
  }
}
class Pendulum {
  constructor(a) {
    this.size = 40;
    this.m = 30;
    this.r = height/2;
    this.a = a;
    this.aV = 0;
    this.aA = 0;
  }
  update() {
    let g = 0.001;
    let gravity = this.m * g * this.r / 5000;
    this.aA = -gravity * sin(this.a);

    this.aV += this.aA;
    this.a += this.aV;

  }
  show() {
    let x = sin(this.a) * this.r;
    let y = cos(this.a) * this.r;
    stroke(255);
    line(0, 0, x, y);
    ellipse(x, y, this.size, this.size);
  }
}
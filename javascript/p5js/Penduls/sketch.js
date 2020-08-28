let penduls = [];
let startAngle;

function setup() {
  startAngle = -PI / 2;
  createCanvas(windowWidth, windowHeight);
  let count = 20;
  for (let i = 0; i <= count; i++){
    penduls[i] = new Pendulum(startAngle, height / count * i);
    startAngle+=0.1;
  }
}

function draw() {
  background(0);
  translate(width / 2, 0);
  for (let p of penduls) p.go();
}
class Pendulum {
  constructor(angle, length) {
    this.angle = angle;
    this.length = length;
    this.aVelocity = 0;
    this.aAceleration = 0;
  }
  go() {
    stroke(255);
    let gravity = 0.001;
    this.aAceleration = -gravity * sin(this.angle);
    this.aVelocity += this.aAceleration;
   // this.aVelocity *= 0.99; //pierdere viteza in timp
    this.angle += this.aVelocity;
    let x = sin(this.angle) * this.length;
    let y = cos(this.angle) * this.length;
    line(0, 0, x, y);
    ellipse(x, y, 50, 50);
  }
}
let angle = 0,
  r = 300;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
}

function draw() {
  if (r > 0) {
    translate(width / 2, height / 2);
    for (let i = 0; i <= 20; i++) {
      x = r * cos(angle);
      y = r * sin(angle);
      fill(255);
      ellipse(x, y, 10, 10);
      angle += 0.1;
      r -= 0.1
    }
  }
}
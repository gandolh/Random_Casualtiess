let m, a;

function setup() {
  createCanvas(windowWidth, windowHeight);
  m = new Mover(random(width), random(height));
  a = new Atractor(width / 2, height / 2);
}

function draw() {
  noStroke();
  background(0);
  let fg = a.atract(m);
  m.applyForce(fg);
  m.update();
  m.edges();
  m.display();
  a.display();
}
let movers = [];
let liquid;

function setup() {
  createCanvas(windowWidth, windowHeight);
  liquid = new Liquid(0, height/1.5 , width, height);
  for (let i = 0; i <= 7; i++) movers[i] = new Mover(i * (width / 8) + 50, 50);
}

function draw() {
  background(0);
  liquid.display();
  for (let m of movers) {
    let gravity = createVector(0, 0.1 * m.mass);
    m.applyForce(gravity);
    if (liquid.contains(m)) {
      let drag=liquid.calculateDrag(m);
      m.applyForce(drag);
    }
    m.update();
    m.edges();
    m.display();
  }

}
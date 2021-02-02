class Mover {
  constructor(x, y) {
    this.mass = 1;
    this.location = createVector(x, y);
    this.velocity = createVector(0, 0);
    this.acceleration = createVector(0, 0);

  }
  update() {
    this.velocity.add(this.acceleration);
    // this.velocity.limit(5);
    this.location.add(this.velocity);
    this.acceleration.mult(0);
  }
  edges() {
    if (this.location.x > width) {
      this.location.x = width;
      this.velocity.x *= -1;
    } else if (this.location.x < 0) {
      this.velocity.x *= -1;
      this.location.x = 0;
    }

    if (this.location.y > height) {
      this.velocity.y *= -1;
      this.location.y = height;
    }
  }
  display() {
    fill(195);
    ellipse(this.location.x, this.location.y, this.mass * 20, this.mass * 20);
  }
  applyForce(force) {
    let f = p5.Vector.div(force, this.mass);
    this.acceleration.add(f);
  }
}
class Atractor {
  constructor(x, y) {
    this.location = new p5.Vector(x, y);
    this.g = 0.4;
    this.mass = 20;
  }
  atract(m) {
    let dir = p5.Vector.sub(this.location, m.location);

    let d = dir.mag();
    d = constrain(d, 5, 25);
    dir.normalize();
    let strength = (this.g * m.mass * this.mass) / (d * d);
    dir.mult(strength);
    return dir;
  }
  display() {
    fill(195);
    ellipse(this.location.x, this.location.y, this.mass * 2, this.mass * 2);
  }
}
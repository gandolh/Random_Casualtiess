class Mover {
  constructor(x, y) {
    this.mass = random(1, 4);
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
class Liquid {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.c = 0.1;
  }
  display() {
    fill(255, 20);
    rect(this.x, this.y, this.w, this.h);
  }
  contains(m) {
    return m.location.y > this.y && m.location.y < this.y + this.h
  }
  calculateDrag(m) {
    let speed = m.velocity.mag();
    let dragForce = m.velocity.copy();
    dragForce.normalize();
    dragForce.mult(-speed * speed * this.c);
    return dragForce;
  }
}
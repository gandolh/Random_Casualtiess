class Vehicle {
  constructor(loc, ms, mf) {
    this.acceleration = createVector(0, 0);
    this.velocity = createVector(0,0);
    this.location = loc
    this.r = 3;
    this.maxSpeed = ms || 4;
    this.maxforce = mf || 0.1;
  }
  run() {
    this.update();
    this.borders();
    this.display();
  }
  borders() {
    if (this.location.x < -this.r) this.location.x = width + this.r;
    if (this.location.y < -this.r) this.location.y = height + this.r;
    if (this.location.x > width + this.r) this.location.x = -this.r;
    if (this.location.y > height + this.r) this.location.y = -this.r;
  }
  update() {
    this.velocity.add(this.acceleration);
    this.velocity.limit(this.maxspeed);
    this.location.add(this.velocity);
    this.acceleration.mult(0);
  }
  applyForce(force) {
    this.acceleration.add(force);
  }
  follow(flow) {
    let desired = flow.lookup(this.location);
    desired.normalize();
    desired.mult(this.maxSpeed);
    let steer = p5.Vector.sub(desired, this.velocity);
    steer.limit(this.maxForce);
    this.applyForce(steer);
  }
  display() {
    let theta = this.velocity.heading() + PI / 2;
    fill(175);
    stroke(0);
    push();
    translate(this.location.x, this.location.y);
    rotate(theta);
    beginShape();
    vertex(0, -this.r * 2);
    vertex(-this.r, this.r * 2);
    vertex(this.r, this.r * 2);
    endShape(CLOSE);

    pop();
  }
}
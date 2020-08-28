let ps = [];

function setup() {
  createCanvas(windowWidth, windowHeight);

}

function draw() {
  background(0);
  for (let psi of ps) {
    psi.run();
    psi.addParticle();
  }
}

function mousePressed() {
  ps.push(new particleSystem(mouseX, mouseY));
}
class Particle {
  constructor(x, y) {
    this.location = createVector(x, y);
    this.acceleration = createVector(0, 0.05);
    this.velocity = createVector(random(-1, 1), random(-1, 1));
    this.lifespan = 255;
    this.colorR=255;
    this.colorG=255;
    this.colorB=255;
  }
  getColor(){
  this.colorR=255;this.colorG=255;this.colorB=255;
  }
  update() {
    this.velocity.add(this.acceleration);
    this.location.add(this.velocity);
    this.lifespan -= 2;
  }
  isDead() {
    return this.lifespan <= 0;
  }
  display() {
    this.getColor();
    stroke(this.colorR,this.colorG,this.colorB, this.lifespan);
    strokeWeight(2);
    fill(this.colorR,this.colorG,this.colorB, this.lifespan)
    ellipse(this.location.x, this.location.y, 12, 12);
  }
}
class ParticleR extends Particle{
 getColor(){
  this.colorR=255;this.colorG=120;this.colorB=0;
  }
}
class ParticleG extends Particle{
 getColor(){
  this.colorR=120;this.colorG=255;this.colorB=0;
  }
}
class ParticleB extends Particle{
 getColor(){
  this.colorR=0;this.colorG=129;this.colorB=255;
  }
}
class particleSystem {
  constructor(x, y) {
    this.particles = [];
    this.location = createVector(x, y);
    for (let i = 0; i < 10; i++) this.particles.push(new Particle(this.location.x, this.location.y));

  }
  run() {
    for (let i = this.particles.length - 1; i > 0; i--) {
      this.particles[i].update();
      this.particles[i].display();
      if (this.particles[i].isDead()) {
        this.particles.splice(i, 1);
      }
    }

  }
  addParticle() {
    let t=int(random(1,5));
   if(t==1) this.particles.push(new ParticleR(this.location.x, this.location.y));
    else if(t==2)this.particles.push(new ParticleG(this.location.x, this.location.y));
    else if(t==3)this.particles.push(new ParticleB(this.location.x, this.location.y));
    else this.particles.push(new Particle(this.location.x, this.location.y));

  }
}
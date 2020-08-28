class Flowfield {
  constructor(r) {
    this.resolution = r;
    this.cols = width / this.resolution;
    this.rows = height / this.resolution;
    this.field = this.make2Darray(this.cols);
    this.init();
  }

  make2Darray(n) {
    let array = [];
    for (let i = 0; i < n; i++) {
      array[i] = [];
    }
    return array;
  }
  init() {
    noiseSeed(Math.floor(random(10000)));
    let xoff = 0;
    for (let i = 0; i < this.cols; i++) {
      let yoff = 0;
      for (let j = 0; j < this.rows; j++) {
        let theta = map(noise(xoff, yoff), 0, 1, 0, TWO_PI);
        // let theta = random(PI/4, -PI/4);
        this.field[i][j] = createVector(cos(theta), sin(theta));
        yoff += 0.1;
      }
      xoff+=0.1;
    }

  }
  display() {

    for (let i = 0; i < this.cols; i++)
      for (let j = 0; j < this.rows; j++) {
        this.drawVector(this.field[i][j], i * this.resolution, j * this.resolution, this.resolution - 2)
        //console.log(i,j,this.field[i][j]);
      }
  }
  drawVector(v, x, y, scayl) {
    push();
    translate(x, y);
    stroke(255,80);
    rotate(v.heading());
    let len = v.mag() * scayl;
    line(0, 0, len, 0);

    pop();
  }
  lookup(lookup) {
    let column = Math.floor(constrain(lookup.x / this.resolution, 0, this.cols - 1));
    let row = Math.floor(constrain(lookup.y / this.resolution, 0, this.rows - 1));
     //console.log(lookup.x);
    return this.field[column][row].copy();
  }
}
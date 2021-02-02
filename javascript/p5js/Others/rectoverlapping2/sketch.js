let xoffset = 0,ratio=0.1;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(51);
  stroke(255);
  strokeWeight(1);

  xoffset += ratio;
  for (let x = 100; x < width - 100; x += 10) line(x, 100, x, height - 100);
  push();
  translate(xoffset, 0);
  strokeWeight(1);
  for (let x = 100; x < width - 100; x += 100) {
    line(x, 100, x, height - 100);
    line(x+2, 100, x+2, height - 100);
    line(x+4, 100, x+4, height - 100);
    line(x+6, 100, x+6, height - 100);
  }
  pop();
  if(xoffset>35 || xoffset<0)ratio*=-1;
}
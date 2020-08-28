let xoffset = 0,ratio=0.1;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(51);
  stroke(255);
  strokeWeight(5);

  xoffset += ratio;
  for (let x = 100; x < width - 100; x += 10) line(x, 100, x, height - 100);
  push();
  translate(xoffset, -40);

  for (let x = 100; x < width - 100; x += 10) {
    line(x, 100, x, height - 100);

  }
  pop();
  if(xoffset>35 || xoffset<0)ratio*=-1;
}
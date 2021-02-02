function setup() {
  createCanvas(windowWidth, windowHeight);
  background(51);
  drawCircle(width / 2, height / 2, 400);

}

function draw() {
  
}

function drawCircle(x, y, d) {
  let opac=map(y,0,height,0,155)
  stroke(255,opac);
  noFill();
  if(d<20)ellipse(x, y, d);
  if (d > 10) {
    drawCircle(x+d/2, y, d / 2);
    drawCircle(x-d/2,y,d/2);
    drawCircle(x,y,d/2);
    drawCircle(x,y-d/2,d/2);
    drawCircle(x+d/2,y+d/2,d/2);
    drawCircle(x-d/2,y-d/2,d/2);
    drawCircle(x-d/2,y+d/2,d/2);
    drawCircle(x+d/2,y-d/2,d/2);
  }
}
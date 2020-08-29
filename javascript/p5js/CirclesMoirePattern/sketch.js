let xOffset = 0,ratio=0.1;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(51);
  stroke(255);
  noFill();
  translate(width/2,height/2);
  for(let radius=0;radius<600;radius+=20)ellipse(0,0,radius);
  push();
  translate(xOffset,0);
   for(let radius=0;radius<600;radius+=20)ellipse(0,0,radius);
  pop();
  push();
    translate(-xOffset,0);
   for(let radius=0;radius<600;radius+=20)ellipse(0,0,radius);
  pop();
  xOffset+=ratio;
  if(xOffset>50 || xOffset<0)ratio*=-1;
}
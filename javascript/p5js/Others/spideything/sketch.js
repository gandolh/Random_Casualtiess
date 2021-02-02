let xOffset = 0,ratio=0.1;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(51);
  stroke(255);
  strokeWeight(2);
  noFill();
  translate(width/2,height/2);
  for(let x=0;x<TWO_PI;x+=0.2){
    push();
    rotate(x);
  line(0,0,300,300);
    pop();
  }
  push();
  translate(xOffset,0);
   for(let x=0;x<TWO_PI;x+=0.2){
    push();
    rotate(x);
  line(0,0,300,300);
    pop();
  }
  pop();
  push();
    translate(-xOffset,0);
   for(let x=0;x<TWO_PI;x+=0.2){
    push();
    rotate(x);
  line(0,0,300,300);
    pop();
  }
  pop();
  xOffset+=ratio;
  if(xOffset>100 || xOffset<0)ratio*=-1;
}
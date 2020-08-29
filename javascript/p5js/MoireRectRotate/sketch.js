let angle=0;
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(51);
  stroke(255);
  strokeWeight(1);
  for(let x=100;x<width-100;x+=10)line(x,100,x,height-100);
  push();
  translate(width/2,height/2);
  rotate(angle);
  //rotate(0.087);
  for(let x=-width/2+70;x<width/2-70;x+=10){
    
    line(x,-height/2+100,x,height/2-100);
    }
  pop();
  angle+=0.001;
}
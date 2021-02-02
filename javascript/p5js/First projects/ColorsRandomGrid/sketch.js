var x=190;
function setup() {
  createCanvas(windowWidth,windowHeight);
  background(220);
}

function draw() {
    noStroke();
  fill(0,random(0,x),random(x,255));
  ellipse(random(0,windowWidth/3),random(0,windowHeight/2),random(0,100));
  
   fill(0,random(x,255),random(0,x));
  ellipse(random(windowWidth/3,windowWidth*2/3),random(0,windowHeight/2),random(0,100));
  
    fill(random(x,255),0,random(0,x));
  ellipse(random(windowWidth*2/3,windowWidth),random(0,windowHeight/2),random(0,100));

  fill(random(0,x),0,random(x,255));
  ellipse(random(0,windowWidth/3),random(windowHeight/2,windowHeight),random(0,100)); 

  fill(random(0,x),random(x,255),0);
  ellipse(random(windowWidth/3,windowWidth*2/3),random(windowHeight/2,windowHeight),random(0,100));
  
    fill(random(x,255),random(0,x),0);
  ellipse(random(windowWidth*2/3,windowWidth),random(windowHeight/2,windowHeight),random(0,100));
}
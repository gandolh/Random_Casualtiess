let xOff=0,yOff=9123;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(51);
  colorMode(HSB);

}

function draw() {

  strokeWeight(3);
  for(let i=0;i<=100;i++){
      stroke(noise(xOff)*360+i,255,255);
    point(noise(yOff+i)*width,noise(yOff+5+i)*height);
                         }
   xOff+=0.03+100;
  yOff+=0.03+100;
  }
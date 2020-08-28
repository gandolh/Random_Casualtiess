let xOff=0,yOff=9123;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(51);

}

function draw() {
	colorMode(RGB);
	  background(51,60);
  colorMode(HSB);
  stroke(noise(xOff)*360,255,255);
  strokeWeight(7);
  for(let j=0;j<=10;j++){
  	for(let i=0;i<=100;i++)point(noise(yOff+j*200)*width,noise(yOff+5+j*200)*height);
  }
  

   xOff+=0.03;
  yOff+=0.03;
  }
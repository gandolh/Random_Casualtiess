let c=[];
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(51);
  for(let i=0;i<=10;i++)c[i]=createGraphics(windowWidth, windowHeight);
  for(let ces of c){
    for(let i=0;i<=43;i++){
     ces.colorMode(HSB);
    ces.stroke(random(360),255,255);
    ces.strokeWeight(3);
    for(let i=0;i<=100;i++)ces.point(random(width),random(height));
    }
  image(ces, 0, 0);
}
}

function draw() {
 
  for(let ces of c)image(ces,0+random(-10,10),0+random(-10,10));

  }
let colors=[];
function setup() {
  createCanvas(windowWidth, windowHeight);
  colors=['#FEED33','#FF3268','#0097CC'];
  background(51);

  noStroke();
  translate(width/2,height/2);
  let minim=-height-300,
      maxim=height+300,
      ratio=40,
      radius=10,
      angleDer=60;
  for(let k=0;k<int(360/angleDer);k++){
  for(let i=minim;i<=maxim;i+=ratio)
    for(let j=minim;j<=maxim;j+=ratio){
    fill(colors[k%3]);
    ellipse(i,j,radius,radius);
    }
  rotate(radians(angleDer));
  }
}

function draw() {}
let radius,
  spacing,
  secondWave;
let colora='#FF4368',
  colorb='#63FF8F';
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(51);
  colorMode(HSB);
  // blendMode(SCREEN);
  radius = 60*1.5;
  spacing = 50*1.5;
  secondWave = -spacing / 2;
  // stroke(255);
  strokeWeight(5);
  noFill();
  // noStroke();

  for (let i = 0; i <= width +100; i += spacing) {
    for (let j = 0; j <= height +100; j += spacing) {
      // fill(random(360), 120, 70);
       // stroke(colora);
      stroke(map(dist(i,j,width/2,height/2),0,width/2+ height/2,0,360),70,120);
      ellipse(i, j, radius, radius);
    }
  }
  for (let i = secondWave; i <= width +100; i += spacing) {
    for (let j = secondWave; j <= height +100; j += spacing) {
      // fill(random(360), 120, 70);
      // stroke(colorb);
      stroke(map(dist(i,j,width/2,height/2),0,width/2+ height/2,0,360),70,120);
      ellipse(i, j, radius, radius);
    }
  }

}
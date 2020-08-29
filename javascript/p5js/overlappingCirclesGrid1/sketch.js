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
  radius = 120;
  spacing = 100;
  secondWave = -spacing / 2;
  // stroke(255);
  strokeWeight(5);
  noFill();
  // noStroke();

  for (let i = 0; i <= width +100; i += spacing) {
    for (let j = 0; j <= height +100; j += spacing) {
      // fill(random(360), 120, 70);
      stroke(colora);
      ellipse(i, j, radius, radius);
    }
  }
  for (let i = secondWave; i <= width +100; i += spacing) {
    for (let j = secondWave; j <= height +100; j += spacing) {
      // fill(random(360), 120, 70);
      stroke(colorb);
      ellipse(i, j, radius, radius);
    }
  }

}
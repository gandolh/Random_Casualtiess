let radius,
  spacing,
  secondWave;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(51);
  colorMode(HSB);
  blendMode(SCREEN);
  radius = 60;
  spacing = radius;
  secondWave = -radius / 2;
  // stroke(255);
  // noFill();
  noStroke();

  for (let i = 0; i <= width +100; i += spacing) {
    for (let j = 0; j <= height +100; j += spacing) {
      // fill(random(360), 120, 70);
      fill('#00B0AC');
      ellipse(i, j, radius, radius);
    }
  }
  for (let i = secondWave; i <= width +100; i += spacing) {
    for (let j = secondWave; j <= height +100; j += spacing) {
      // fill(random(360), 120, 70);
      fill('#FF7228');
      ellipse(i, j, radius, radius);
    }
  }

}
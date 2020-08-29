let r1 = 250,
  r2 = 250,
  m1 = 20,
  m2 = 20,
  a1 = 0,
  a2 = 0,
  a1v = 0,
  a2v = 0,
  a1a = 0.001,
  a2a = -0.0001,
  cx, cy;
let g = 1;
let pg;
let px = -999,
  py = -999;
function setup() {
  createCanvas(windowWidth, windowHeight);
  pg = createGraphics(windowWidth, windowHeight);
  cx = width / 2;
  cy = height/4;
  pg.background(0);
  pg.translate(cx, cy);
  a1 = PI / 2;
  a2 = PI / 2;
}

function draw() {
  let num1 = -g * (2 * m1 + m2) * sin(a1);
  let num2 = -m2 * g * sin(a1 - 2 * a2);
  let num3 = -2 * sin(a1 - a2) * m2;
  let num4 = a2v * a2v * r2 + a1v * a1v * r1 * cos(a1 - a2);
  let den = r1 * (2 * m1 + m2 - m2 * cos(2 * a1 - 2 * a2));
  a1a = (num1 + num2 + num3 * num4) / den;
  num1 = 2 * sin(a1 - a2);
  num2 = (a1v * a1v * r1 * (m1 + m2))
  num3 = g * (m1 + m2) * cos(a1);
  num4 = a2v * a2v * r2 * m2 * cos(a1 - a2);
  den = r2 * (2 * m1 + m2 - m2 * cos(2 * a1 - 2 * a2));
  a2a = (num1 * (num2 + num3 + num4)) / den;
  //background(0);
  imageMode(CORNER);
  image(pg, 0, 0, width, height);
  stroke(255);
  strokeWeight(2);
  translate(cx, cy);
  let x1 = r1 * sin(a1);
  let y1 = r1 * cos(a1);
  let x2 = x1 + r2 * sin(a2);
  let y2 = y1 + r2 * cos(a2);
  line(0, 0, x1, y1);
  ellipse(x1, y1, m1, m1);
  line(x1, y1, x2, y2);
  ellipse(x2, y2, m2, m2);
  a1v += a1a;
  a2v += a2a;
  a1 += a1v;
  a2 += a2v;
  //a1v*=0.999; dumbing
  //a2v*=0.999;
  pg.strokeWeight(4);
  colorMode(HSB);
  let h = map(x2, 0, width, -30, 300);
  pg.stroke(h, map(y2, 0, height, 100, 20), 100);
  if (frameCount > 1) pg.line(px, py, x2, y2);
  px = x2;
  py = y2;
}
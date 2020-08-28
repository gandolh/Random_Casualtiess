let r1 = 0,
  r2 = 0,
  m1 = 20,
  m2 = 20,
  a1 = 0,
  a2 = 0;
let pg;
let px = -999,
  py = -999;

function setup() {

  createCanvas(windowWidth, windowHeight);
  	r1=height/4;
	r2=height/4;	
  pg = createGraphics(windowWidth, windowHeight);
  pg.background(0);
  pg.translate(width / 2, height / 2);

  a1 = PI / 4;
  a2 = PI / 8;
}

function draw() {
  background(0);
  imageMode(CORNER);
  image(pg, 0, 0, width, height);
  stroke(255);
  strokeWeight(2);
  translate(width / 2, height / 2);
  let x1 = r1 * sin(a1);
  let y1 = r1 * cos(a1);
  let x2 = x1 + r2 * sin(a2);
  let y2 = y1 + r2 * cos(a2);
  line(0, 0, x1, y1);
  ellipse(x1, y1, m1, m1);
  line(x1, y1, x2, y2);
  ellipse(x2, y2, m2, m2);
  a1 += 0.0999;
  a2 -= 0.01;
  if (py == -999 && px == -999) {
    px = x2;
    py = y2;
  }
  pg.strokeWeight(4);
  pg.stroke(255);
  pg.line(px, py, x2, y2);
  px = x2;
  py = y2;

}
var cr = 0,crmax;
  culoare = 0;

function setup() {
  crmax=windowHeight;
  createCanvas(windowWidth, windowHeight);
  background(220);
}

function cercuri() {
  if (cr < crmax) {
    ellipse(windowWidth / 2, windowHeight / 2, cr);
    cr += 10;
  } else {
    cr = 0;crmax-=10;
    if(culoare<3)culoare++;
    else culoare=0;
    
  }
}

function draw() {
  ellipseMode(CENTER);
  noStroke();
  if (culoare == 0) fill( 	234, 125, 199);
  else if (culoare == 1) fill( 	240, 144, 217);
  else if (culoare == 2) fill( 	242, 162, 228);
  else if (culoare == 3) fill( 	247, 232, 232);
  cercuri(50);
  let a = 1;
  a++;
  if (a == 50) {
    cercuri(50);
    a = 1;
  }
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  background(0);
  noStroke();
  fill(255);
  for (let i = 0; i < height; i += 50) {
    push();
    for (let j = 0; j < width; j += 50) {
      fill(230);
      let r = int(random(6));
      push();
      translate(25,25);
      if(r==1)rotate(0);
      else if(r==2)rotate(HALF_PI);
      else if(r==3)rotate(PI);
      else if(r==4)rotate(3*PI/2);
      triangle(-25,-25,-25,25,25,-25);
      pop();
      translate(50, 0);
    }
    pop();
    translate(0, 50);
  }
}

function draw() {

}
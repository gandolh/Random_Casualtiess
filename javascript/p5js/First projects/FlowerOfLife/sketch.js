function setup() {
  let colora=color('#43dde6');
  createCanvas(windowWidth, windowHeight);
  background(51);
  translate(width/2,height/2);
  // stroke(colora);
  noStroke();
  colora.setAlpha(20);
  fill(colora);

  for(let i=0;i<TWO_PI;i+=PI/6){
    push();
    rotate(i);
    let scl=400;
  ellipse(scl/4,scl/4,scl);
    pop();
  }
}

function draw() {
  
}
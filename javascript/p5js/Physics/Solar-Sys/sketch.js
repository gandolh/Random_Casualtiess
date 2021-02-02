let angle = 0;
let colors=['#a7ff83','#f4fa9c','#43dde6','#85203b','#fcb1b1','#a6fff2','#0e153a','#feff89','#83e85a','#f85959']
let size=[];
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  rectMode(CENTER);
  angleMode(DEGREES);
  colors=shuffle(colors);
  for(let i=0;i<=10;i++)size[i]=random(50,80);
}

function draw() {
  background(0);
  push();
  translate(width / 2, height / 2);
  fill('#fff98c')
  ellipse(0, 0, 100, 100);
  pop();
  for(let i=0;i<=5;i++)
    addPlanet(i+1,colors[i],(5-i+1)*40,size[i]);
    angle += 0.5;
  }
function addPlanet(angleSpeed,color,coord,dimen){
  push();
  translate(width / 2, height / 2);
  fill(color);
  rotate(angle*angleSpeed);
  ellipse(coord+20,coord+20,dimen,dimen);
    pop(); 

}

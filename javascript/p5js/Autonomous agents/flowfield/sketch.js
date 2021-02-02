let ve=[];
let flowField;
let debug=false;
function setup() {
  createCanvas(windowWidth, windowHeight);
  for(let i=0;i<=250;i++)ve.push(new Vehicle(createVector(random(width), random(height)), random(2, 5), random(0.1, 0.5)))
  flowField= new Flowfield(20);
}

function draw() {
  background(0);
  if(debug)flowField.display();
  for(let v of ve){
  v.follow(flowField);
  v.run();
  }
}
function mousePressed(){
debug=!debug;
}
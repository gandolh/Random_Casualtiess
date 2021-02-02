function setup() {
  createCanvas(windowWidth, windowHeight);
    background(0);
}
let circles = [],
    k=0,
  colors = ['#a7ff83','#17b978','#086972','#071a52'];

function draw() {
  noStroke();
  for(let i=1;i<=5;i++){
  for (let j=circles.length-1;j>=0;j--){
    circles[j].show();
    if(circles[j].r>3*width)circles.splice(j,1);
  }
  }
}

function mousePressed() {
  circles.push(new Circle(mouseX, mouseY, 200,colors[k],colors[++k]));
    if(k>colors.length-2)k=0;
}
class Circle {
  constructor(x, y, r, colorB,colorA) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.colorA = colorA;
    this.colorB=color(colorB);
    this.alphaB = 30;
  }
  show() {
    fill(this.colorA);
    ellipse(this.x, this.y, this.r, this.r);
    fill(this.colorB);
    this.colorB.setAlpha(this.alphaB);
    if (this.r / 10 < 150) ellipse(this.x, this.y, this.r /6, this.r / 6);
    else ellipse(this.x, this.y, 150);
    this.r += 7.5;
    this.alphaB -= 0.25;
  }
}
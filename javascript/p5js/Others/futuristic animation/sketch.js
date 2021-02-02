let ellipses=[];
function setup(){
createCanvas(windowWidth,windowHeight);
background(51);

strokeWeight(4);
noFill();
for(let i=0;i<=65;i++)ellipses[i]=new movingEllipse(5*i,15*i);
}
function draw(){
  colorMode(RGB);
    background(51);
    for(let el of ellipses)el.animate();
}
class movingEllipse{
  constructor(rx,ry){
    this.rx=rx;
    this.maxrx=rx;
    this.ry=ry;
    this.pass=1;
  }
  animate(){  
  this.rx+=this.pass;
  this.ry-=this.pass;
  if(this.rx<0 || this.ry<0)this.pass*=(-1);
  colorMode(HSB);
  stroke(120,50,50);
  ellipse(width/2,height/2,this.rx,this.ry);
  }
}
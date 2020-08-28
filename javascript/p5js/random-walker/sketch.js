let walker;
let wd=10;
function setup() {
  createCanvas(windowWidth, windowHeight);
   background(255);
  walker=  new Walker(random(width/wd)*wd,random(height/wd)*wd);
}

function draw() {
   
  walker.move();
  walker.show();
}
class Walker{
 constructor(x,y){
 this.x=x;
 this.y=y;
 this.wd=wd;
 }
  move(){
    let ok=1;
  while(ok){
  let di=[-this.wd,-this.wd,0,this.wd,this.wd,this.wd,0,-this.wd];
  let dj=[0,this.wd,this.wd,this.wd,0,-this.wd,-this.wd,-this.wd];
  let a=random(di);
  let b=random(dj);
  if(this.x+a<=width && this.x+a>=0 && this.y+b>=0 && this.y+b<=height ){
  this.x+=a;
  this.y+=b; 
  ok=0;
  }
}
}
  show(){
    fill(0);
    rect(this.x,this.y,this.wd,this.wd);
  }
}
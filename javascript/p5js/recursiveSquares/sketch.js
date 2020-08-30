let squares=[];
let r;
function setup() {
  createCanvas(windowWidth, windowHeight);
  r=Math.floor(random(3));
  noFill();
  stroke(255);
    background(51);
        colorMode(HSB);
  let len=500;

    translate(width/2-len/2,height/2-len/2);
    squares[0]=new Patrat(createVector(0,0),createVector(len,0),createVector(len,len),createVector(0,len));
  for(let i=0;i<=12;i++){
      generate(squares[squares.length-1]);
  }
  for(let sq of squares){
    
  sq.show();
  }
}
function generate(sq){
  let newa=createVector((sq.a.x+sq.b.x)/2,(sq.a.y+sq.b.y)/2);
  let newb=createVector((sq.b.x+sq.c.x)/2,(sq.b.y+sq.c.y)/2);
    let newc=createVector((sq.c.x+sq.d.x)/2,(sq.c.y+sq.d.y)/2);
  let newd=createVector((sq.d.x+sq.a.x)/2,(sq.d.y+sq.a.y)/2);
  el=new Patrat(newa,newb,newc,newd);
    squares.push(el);
  }
  let xoff=0;
class Patrat{
  constructor( a,b,c,d){
    this.a=a;
    this.b=b;
    this.c=c;
    this.d=d;


  }

  show(){
  noStroke();
  if(r==0){
    this.colors=['#085f63','#49beb7','#facf5a','#ff5959'];
  fill(random(this.colors));
  }
  else if(r==1)fill(random(255)); //grey
  else if(r==2) fill(map(noise(xoff),0,1,0,120),255,255);
    
    xoff+=0.6;
    beginShape();
    vertex(this.a.x,this.a.y);
    vertex(this.b.x,this.b.y);
    vertex(this.c.x,this.c.y);
    vertex(this.d.x,this.d.y);
    endShape(CLOSE);
  }
}
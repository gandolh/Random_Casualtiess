
function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  background("#04070d");
  //noStroke();

  
  push();
    //noStroke();
      fill(28,28,44,85);
  backgroundStuffs(3,240,27,40,0);
  pop();
  
  push();
   fill(28,28,44,125);
  triangle(0,0,0,200,200,0);
  triangle(width,0,width-200,0,width,200);
  triangle(width,height,width-200,height,width,height-200);
  triangle(0,height,0,height-200,200,height);
 pop();
  
  fill("#343741");
  mainGreyPart(width/2,height/2,3,20,80,12);
 
  fill('#9b9fae');
  Chain(256,235,10,0);
  Chain(128,245,20,0);
  Chain(64,262,30,0);
  Chain(32,277,35,0);
  Chain(16,297,40,0);
  Chain(8,317,45,0);
  Chain(4,337,50,0);
  
  fill('#7c7c94');
  Chain(4,450,90,90);
  
}
function backgroundStuffs(n,distance,components,r,startAngle){
  for(let x=15;x<width;x+=50)
    for(let y=15;y<height;y+=50)
      ellipse(x,y,10,10);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(51);
  stroke(255);
  let r=Math.floor(random(5));
  for (let i = 0; i <= height; i += 50) {
    push();
    for (let j = 0; j <= width; j += 50) {
       if(r==0) stroke(random(255),random(255),12);
       else if(r==1)stroke(random(255),random(155),12);
       	else if(r==2)stroke(random(155),random(255),34);
       		else if(r==3)stroke(random(255),0,random(255));
       			else if(r==4)stroke(random(255),75,random(255));
      for (let i = 0; i < 50; i += 10) {
        line(0, i, i, 0);
        line(i, 50, 50, i);
      }
    
      translate(50, 0);
    }
    pop();
    translate(0, 50);
  }

}

function draw() {

}
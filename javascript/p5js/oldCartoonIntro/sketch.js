function setup() {
  createCanvas(windowWidth, windowHeight);

}

function draw() {
    background(220);
  noStroke();
  frameRate(5);
    for(var x=0;x<width;x+=100)
      for(var y=0;y<=height;y+=100){
        fill(random(155),random(155),random(155));
        ellipse(x+random(24),y+random(24),50);
        
      }
}
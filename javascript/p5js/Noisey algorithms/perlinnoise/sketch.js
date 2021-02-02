let xoff,yoff;
let scl=30;
function setup(){
  createCanvas(windowWidth,windowHeight);
  noStroke();
  background(51);
  colorMode(HSB,360,100,100);

  for(let i=0;i<=width;i+=scl)
    for(let j=0;j<=height;j+=scl){
              fill(map(i+j,0,width+height,120,180),90,90)
      ellipse(i,j,noise(i,j)*scl*1.15);
    }
    // for(let i=0;i<=width;i+=scl)
    //   for(let j=0;j<=height;j+=scl){
    //     fill(noise(j-i)*360,40,90)
    //     ellipse(i,j,noise(j-i)*scl);
    //   }
}

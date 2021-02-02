let i=-10;
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(51);
  noStroke();

 }
let fromB,toB,fromSun,toSun;
 function draw(){
       fromB=color('#88bef5') //blue
     toB= color('#f4fa9c') //yellow
     toSun=color('#ff9f68'); //orange
     fromSun=color('#feff89'); //yellow
  for(let j=0;j<=5;j++){
  if(i<height){
    // stroke(colore);
    personalisedLine(0,i,width,i);
    i++;
  } 
  }
 }
 function personalisedLine(xs,ys,xf,yf,strW=10){

  for(let x=xs;x<=xf;x+=strW)
    for(let y=ys;y<=yf;y+=strW){
      //
       let rad= dist(x,y,width/2,height/2);

      let colore;
       if(rad<200){
        colore=lerpColor(fromSun,toSun,map(rad,0,100,0,1));
      }
        else colore=lerpColor(fromB,toB,map(i,0,height,0,1));
      //
      fill(colore);
      stroke(colore);
      let r=random(1);
      let foo=strW;
      // let foo= strW/2; // for some cool spacing between lines
      // ellipse(x,y,random(1,strW)); //ellipse texture
      if(0.2<r)
        line(x,y,x+foo,y+foo);
      else if(r<0.6){
        line(x,y+foo,x+foo,y);
      }
      else if(r<0.8){
        line(x+foo,y,x,y+foo);
      }
    }
 }
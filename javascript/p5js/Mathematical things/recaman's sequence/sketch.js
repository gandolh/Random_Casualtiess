let coords=[];  //x - index ; y =values
let freq=[];
let n=50;
function setup(){
  createCanvas(windowWidth,windowHeight);
  background(51);

  translate(0,height/2);
  initialize();
  for(let i=1;i<=n;i++){
    let f1=coords[i-1]-i;
    let f2=coords[i-1]+i;
    if(f1>0 && freq[f1]==0){
      coords[i]=f1;
      freq[f1]=1;
    }else{
      coords[i]=f2;
      freq[f2]=1;
    }
    // console.log(f1,f2,coords[i],freq[f1])
  }
    stroke(255);
    noFill();
    strokeWeight(2);

    show();
    // console.log(coords);
}
function initialize(){
  for(let i=0;i<=100000;i++)freq[i]=0;
  coords[0]=0;
  freq[0]=1;
}
function show(){
  let pass=windowWidth/200;
  // translate(width/2,0);
  // arc(100,100,200,200,0,PI);
  let c1=color('#fc5185');
  let c2=color('#364f6b');
  let c3=color('#46c3db');
  let ratio= 3/n;
  let pigment=0;
for(let i=0;i<n;i++){
  if(pigment>=1)pigment=0;
    if(i<=n/3)stroke(lerpColor(c1,c2,pigment));
  else if(i<2*n/3)stroke(lerpColor(c2,c3,pigment));
  else stroke(lerpColor(c3,c1,pigment));
  pigment+=ratio;
  let distance=coords[i+1]-coords[i];
   arc(((coords[i]+coords[i+1])/2)*pass, 0,distance*pass, distance*pass, 0+PI*(i%2), PI+PI*(i%2));

}
}
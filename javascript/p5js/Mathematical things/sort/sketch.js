let ls=[];
let ok=1;
function setup() {
  createCanvas(windowWidth, windowHeight);
  for(let i=0;i<=width/8;i++)ls[i]=random(height);
}

function draw() {
 // frameRate(30);
  background(0);
  sortare();
  afisare();
}
function sortare(){
  if(ok){
    ok=0;
    for(let i=0;i<=ls.length;i++)if(ls[i]>ls[i+1]){
      let temp=ls[i];
      ls[i]=ls[i+1];
      ls[i+1]=temp;
      ok=1;
  }
  }
  else noLoop();
}
function afisare(){
  for(let i=0;i<=ls.length;i++){
  fill(200);
  rect(i*8 , height, 8, -ls[i]);
  }
}
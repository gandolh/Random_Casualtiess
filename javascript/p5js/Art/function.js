
function mainGreyPart(x,y,n,r,distance,components){
  if(n>0){
   
  push();
  translate(x,y);
  for(let i=1;i<=components;i++){
    push();
    rotate(i*(360/components));
    ellipse(distance,0,r,r);
    mainGreyPart(distance-10,0,n-1,r-2,distance,components);
    pop();
}
  pop();
  }
}
function Chain(components,distance,r,startAngle){
  push();
    translate(width/2,height/2);
    rotate(startAngle);
    for(let i=1;i<=components;i++){
    rotate(360/components); 
    ellipse(distance,0,r,r);
    }
  pop();
}

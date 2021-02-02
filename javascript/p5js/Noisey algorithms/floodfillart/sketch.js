// let colors=['#b85617','#b47856','#8d4129','#4c1b16'];
let activeCells=[]; // the colored cells saved here
let coloredCells=[]; // verify if the cell is colored or not 
let scl=1,rows,cols;
let dy=[-1,-1,0,1,1,1,0,-1];
let dx=[0,1,1,1,0,-1,-1,-1];
let ac,acIndex;
function setup() {
    createCanvas(windowWidth, windowHeight);
    strokeWeight(3);
    rows= width/ scl+1;
    cols=height/ scl+1;
    background(51);
    initColoredArray();
    activeCells[0]=new ActiveCell([20,120,255],createVector(20,int(cols)-20));
}	
function draw(){
	for(let i=0;i<=500;i++){
	if(activeCells.length>0){
		acIndex=int(random(activeCells.length-1));
		ac= activeCells[acIndex];
		// console.log(ac.colr)
		// console.log(ac);
		// stroke(ac.colr);
		// strokeWeight(3);
		for(let i=0;i<dx.length;i++){
		let xIndex=ac.pos.x-dx[i];
		let yIndex=ac.pos.y-dy[i];
		if(ok(xIndex,yIndex) && coloredCells[xIndex][yIndex]==0 ){
			let variation=2;
			let tempColor=[
				randomGaussian(ac.colr[0],variation),
				randomGaussian(ac.colr[1],variation),
				randomGaussian(ac.colr[2],variation)
				] //gaussian
			stroke(tempColor);
			line(ac.pos.x*scl,ac.pos.y*scl,xIndex*scl,yIndex*scl);
			coloredCells[xIndex][yIndex]=1;
			activeCells.push(new ActiveCell(tempColor,createVector(xIndex,yIndex)));
		}
		}
		activeCells.splice(acIndex,1);
	}
	else {
			console.log("done!")
		noLoop();

}
}
// noStroke();
// fill(random(255),random(255),120);
// for(let c of activeCells){
// 	ellipse(c.pos.x*scl,c.pos.y*scl,15,15);
// }
}
class ActiveCell{
	constructor(colr,pos){
		this.colr=colr;
		this.pos=pos;
	}
}
function ok(x,y){
	return (x>=0) && (y>=0) && (x<=rows) && (y<=cols)
}
function initColoredArray(){
   for(let i=0;i<=rows;i++)
        	coloredCells[i]=[];
    for(let i=0;i<=rows;i++)
    	for(let j=0;j<=cols;j++)
    		coloredCells[i][j]=0;
    coloredCells[int(rows/2)][int(height/2)]=1;
}
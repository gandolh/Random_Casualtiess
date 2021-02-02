let ellipses=[];
let fails=0,maxTries=160000,r=32;
let fox;
function preload(){ 
	fox=loadImage('peng.jpg');
	
}
function setup() {
    createCanvas(windowWidth, windowHeight);

    background(255);
    let pos=createVector(random(width),random(height));
    ellipses[0]= new Ellipse(pos,r);
    // console.log(ellipses[0])
    fox.resize(width,height);

   	// image(fox,0,0);
   	noStroke();

}	
function draw(){
	for(let i=0;i<15;i++){

	if(fails<maxTries){	
		fails++;
		let pos=createVector(random(width),random(height));
		let color=fox.get(pos.x,pos.y);
		let variation=15;
		color[0]=randomGaussian(color[0],variation)
		color[1]=randomGaussian(color[1],variation)
		color[2]=randomGaussian(color[2],variation)
		fill(color);
		let r= random(5,10);
		let tempEllipse= new Ellipse(pos,r);
		if(tempEllipse.valid()){
			ellipses.push(tempEllipse);
			 ellipse(tempEllipse.pos.x,tempEllipse.pos.y,r);
			// point(tempEllipse.pos.x,tempEllipse.pos.y)
			fails=0;
		}
	}	
	else{
	 noLoop();	
	 console.log("done!")
	}	
	}


}
class Ellipse{
	constructor(pos,r){
		this.pos=pos;
		this.r=r;
	}
	valid(){
	for(let e of ellipses){
		let d= dist(this.pos.x,this.pos.y,e.pos.x,e.pos.y);
		// console.log(d, e.r +this.r);
		if(d< e.r/2+ this.r/2)return 0;
	}
	return 1;
}
}
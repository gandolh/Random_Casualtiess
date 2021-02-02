let fox;
let r= 5;
function preload(){
	fox=loadImage('peng.jpg');
	
}
function setup() {
    createCanvas(windowWidth, windowHeight);
    background(255);
    fox.resize(width,height);
   	// image(fox,0,0);
   	noStroke();

}	
function draw(){
	for(let i=0;i<300;i++){
	let pos=createVector(random(width),random(height));
		let color=fox.get(pos.x,pos.y);
		let variation=20;
		color[0]=randomGaussian(color[0],variation)+50;
		color[1]=randomGaussian(color[1],variation)+10;
		color[2]=randomGaussian(color[2],variation)+20;

		fill(color);
		let r= random(5,10);
		ellipse(pos.x,pos.y,r);
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
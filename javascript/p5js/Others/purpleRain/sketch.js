let drops=[];
function setup(){
	createCanvas(windowWidth,windowHeight);
	background(51);
	for(let i=0;i<=500;i++)
	drops[i]= new Drop(random(width),random(-500,-50));
}
function draw(){
	background(51);
	for(let d of drops){
		d.fall();
		d.show();
	}
}
class Drop{
	constructor(x,y){
		this.x=x;
		this.y=y;
		this.z=random(0,20);
		this.ySpeed=map(this.z,0,20,1,20);
		this.len=map(this.z,0,20,10,20);
	}
	fall(){
		this.y=this.y+this.ySpeed;
		let gravity=map(this.z,0,20,0,0.2);
		this.ySpeed+=gravity;
		if(this.y>height){
			this.y=random(-200,-100);
		this.ySpeed=map(this.z,0,20,10,20);
		}
	}
	show(){
		stroke(138,43,226);
		let thick=map(this.z,0,20,1,3);
		strokeWeight(thick);
		line(this.x,this.y,this.x,this.y+this.len);
	}
}
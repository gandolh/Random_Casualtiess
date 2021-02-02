let ellipses=[];
let colora='#364f6b',
colorb='#fc5185';
function setup() {
    createCanvas(windowWidth, windowHeight);
    for(let i=0;i<=20;i++)
    	ellipses.push(new ellipseStroke(i,i*min(height/10-10,width/10-10)));
}
function draw(){
	offsetY=100;
	offsetX=100
	translate(width/2,height/2+offsetY);
	    background(colora);
	for(let c of ellipses){
		c.update();
		c.show();
	}
	translate(-width/2,-height/2);
	noStroke();
	fill(colora);
	quad(offsetX,0,width-offsetX,0,width-offsetX,-offsetY,offsetX,-offsetY);
	quad(0,-offsetY,offsetX,-offsetY,offsetX,height,0,height);
	quad(width-offsetX,-offsetY,width,-offsetY,width,height,width-offsetX,height);
	triangle(offsetX,3*height/4,offsetX,0,width/2,0);
	triangle(width-offsetX,0,width-offsetX,3*height/4,width/2,0);
	quad(offsetX,3*height/4,width-offsetX,3*height/4,width-offsetX,height,offsetX,height);
}
class ellipseStroke{
	constructor(sw,r){
		this.sw=sw;//strokeWeight
		this.sign=1;
		this.r=r; //radius
	}
	update(){
		this.sw+=this.sign;
		if(this.sw>=min(height/75,width/75) || this.sw<=1)this.sign*=-1;
	}
	show(){
		stroke(colorb);
		noFill();
		strokeWeight(this.sw);
		ellipse(0,0,this.r);
	}
}
// let colors=['#b85617','#b47856','#8d4129','#4c1b16'];
function setup() {
    createCanvas(windowWidth, windowHeight);
    // background('#c6c4c5');
    background('#085f63');
    noStroke();
    translate(width/2,height/2);
    let r=100;

    for(let r=50;r<=width/2+100;r+=30){
    	let ratio= map(r,150,width/2+100,0,1);
    	fill(lerpColor(color('#ff5959'),color('#085f63'),ratio));
        let angle=TWO_PI/r*3;
    for(let a=0;a<=TWO_PI;a+=angle){
    	push();
    	rotate(a);
    	// fill(random(colors));
    	let len=20;
   		// translate(x,y);
    	triangle(r+len,0,r,-len/2,r,len/2);
    	pop();
    }	
}
}	
function setup() {
    createCanvas(windowWidth, windowHeight);
    background(51);
    colorMode(HSB);
    let radius=15;
    for(let i=0;i<width;i+=54*radius)
    	for(let j=0;j<height;j+=54*radius)
    gridOfGridOfGrid(i,j,radius);
}
let xoff=0;
let huePass=25;
function gridOfGridOfGrid(x,y,radius){

	    for (let i = 0; i < 3; i++)
        for (let j = 0; j < 3; j++)
       	gridOfGrid(x + i * 18*radius, y + j * 18*radius, radius);	
}

function gridOfGrid(x,y,radius){
	let hue=noise(xoff)*360;
	xoff+=0.03;
    for (let i = 0; i < 3; i++)
        for (let j = 0; j < 3; j++)
            grid(x + i * 6*radius, y + j * 6*radius, radius, random(3,5),hue);	
}

function grid(x, y, radius, npoints,hue) {
	hue+=random(-huePass,huePass);
	stroke(npoints*360/5,255,255);
	fill(npoints*360/5,255,255,0.20);
    for (let i = 0; i < 3; i++)
        for (let j = 0; j < 3; j++)
            polygon(x + i * 2*radius, y + j * 2*radius, radius, npoints);
}

function polygon(x, y, radius, npoints) {
    let angle = TWO_PI / npoints;
    beginShape();
    for (let a = 0; a < TWO_PI; a += angle) {
        let sx = x + sin(a) * radius;
        let sy = y + cos(a) * radius;
        vertex(sx, sy);
    }
    endShape(CLOSE);
}
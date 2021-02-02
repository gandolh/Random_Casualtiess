let stacks = [],
    colors = [];

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(51);
    noStroke();
    // colors = [color('#FF71A2'), color('#E762D1'), color('#E67EFF'), color('#A46BE8'), color('#A082FF')];
    // for(let c of colors)c.setAlpha(10);
    colorMode(HSB);
    let scl=100;
   		for(let i=0;i<=width/scl;i++){   	
   		stacks=[];
	    for (let j = 0; j <=height/scl; j++) {
	    stacks.push(polyStack(i*scl, j*scl, scl, 4));
	    }
	    drawStacks();

   		}
}
let hue=0;
function drawStacks() {
    for (let i=0;i<stacks.length;i++) {
    	// let index=Math.floor(map(i,0,stacks.length,0,colors.length));
    	// fill(colors[index]);	

        for (let j = 0; j < stacks[i].length; j++) {
        	    	fill(hue,255,360,0.04);
        	    	hue+=360/height;
            beginShape();

            for (let k = 0; k < stacks[i][j].length; k++) {

                vertex(stacks[i][j][k].x, stacks[i][j][k].y)
            }
            endShape(CLOSE);
        }
    }
}
// let ruleset=[0,1,1,1,1,1,1,0]; //rule 126 - sierpinski
// let ruleset=[1,0,0,1,0,1,1,0]; //rule 150 -wtf is this
// let ruleset = [0, 0, 1, 1, 1, 1, 0, 0]; //rule 60- right angle sierpinski
// let ruleset=[1,0,0,1,1,1,1,0];	//rule 158 - sand dash
// let ruleset=[0,0,1,1,1,1,1,0];	//rule 62-arrowField
// let ruleset=[1,0,1,1,0,1,1,0]; // rule 182-milion eyes
// let ruleset=[1,0,1,1,1,1,0,0]; // rule 188 -sandstuff
// let ruleset=[0,1,0,1,1,1,1,0]; //rule 94 checkboard
// let ruleset=[0,1,1,0,1,1,1,0]; //rule 110 false simetry
// let ruleset=[0,1,1,1,1,0,1,0];	//high building
// let ruleset=[0,1,0,1,1,0,1,1]; //91 to binary - interesting shit
// let ruleset=[0,1,1,-1,1,1,1,1]; //111 xmas tree
// let ruleset=[1,0,0,1,0,0,1,0]; //aci am ramas 146 interesting
// let ruleset =[1,0,0,1,1,0,1,0]; //154
// let ruleset=[1,0,0,1,1,0,1,0]; //156 godd damn good
// let ruleset=[1,0,1,0,1,0,0,1]; //169 triangles macaroni
let ruleset=[1,1,0,1,0,0,1,0]; //210 idk

var ca;
let num = 0;

function setup() {
    noiseSeed(2);
    createCanvas(windowWidth, windowHeight);
    ca = new CA(ruleset);
    ca.restart(ruleset);
    strokeWeight(3);

}

function draw() {
    frameRate(15);
    background('#492540');

    ca.generate();
    //ca.display();
    grid();
    if (!ca.check()) {
ca.display();
    	noLoop();
    }
}

// function mousePressed(){
// 	num++;
// 	let foo=dec2bin(num);
// 	ruleset=foo.split("");
// 	for(let i=0;i<ruleset.length;i++)ruleset[i]=parseInt(ruleset[i]);
// 	ca.restart(ruleset);
// }	
// function dec2bin(dec){
//   return (dec >>> 0).toString(2);
// }
function grid() {
    push();
    stroke(255, 20)
    translate(width / 2, height / 2);
    rotate(PI / 4);
    for (let i = -height; i < height; i += 15) line(-height, i, width, i);
    for (let i = -width; i < width; i += 15) line(i, -width, i, height);

    pop();
}

let yoff=0;
function setup() {
    createCanvas(windowWidth, windowHeight);

}
function draw(){
	let xoff = 0;
	  background(51);
    translate(width / 2, height / 2);
        rotate(PI/2);
    let da = PI / 100;
    let dx=0.1,dy=0.001;
    let r = 100;
    fill(255, 10);
    stroke(255);
    strokeWeight(1);
    beginShape();
    for (let a = -PI / 2; a < PI / 2; a += da) {
        r = sin(2 * a) * map(noise(xoff,yoff), 0, 1, 50, 125);
        let x = r * cos(a);
        let y = sin(yoff)*r * sin(a);
        vertex(x, y);
        xoff += dx;
       
    }

    for (let a = PI / 2; a <= 3 * PI / 2; a += da) {
        r = sin(2 * a) * map(noise(xoff,yoff), 0, 1, 50, 125);
        let x = r * cos(a);
        let y = sin(yoff)*r * sin(a);
        vertex(x, y);
        xoff -= dx;
     
    }
    endShape();
    yoff+=0.01;
}
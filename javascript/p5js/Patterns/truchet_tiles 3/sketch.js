let colore = 130;

function setup() {
    createCanvas(windowWidth, windowHeight);
    colorMode(HSB)
    noStroke();
    strokeWeight(3);
    stroke(255);
    background(0);
    for (let i = 0; i < height; i += 25) {
        push();
        for (let j = 0; j < width; j += 25) {  
            stroke(colore,80,120);
            colore+=0.15
            let z=int(random(10));
            if(z==8)colore-=0.7
            if(colore>360)colore=0;
            let r = int(random(3));
            push();
            if (r == 1) line(0, 0, 25, 25);
            else line(25, 0, 0, 25);
            pop();
            translate(25, 0);
        }
        pop();
        translate(0, 25);
    }
}

function draw() {

}
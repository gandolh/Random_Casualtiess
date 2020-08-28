let scl = 25;
let j, i, xoff = 0,
    yoff = 0,
    pass = 15,
    xoffRotate = 100,
    passRotate = 0.1,
    zoff = 0;

function setup() {
    createCanvas(windowWidth, windowHeight);
    noStroke();
    colorMode(HSB);
    background(noise(0, 0, 0) * 360, 255, 255);
    rectMode(CENTER);
    for (let k = 0; k <= 3; k++) {
        for (i = 0; i < height; i += scl) {
            xoff = 0;
            for (j = 0; j <= width; j += scl) {
                let n = noise(xoff, yoff, zoff);
                let r = int(random(4));
                fill(n * 360, 255, 255)
                push();
                translate(scl / 2, scl / 2)
                rotate(xoffRotate);
                if (r == 0) pentagon();
                else if (r == 1) rect(0, 0, scl, scl);
                else if (r == 2) ellipse(0, 0, scl, scl)
                else if (r == 3) triangless();
                pop();
                translate(scl, 0);

                xoff += pass;
                xoffRotate += passRotate;
            }
            yoff += pass;
            translate(-j, scl);
        }

        translate(0, -i - scl / 2);
        yoff = 0;
        zoff += pass;
    }
}

function pentagon() {
    beginShape();
    vertex(0, scl / 2);
    vertex(scl / 2, 0);
    vertex(scl, scl / 2);
    vertex(scl, scl)
    vertex(0, scl);
    endShape(CLOSE);
}

function triangless() {
    beginShape();
    vertex(scl / 2, 0);
    vertex(scl, scl);
    vertex(0, scl);
    endShape(CLOSE);
}
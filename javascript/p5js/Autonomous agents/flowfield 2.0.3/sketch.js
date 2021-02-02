let inc = 0.1,
    scl = 10,
    col, rows, zoff = 0;
let particles = [];
let flowfield;

function setup() {
    createCanvas(windowWidth, windowHeight);
    //createCanvas(600, 600);
    cols = floor(width / scl);
    rows = floor(height / scl);
    for (let i = 0; i < 4000; i++) {
        particles[i] = new Particle();
    }
    colorMode(HSB,360);
    flowfield = new Array(cols * rows);
    background('#1f4287');
    // let colore=color('#21e6c1');
    // colore.setAlpha(5);
}

function draw() {

    let yoff = 0;

    for (let y = 0; y < rows; y++) {
        var xoff = 0;
        for (let x = 0; x < cols; x++) {
            let index = (x + y * cols);

            let r = noise(xoff, yoff, zoff) * TWO_PI;
            let v = p5.Vector.fromAngle(r);
            v.mag(5);
            flowfield[index] = v;
            xoff += inc;
                // push();
                // translate(x * scl, y * scl);
                // rotate(v.heading());
                // line(0, 0, scl, 0)
                // pop();
        }
        yoff += inc;
    }
    zoff += 0.003;
    for (p of particles) {
        p.follow(flowfield);
        p.update();
        p.edges();
        p.show();

    }
}
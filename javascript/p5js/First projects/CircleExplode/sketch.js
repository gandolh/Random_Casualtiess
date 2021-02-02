let flock = [];
let colors = ['#a4f6a5', '#f1eb9a', '#f8a978', '#f68787'],
    k = -1;

function setup() {
    createCanvas(windowWidth, windowHeight);
    createBoids();
}

function draw() {
    if(flock[25].position.x>width/2+100)flock.splice(0,199);
    background(51);
    frameRate(20);
    translate(width / 2, height / 2);

    if (frameCount % 75 == 0) createBoids();

    for (let boid of flock) {
        boid.update();
        boid.show();
    }
}

function createBoids() {
    k++;
    if (k > 3) k = 0;
    for (let i = 0; i <= 200; i++) {
        flock.push(new Boid(1, i * TWO_PI / 200, colors[k]));
    }
}
let colors = ['#12A0FF', '#00D4E8', '#13FFDB', '#00E86D'];
let colors2 = ['#f0f696', '#e8ffe8'];

function setup() {
    createCanvas(windowWidth, windowHeight);
    // strokeWeight(3);

}
let num = 15;

function draw() {
    background(51);
    drawCircle(width / 2, height / 2, 500, 0);
}

function drawCircle(x, y, d, k) {
    if (d <= num) {
        let colora = color(colors2[k]);
        colora.setAlpha(map(d,0,500,90,180));
        stroke(colora);
    } else {
        let colora = color(colors[k % colors.length]);
        colora.setAlpha(map(d,0,500,90,180));
        stroke(colora);
    }

    noFill();
    ellipse(x, y, d);
    if (d > num) {
        if (d / 2 <= num) {
            drawCircle(x + d / 2, y, d / 2, 0);
            drawCircle(x - d / 2, y, d / 2, 0);
            drawCircle(x, y + d / 2, d / 2, 1);
            drawCircle(x, y - d / 2, d / 2, 1);
        } else {
            drawCircle(x + d / 2, y, d / 2, k + 1);
            drawCircle(x - d / 2, y, d / 2, k + 1);
            drawCircle(x, y + d / 2, d / 2, k + 1);
            drawCircle(x, y - d / 2, d / 2, k + 1);
        }
    }
}
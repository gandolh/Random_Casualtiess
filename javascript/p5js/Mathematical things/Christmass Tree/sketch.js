let grid, rows, cols, scl = 54;

function setup() {
    createCanvas(windowWidth, windowHeight);
    background('#002651')
    rows = Math.floor(height / scl + 50);
    cols = Math.floor(width / scl + 50);
    grid = make2DArray();
    noStroke()
    generateValues();
    drawing()
}

// function draw() {
//   background('rgb(51,51,51)');
//     colorMode(HSB,360,100,100);
// }

function make2DArray() {
    let arr = [];
    for (let i = -1; i <= rows; i++) arr[i] = [];
    return arr;
}

function generateValues() {
    for (let i = 0; i < cols; i++)
        grid[0][i] = 0
    grid[0][int(width / scl / 2)] = 1
    for (let i = 1; i < rows; i++)
        for (let j = 0; j < cols; j++)
            grid[i][j] = int(grid[i - 1][j] + grid[i - 1][j - 1]);
}

function drawing() {

    fill(255)
    textAlign(CENTER, CENTER);
    textSize(16)
    push()
    translate(scl / 2, scl / 2)
    for (let i = -1; i < rows; i++)
        for (let j = -1; j < cols; j++) {
            let c1;
            translate(-scl / 150, 0)
            if (grid[i][j] == 1) c1 = '#70CC00'
            else if (grid[i][j] % 2 == 0) c1 = '#FF2F10'
            else if (grid[i][j] % 3 == 0) c1 = '#1054FF'
            else c1 = '#28c7fa'

            if (grid[i][j] != 0) {
                fill(255)
                text(grid[i][j], j * scl, i * scl)
                c1 = color(c1)
                c1.setAlpha(150)
                fill(c1)
                ellipse(j * scl, i * scl, scl * 11 / 12)
            }else{
              //stars
              if(random()<0.4){
              fill('#f4fa9c')
              let rad = scl * 11 / 12/2
              x=j*scl
              y=i*scl
              star(x, y, rad/3,rad, 5)
              }
            }
        }
    pop()
    let c1 = color('#f4fa9c')
    c1.setAlpha(125)
    stroke(c1)
    strokeWeight(15)
    noFill()
    beziers(0)
    beziers(width)
}


function beziers(offsetX) {
    let Rcols = int(width / scl)
    let Rrows = int(height / scl)
    if (offsetX == 0) sign = 1
    else sign = -1
    bezier(
        offsetX + sign * (Rcols - 2) / 2 * scl, scl,
        offsetX + sign * Rcols / 2 * scl, scl,
        offsetX + sign * (Rcols + 3) / 2 * scl, 4 * scl,
        offsetX + sign * (Rcols + 5) / 2 * scl, 4 * scl
    )

    bezier(
        offsetX + sign * (Rcols + 5) / 2 * scl, 4 * scl,
        offsetX + sign * (Rcols + 5) / 2 * scl, 4 * scl,
        offsetX + sign * (Rcols - 8) / 2 * scl, 6 * scl,
        offsetX + sign * (Rcols - 8) / 2 * scl, 8 * scl
    )

    bezier(
        offsetX + sign * (Rcols - 8) / 2 * scl, 8 * scl,
        offsetX + sign * (Rcols - 8) / 2 * scl, 8 * scl,
        offsetX + sign * (Rcols + 11) / 2 * scl, 12 * scl,
        offsetX + sign * (Rcols + 11) / 2 * scl, 10 * scl
    )
    bezier(
        offsetX + sign * (Rcols + 11) / 2 * scl, 10 * scl,
        offsetX + sign * (Rcols + 11) / 2 * scl, 10 * scl,
        offsetX + sign * (Rcols - 14) / 2 * scl, 16 * scl,
        offsetX + sign * (Rcols - 14) / 2 * scl, 14 * scl
    )

    bezier(
        offsetX + sign * (Rcols - 14) / 2 * scl, 14 * scl,
        offsetX + sign * (Rcols - 14) / 2 * scl, 14 * scl,
        offsetX + sign * (Rcols + 18) / 2 * scl, 20 * scl,
        offsetX + sign * (Rcols + 18) / 2 * scl, 18 * scl
    )
    bezier(
        offsetX + sign * (Rcols + 18) / 2 * scl, 18.25 * scl,
        offsetX + sign * (Rcols + 18) / 2 * scl, 18.25 * scl,
        offsetX + sign * (Rcols - 19) / 2 * scl, 20 * scl,
        offsetX + sign * (Rcols - 19) / 2 * scl, height
    )
}

function star(x, y, radius1, radius2, npoints) {
    let angle = TWO_PI / npoints;
    let halfAngle = angle / 2.0;
    beginShape();
    for (let a = 0; a < TWO_PI; a += angle) {
        let sx = x + cos(a) * radius2;
        let sy = y + sin(a) * radius2;
        vertex(sx, sy);
        sx = x + cos(a + halfAngle) * radius1;
        sy = y + sin(a + halfAngle) * radius1;
        vertex(sx, sy);
    }
    endShape(CLOSE);
}
let cells = [];

function setup() {
    createCanvas(windowWidth, windowHeight);
    // for (let i = 0; i < 12; i++)
    //     cells.push(new Cell(
    //             createVector(random(width),random(height)),
    //             random(20,50),
    //             color(random(255), 0, random(100, 255))
    //         ));
    colorMode(HSB)
    for (let i = 0; i < 3; i++)
        cells.push(new Cell(
            createVector(width / 2, height / 2),
            150,
            color(random(360),30,90)
        ));

}

function draw() {
    background('#E4E6E5');

    for (let c of cells) {
        c.move();
        c.eating();
        c.wrapping();
        c.show();
    }
    // if(frameCount%50==0){
    // 	let i= Math.floor(random(cells.length));
    // 	let c=cells[i];
    // 	cells.push(c.mitosis());
    //     cells.push(c.mitosis());
    //     cells.splice(i,1);
    // }
    // console.log(cells.length);
}
class Cell {
    constructor(pos, r, col) {
        this.pos = pos;
        this.r = r;
        this.col = col;
        this.col.setAlpha(0.76);
        this.lifespan = 0;
    }
    move() {
        let vel = p5.Vector.random2D();
        vel.mult(this.r/50)
        let temporaryForce = [];
        for (let i = 0; i < cells.length; i++) temporaryForce[i] = createVector();
        vel.mult(0.25);
        this.pos.add(vel);
        for (let c of cells) {
            let d = dist(c.pos.x, c.pos.y, this.pos.x, this.pos.y);
            if (d < 2 * this.r) {
                vel.mult(2);
                temporaryForce[cells.indexOf(c)].add(vel);
                temporaryForce[cells.indexOf(this)].sub(vel);
                // c.pos.add(vel);
                // this.pos.sub(vel);
            } else if (d > 1.5 * this.r && d <= 2.5 * this.r) {
                vel.mult(2);
                // this.pos.add(vel);
                // c.pos.sub(vel);
                temporaryForce[cells.indexOf(this)].add(vel);
                temporaryForce[cells.indexOf(c)].sub(vel);
            }
        }
        for (let i = 0; i < cells.length; i++) {
            temporaryForce[i].limit(4*this.r/50);
            cells[i].pos.add(temporaryForce[i])
        }
    }
    wrapping() {
        if (this.pos.x > width) this.pos.x = 0;
        else if (this.pos.x < 0) this.pos.x = width;
        else if (this.pos.y > height) this.pos.y = 0;
        else if (this.pos.y < 0) this.pos.y = height;
    }
    show() {
        this.lifespan++;
        noStroke();
        fill(this.col);
        ellipse(this.pos.x, this.pos.y, this.r)
    }
    clicked(x, y) {
        let d = dist(this.pos.x, this.pos.y, x, y);
        return d < this.r;

    }
    mitosis() {
        // this.pos.x+=random(-this.r,this.r);
        let cell = new Cell(this.pos.copy(), this.r * 0.8, this.col);
        return cell;
    }
    eating() {
        for (let i = cells.length - 1; i >= 0; i--) {
            let c = cells[i];
            let d = dist(c.pos.x, c.pos.y, this.pos.x, this.pos.y);

            if (d < (this.r + c.r) / 2 && c.col === this.col && c != this && this.lifespan >= 150) {
                this.r= (this.r*1.25+c.r*1.25)/2;
                if (this.r < c.r) {
                    cells.splice(cells.indexOf(this), 1);
                    break;
                } else cells.splice(i, 1);
            }
        }
    }
}

function mousePressed() {
    for (let i = cells.length - 1; i >= 0; i--) {
        // for (let i=0;i<cells.length;i++) {
        let c = cells[i];
        if (c.clicked(mouseX, mouseY) && c.r > 2) {
            cells.push(c.mitosis());
            cells.push(c.mitosis());
            cells.splice(i, 1);
        }
    }
}
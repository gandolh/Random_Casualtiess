Kochs = [];
let colors=['#574b90','#9e579d','#fc85ae'];

/*
let it snow,faci pattern cu ei, si dupa poate ii faci sa pice si sa ii generezi random,why not?
*/
let zoom = 1,
    zoomPass = 0.01;
let scl = 150;
let rows, cols;

function setup() {
    createCanvas(windowWidth, windowHeight);
    strokeWeight(1);
    stroke(255);
    background('#303a52');
    noStroke();
    rows = height / scl;
    cols = width / scl;
    for (let i = 0; i < rows; i++) Kochs[i] = [];
    for (let i = 0; i < rows; i++)
        for (let j = 0; j < cols; j++) Kochs[i][j] = [];
    //  snowflake
    // Kochs.push(new Line(b,a));
    // Kochs.push(new Line(c,b ));
    // Kochs.push(new Line(a,c));
    // weird stuff
    //     Kochs.push(new Line(a,b));
    // Kochs.push(new Line(b,c ));
    // Kochs.push(new Line(c,a));
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            let a = createVector(scl / 3, 0);
            let b = createVector(0, scl / 1.5);
            let c = createVector(scl / 1.5, scl / 1.5);
            Kochs[i][j].push(new Line(b, a));
            Kochs[i][j].push(new Line(c, b));
            Kochs[i][j].push(new Line(a, c));
        }
    }

    for (let i = 0; i < 4; i++) generate();
    for (let i = 0; i < rows; i++) {
        push();

        for (let j = 0; j < cols; j++) {
            push();
            translate(random(-15, 15), 0);
            fill(random(colors));
            beginShape();
            for (let k = 0; k < Kochs[i][j].length; k++) {
                vertex(Kochs[i][j][k].start.x,Kochs[i][j][k].start.y);

            }
            endShape();
            pop();
            translate(scl, 0);

        }
        pop();
        translate(0, scl);
    }
}

function generate() {
    let next = [];
    for (let i = 0; i < rows; i++) next[i] = [];
    for (let i = 0; i < rows; i++)
        for (let j = 0; j < cols; j++) next[i][j] = [];

    for (let i = 0; i < rows; i++)
        for (let j = 0; j < cols; j++) {

            for (let k = 0; k < Kochs[i][j].length; k++) {
                let l = Kochs[i][j][k];

                let a = l.kochA();
                let b = l.kochB();
                let c = l.kochC();
                let d = l.kochD();
                let e = l.kochE();
                next[i][j].push(new Line(a, b));
                next[i][j].push(new Line(b, c));
                next[i][j].push(new Line(c, d));
                next[i][j].push(new Line(d, e));
            }
        }

    Kochs = next;


}
class Line {
    constructor(start, end) {
        this.start = start;
        this.end = end;
    }
    show() {
        line(this.start.x, this.start.y, this.end.x, this.end.y);
    }
    kochA() {
        return this.start.copy();
    }
    kochB() {
        let v = new p5.Vector.sub(this.end, this.start);
        v.div(3);
        v.add(this.start);
        return v;
    }
    kochC() {
        let a = this.start.copy();
        let v = p5.Vector.sub(this.end, this.start);

        v.div(3);
        a.add(v);
        v.rotate(-radians(60));
        a.add(v);
        return a;
    }
    kochD() {
        let v = new p5.Vector.sub(this.end, this.start);
        v.mult(2);
        v.div(3);
        v.add(this.start);
        return v;
    }
    kochE() {
        return this.end.copy();
    }
}
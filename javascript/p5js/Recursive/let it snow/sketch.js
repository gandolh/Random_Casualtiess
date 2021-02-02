Kochs = [];
/*
let it snow,faci pattern cu ei, si dupa poate ii faci sa pice si sa ii generezi random,why not?
*/
let zoom = 1,
    zoomPass = 0.01;
let scl = 150;
let cols, k = -1;

function setup() {
    createCanvas(windowWidth, windowHeight);

    let colora=color('#00d1ff');
    colora.setAlpha(120);
        fill(colora);
    noStroke();
    cols = width / scl;
    for (let i = 0; i < 1000; i++) Kochs[i] = [];
        createSnowFlake(random(width), -100, ++k);
}

function draw() {
       background('#3d6cb9');
    if (frameCount %50 == 0) createSnowFlake(random(width), -100, ++k);
    for (let i = 0; i < Kochs.length; i++) {
        push();
        if(Kochs[i][0]!= undefined){
        Kochs[i][0].update();
        translate(0,Kochs[i][0].pos); 
        }
        beginShape();
        for (let j = 0; j < Kochs[i].length; j++) {

            vertex(Kochs[i][j].start.x, Kochs[i][j].start.y);
        }
        endShape();
        pop();
        if(Kochs[i][0]!= undefined)if(Kochs[i][0].pos>height+100)Kochs.splice(i,1);
    }

}

function createSnowFlake(x, y, i) {

    let a = createVector(scl / 3 + x, 0+y);
    let b = createVector(0 + x, scl / 1.5+y);
    let c = createVector(scl / 1.5 + x, scl / 1.5+y);
    Kochs[i].push(new Line(b, a));
    Kochs[i].push(new Line(c, b));
    Kochs[i].push(new Line(a, c));
        
    for (let q = 0; q < 2;q++) generate(i);
}

function generate(i) {
    let next = [];
    for (let q = 0; q < Kochs.length; q++) next[q] = [];
        for (let j = 0; j < Kochs[i].length; j++) {
            let l = Kochs[i][j];
            let a = l.kochA();
            let b = l.kochB();
            let c = l.kochC();
            let d = l.kochD();
            let e = l.kochE();
            next[i].push(new Line(a, b));
            next[i].push(new Line(b, c));
            next[i].push(new Line(c, d));
            next[i].push(new Line(d, e));
        }
        next[i][0].vel=2;
    Kochs[i] = next[i];


}
class Line {
    constructor(start, end) {
        this.start = start;
        this.end = end;
        this.pos=0;
        this.vel=0;
    }
    update(){
        this.pos+=this.vel;
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
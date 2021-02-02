let Kochs = [];
let a,b;
let colors=['#a2a0bb','#c48d6a','#eab06a','#2a6872','#5d9d83'];
let snowflakesNumber;
/*
let it snow,faci pattern cu ei, si dupa poate ii faci sa pice si sa ii generezi random,why not?
*/
let zoom=1,zoomPass=0.01;
function setup() {
    createCanvas(windowWidth, windowHeight);
    strokeWeight(1);
    let shrink=-height/2-300;
    let shRatio=25;
    snowflakesNumber=72;
    for(let k=0;k<snowflakesNumber;k++)Kochs[k]=[];
    for(let k=0;k<snowflakesNumber;k++){
    shrink+=shRatio;
    let hShrink=sqrt(((-width/2+shrink)-(width/2-shrink))*((-width/2+shrink)-(width/2-shrink)) )/4;
     a=createVector(-width/2+shrink,0+hShrink);
     b=createVector(width/2-shrink,0+hShrink);
    let c= findPointByAngle(60); 
    //  snowflake
    Kochs[k].push(new Line(b,a));
    Kochs[k].push(new Line(c,b ));
    Kochs[k].push(new Line(a,c));

    }
    // weird stuff
    //     Kochs.push(new Line(a,b));
    // Kochs.push(new Line(b,c ));
    // Kochs.push(new Line(c,a));
    stroke(255);
    for(let i=0;i<5;i++) generate();
}
let ok=1;
function draw() {

    translate(width/2,height/2)

   if(zoom<=9) zoom+=zoomPass;
    background('#1b2f4a');
    noStroke();

   for(let i=0;i<snowflakesNumber;i++){
    beginShape();   
    fill(colors[i%colors.length]); 
    for (let j=0;j<Kochs[i].length;j++) {
        Kochs[i][j].show();
    }
    endShape();
   }

    noLoop();

}
function findPointByAngle(angle){
            let c =a.copy();
        let v = p5.Vector.sub(b,a);
     
        v.rotate(-radians(angle));
        c.add(v);
        return c;
}
 function generate() {
    for(let i=0;i<snowflakesNumber;i++){
    let next = [];
    for (let l of Kochs[i]) {
        let a = l.kochA();
        let b = l.kochB();
        let c = l.kochC();
        let d = l.kochD();
        let e = l.kochE();
        next.push(new Line(a, b));
        next.push(new Line(b, c));
        next.push(new Line(c, d));
        next.push(new Line(d, e));

    }
    Kochs[i] = next;
    }
    
}
class Line {
    constructor(start, end) {
        this.start = start;
        this.end = end;
    }
    show() {
        vertex(this.start.x,this.start.y);
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
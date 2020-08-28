let axiom = 'F+F+F+F';
let sentence = axiom;
let rules = [];
 rules[0] = {
    a: "F",
    b: "F+f-FF+F+FF+Ff+FF-f+FF-F-FF-Ff-FFF"
};
rules[1]={
	a:"f",
	b:"ffffff"
}
let len=30,angle;

function setup() {
    createCanvas(windowWidth,windowHeight);
    background(51);
    angle= radians(90);

    turtle();
}
function mousePressed(){
	generate();
}
function generate() {
    len*=0.5;
    var nextSentence = '';
    for (let i = 0; i < sentence.length; i++) {
        let found=false;
        var current = sentence.charAt(i);
        for (let j = 0; j < rules.length; j++) {
            if (current == rules[j].a) {
                found=true;
                nextSentence += rules[j].b;
                break;
            }
        }
            if(!found)nextSentence += current;
    }
    sentence = nextSentence;
  
    turtle();
} 
function turtle(){
    resetMatrix();
    background(51);
    stroke(255,100);
     translate(0,height);
    for (let i = 0; i < sentence.length; i++){
        let current= sentence.charAt(i);
        if(current=='F'){line(0,0,0,-len);
        translate(0,-len); }
        else if(current=='f')translate(0,-len);
        else if(current=='+')rotate(angle);
        else if(current=='-')rotate(-angle);
        else if(current=='[')push();
        else if(current==']')pop();

    }
}
function draw() {

}
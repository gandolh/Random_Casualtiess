let axiom = 'F';
let sentence = axiom;
let rules = [];
 rules[0] = {
    a: "F",
    b: "FF+[+F-F-F]-[-F+F+F]"
};
let len=100,angle;
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
    createP(sentence);
    turtle();
} 

function setup() {
    createCanvas(400,400);
    background(51);
  
    angle= radians(25);
    createP(axiom);
    let button = createButton('generate');
    button.mousePressed(generate);
    turtle();
}
function turtle(){
    resetMatrix();
    background(51);
    stroke(255,100);
     translate(width/2,height);
    for (let i = 0; i < sentence.length; i++){
        let current= sentence.charAt(i);
        if(current=='F'){line(0,0,0,-len);
        translate(0,-len); }
        else if(current=='+')rotate(angle);
        else if(current=='-')rotate(-angle);
        else if(current=='[')push();
        else if(current==']')pop();

    }
}
function draw() {

}
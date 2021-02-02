
let axiom = 'F';
let sentence = axiom;
let rules = [];
rules[0] = {
    a: "F",
    b: "F+G++G-F--FF-G+"
};
rules[1] = {
    a: "G",
    b: "-F+GG++G+F--F-G"
};

let len = 120, //len =790
    angle;

function setup() {
    createCanvas(windowWidth, windowHeight);

    background(51);
    angle = radians(60);

    turtle();
}

function mousePressed() {
    generate();
}

function generate() {
    len *= 0.5;
    var nextSentence = '';
    for (let i = 0; i < sentence.length; i++) {
        let found = false;
        var current = sentence.charAt(i);
        for (let j = 0; j < rules.length; j++) {
            if (current == rules[j].a) {
                found = true;
                nextSentence += rules[j].b;
                break;
            }
        }
        if (!found) nextSentence += current;
    }
    sentence = nextSentence;

    turtle();
}

function turtle() {
    resetMatrix();
    translate(width/2-100,height/2-100);

    background(51);
    stroke(255, 100);

    for (let i = 0; i < sentence.length; i++) {
        let current = sentence.charAt(i);
        if (current == 'F' || current=='G') {

            line(0, 0, 0, -len);
            translate(0, -len);
        } 
        // else if(current=='G'){
        // 	line(0,-len,0,0);
        // 	translate(0,-len); //si fara translate
        	
        // }
        else if (current == 'f') translate(0, -len);
        else if (current == '+') rotate(angle);
        else if (current == '-') rotate(-angle);
        else if (current == '[') push();
        else if (current == ']') pop();

    }
}

function draw() {

}
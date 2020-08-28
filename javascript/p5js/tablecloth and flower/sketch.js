
/*//flowerBouquet
let axiom = 'F-F-F-F';
let sentence = axiom;
let rules = [];
rules[0] = {
    a: "F",
    b: "FF-F-F-F-F-F+F"
};
*/

/*
//tablecloth
let axiom = 'F-F-F-F';
let sentence = axiom;
let rules = [];
rules[0] = {
    a: "F",
    b: "FF-F-F-F-FF"
};

*/

//weird
let axiom = 'F-F-F-F';
let sentence = axiom;
let rules = [];
rules[0] = {
    a: "F",
    b: "FF-F+F-F-FF"
};


let len =25,
    angle;

function setup() {
    createCanvas(windowWidth, windowHeight);

    background(51);
    angle = radians(90);

    turtle();
}

function mousePressed() {
    generate();
}

function generate() {
    //len *= 0.5;
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
    translate(width/2,height/2+300);

    background(51);
    stroke(255, 100);

    for (let i = 0; i < sentence.length; i++) {
        let current = sentence.charAt(i);
        if (current == 'F') {

            line(0, 0, 0, -len);
            translate(0, -len);
        } else if (current == 'f') translate(0, -len);
        else if (current == '+') rotate(angle);
        else if (current == '-') rotate(-angle);
        else if (current == '[') push();
        else if (current == ']') pop();

    }
}

function draw() {

}
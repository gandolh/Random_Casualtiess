let axiom = 'F1F1F1';
let sentence = axiom;
let rules = [];
rules[0] = {
    a: "0", //pre
    b: "0", //current
    c: "0", //post
    d: "1" //result
};
rules[1] = {
    a: "0",
    b: "0",
    c: "1",
    d: "1[-F1F1]"
};
rules[2] = {
    a: "0",
    b: "1",
    c: "0",
    d: "1"
};
rules[3] = {
    a: "0",
    b: "1",
    c: "1",
    d: "1"
};
rules[4] = {
    a: "1",
    b: "0",
    c: "0",
    d: "0"
};
rules[5] = {
    a: "1",
    b: "0",
    c: "1",
    d: "1F1"
};
rules[6] = {
    a: "1",
    b: "1",
    c: "0",
    d: "1"
};
rules[7] = {
    a: "1",
    b: "1",
    c: "1",
    d: "0"
};


let len = 12,
    angle;
let bgColor,
    strokeColor;

function setup() {
    bgColor = '#a1eafb';
    strokeColor = color('#071a52');
    strokeColor.setAlpha(100);
    createCanvas(windowWidth, windowHeight);
    // background(51);
    background(bgColor);
    angle = radians(22.5);

    turtle();
    for (let i = 0; i < 30; i++) generate();
}

// function mousePressed() {
//     generate();
// }

function generate() {
    //len *= 0.5;
    var nextSentence = '';
    for (let i = 0; i < sentence.length; i++) {
        let found = false;
        let current = sentence.charAt(i);
        let posterior, anterior;
        for (let k = 1; i - k >= 0; k++)
            if (sentence.charAt(i - k) == 0 || sentence.charAt(i - k) == 1) {
                anterior = sentence.charAt(i - k);break;
            }
        for (let k = 1; i + k <sentence.length; k++)
            if (sentence.charAt(i + k) == 0 || sentence.charAt(i + k) == 1) {
                posterior = sentence.charAt(i + k);break;
            }
        for (let j = 0; j < rules.length; j++) {
            if (current == rules[j].b && anterior == rules[j].a && posterior == rules[j].c) {
                found = true;
                nextSentence += rules[j].d;
                break;
            }
        

        }
        // console.log(anterior,current,posterior)
        if(current=='+'){ nextSentence +='-';found=true;}
        else if(current=='-') {nextSentence +='+';found=true;}
        if (!found) nextSentence += current;
    }
    sentence = nextSentence;
    // console.log(sentence);
    turtle();

}

function turtle() {
    resetMatrix();
    let nodeNumber = 0;
    translate(width / 2, windowHeight);
    // len *= 0.66;
    background(bgColor);
    stroke(strokeColor);
    // background(51);
    // stroke(255, 100);

    for (let i = 0; i < sentence.length; i++) {
        let current = sentence.charAt(i);
        if (current == 'F') {
            // if (sentence.charAt(i + 1) == ']' || sentence.charAt(i + 2) == ']');
   
            line(0, 0, 0, -len);
            translate(0, -len);
        } else if (current == 'f') translate(0, -len);
        else if (current == '+') rotate(angle);
        else if (current == '-') rotate(-angle);
        else if (current == '[') {
            push();
            nodeNumber++;
        } else if (current == ']') {
            pop();
            nodeNumber--;
        }

    }

}

function draw() {

}
let generation = 'A';
function setup() {
    createCanvas(windowWidth, windowHeight);
    background(51);
    stroke(255);
    translate(0,height)
    for (let i = 0; i <= 7; i++) {
        generate();

    }

    let scl = 4;
    for (let i = 0; i < generation.length; i++) {
        let char = generation.charAt(i);
        if (char == 'A' || char =='B') {
            line(0,0,scl,0);
            translate(scl, 0);
        } else if (char == '+') rotate(-radians(60));
        else if (char == '-') rotate(radians(60));
    }
}

function generate() {
    let next = '';
    for (let i = 0; i < generation.length; i++) {
        if (generation.charAt(i) == 'A') next += 'B-A-B';
        else if(generation.charAt(i)== 'B')next+= 'A+B+A';
        else next += generation.charAt(i);
    }
    generation = next;
}

class Centers {
    constructor(colora, colorb) {
        this.colora = colora;
        this.colorb = colorb;
    }
}
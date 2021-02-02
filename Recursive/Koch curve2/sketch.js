let generation = 'F';
let colors = [];

function setup() {
    createCanvas(windowWidth, windowHeight);
    background('#00076f');

    noStroke();
    for (let y = 0; y < 310; y++) {
        let randomSize = random(1, 4)
        let randomX = random(width)
        let randomY = random(height)
        noStroke()
        let rOpacity = map(randomSize, 1,4, 50, 200)
        let foo = color('#ffe4f2');
        foo.setAlpha(rOpacity);
        fill(foo);
        ellipse(randomX, randomY, randomSize, randomSize)
    }
    colors = [color('#44008b'), color('#9f45b0'), color('#e54ed0'), color('#ffe4f2')];
    translate(0, height);


    for (let i = 0; i <= 6; i++) {
        generate();

    }
    stroke(colors[3]);
    let scl = 1.5;
    for (let i = 0; i < generation.length; i++) {
        let char = generation.charAt(i);
        let ratio, curColor;
        if (char == 'F') {
            let n = 4;
            for (let j = 1; j <= n; j++) {
                if (i < j * generation.length / n) {
                    ratio = map(i, 0, j * generation.length / n, 0, 1);
                    curColor = lerpColor(colors[(j - 1) % colors.length], colors[j % colors.length], ratio);
                }
            }
            if (i < generation.length / 4) {
                ratio = map(i, 0, generation.length / 4, 0, 1);
                curColor = lerpColor(colors[0], colors[1], ratio);
            } else if (i < generation.length / 2) {
                ratio = map(i, generation.length / 4, generation.length / 2, 0, 1);
                curColor = lerpColor(colors[1], colors[2], ratio);
            } else if (i < 3 * generation.length / 4) {
                ratio = map(i, generation.length / 2, 3 * generation.length / 4, 0, 1);
                curColor = lerpColor(colors[2], colors[3], ratio);
            } else if (i < generation.length) {
                ratio = map(i, 3 * generation.length / 4, generation.length, 0, 1);
                curColor = lerpColor(colors[3], colors[0], ratio);
            }
            stroke(curColor);
            line(0, 0, scl, 0);
            translate(scl, 0);
        } else if (char == '+') rotate(-radians(90));
        else if (char == '-') rotate(radians(90));
    }
}

function generate() {
    let next = '';
    for (let i = 0; i < generation.length; i++) {
        if (generation.charAt(i) == 'F') next += 'F+F-F-F+F';
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
let minValue = -1.25,
    maxValue = 1.25,
    maxIterations = 100;
let color1, color2;

function setup() {

    // createCanvas(100, 100);
    //use really small sizez because rendering is a pain in the ass
    createCanvas(windowWidth, windowHeight);
    pixelDensity(1);
    loadPixels();
    for (let x = 0; x < width; x++) {
        for (let y = 0; y < height; y++) {
            let a = map(x, 0, width, minValue, maxValue);
            let b = map(y, 0, height, minValue, maxValue);
            let ca = a;
            let cb = b;
            let iteration;
            for (iteration = 0; iteration < maxIterations; iteration++) {
                let aa = a * a - b * b;
                let bb = 2 * a * b;
                // c from formula
                a = aa + ca; //ca is the x coordinate
                b = bb + cb; //cb is the y coordinate
                if (a * a + b * b > 16) break;
            }

            let bright = sqrt(iteration);
            bright = map(bright, 0.25, 10, 0, 255);
            // let bright = sqrt(iteration/maxIterations);
            // bright = map(bright, 0.25, 1, 0, 255);
            if (iteration == maxIterations) {
                bright = 0;


            }
            let pix = (x + y * width) * 4;

            pixels[pix] = bright;
            pixels[pix + 1] = bright;
            pixels[pix + 2] = 0;
            pixels[pix + 3] = 255;

        }

    }
    updatePixels();
    //background(51);

}
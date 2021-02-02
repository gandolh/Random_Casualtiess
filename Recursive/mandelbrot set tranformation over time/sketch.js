let minValue = -1.25,
  maxValue = 1.25,
  maxIterations = 1;

function setup() {
  createCanvas(200, 200);

  //background(51);
 
}
function draw(){
  if(frameCount%50==0 && maxIterations<=50){
    maxIterations++;
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

      var bright = 51;
      if (iteration == maxIterations) {
        bright = 0;
      }
      let pix = (x + y * width) * 4;
      pixels[pix] = bright;
      pixels[pix + 1] = bright;
      pixels[pix + 2] = bright;
      pixels[pix + 3] = 255;
    }
  }
  updatePixels();
  }
}
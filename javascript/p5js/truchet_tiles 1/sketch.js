let antWs,ws;
function setup() {
    ws=createSlider(1,10,5,1);
    ws.className="paramSlider";

    createCanvas(windowWidth, windowHeight);
}

function draw(){
    if(antWs!=ws.value()){
        colorMode(HSB);
        noFill();
        background(0);
        strokeWeight(ws.value());
        antWs=ws.value();
        stroke(255);
        for (let i = 0; i < height; i += 50) {
            push();
            for (let j = 0; j < width; j += 50) {
                let r = int(random(3));
                stroke(map(j,0,width,125,250),360,223);
                if (r == 1) {
                    arc(0, 0, 50, 50, 0, HALF_PI);
                    arc(50, 50, 50, 50, -PI, -HALF_PI);
                } else {
                    arc(0, 50, 50, 50, -HALF_PI, 0)
                    arc(50, 0, 50, 50, PI / 2, PI);
                }
                translate(50, 0);
            }
            pop();
        translate(0, 50);
        }
    }
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

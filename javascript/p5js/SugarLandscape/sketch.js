function setup() {
    //inspresus = windowHeight + 200;
    createCanvas(windowWidth, windowHeight);
    background('#a1eafb');
    ellipseMode(CENTER);
    noStroke();
    colors=[color(234, 125, 199),color(240, 144, 217),color(242, 162, 228),color(247, 232, 232)];
    cercuri(600, 10, 5,width/2,height+100,colors);
    colors=[color('#071a52'),color('#086972'),color('#17b978'),color('#a7ff83')];
    cercuri(400,-24,12,width/6,-100,colors);
    colors=[color('#f4fa9c'),color('#f469a9'),color('#ba53de'),color('#88bef5')];
     cercuri(300,-6,8,5*width/6,-100,colors);
}

function cercuri(cr, Yratio, crRatio,x,y,colors) {

    let crmin = 0,
        culoare = 0;
    while (cr > crmin) {
        fill(colors[culoare]);
        ellipse(x, y, cr);
        y -= Yratio;

        if (culoare == 3) culoare = 0;
        culoare++;
        cr -= crRatio;
    }
}

function draw() {


}
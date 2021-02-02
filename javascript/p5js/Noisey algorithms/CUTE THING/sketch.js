let movers = [];
let satelites=[];
function setup() {
    createCanvas(windowWidth, windowHeight);
    background(50);
    noStroke()
    createSystem(color(0, 255, 0),color(255,0,0),color(0,0,255),0)
    // createSystem(color(255, 255, 0),color(255,0,255),color(0,255,255),1)

    // for(let i=0;i<=4;i++){
    // 	let colors=[
    // 	color(255,0,0),
    // 	color(0,255,0),
    // 	color(255,255,0),
    // 	color(0,0,255),
    // 	color(0,255,255),
    // 	color(255,255,255)
    // 	]
    // 	createSystem(random(colors),random(colors),random(colors),i)
    // }

    // movers[0].show();
    // for(s of satelites){
    // 	s.move();
    // 	s.show()
    // }

}
function draw(){
	    // randomSeed(99);
	     // randomSeed(120);
	background(0,5);
    for (let m of movers) {
        m.show()
        m.move()
        
	    }
	for(s of satelites){
		s.move();
		s.show()

	}
}

function createSystem(c1,c2,c3,index){
    movers.push(new Mover(width / 2, height / 2, 50,c1 ))
    satelites.push(new Satelite(movers[index],-50,50,c2));
    satelites.push(new Satelite(movers[index],50,50,c3));
}
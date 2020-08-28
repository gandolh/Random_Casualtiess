let flock = [];
let flockCopy=[];

function setup() {
    createCanvas(windowWidth, windowHeight-30);
    alignSLider=createSlider(0,5,4,0.1);
    cohesionSlider=createSlider(0,5,4,0.1);
    separationSlider=createSlider(0,5,4,0.1);
   for(let i=0;i<=100;i++){
   	flock.push(new Boid());
   } 
}

function draw() {
    background(51);
    flockCopy=[...flock]
    for (let boid of flock){
      boid.edges();
      boid.flock(flockCopy);
    	boid.update();
    	boid.show();
    } 
}
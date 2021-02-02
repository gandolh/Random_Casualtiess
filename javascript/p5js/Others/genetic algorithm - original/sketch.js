let target,popmax,mutationRate,population;
let bestPhrase,allPhrases,stats;
function setup() {
	bestPhrase= createP("Best phrase:");
	bestPhrase.class("best");
	allPhrases= createP("All phrases:");
	allPhrases.position(600,10);
	allPhrases.class("all");
	stats=createP("Stats");
	target="to be or not to be.";
	popmax=200;
	mutationRate=0.01;
	//create population with a target phrase,mutation rate and a population max
	population= new Population(target,mutationRate,popmax);
}
function draw(){
	population.naturalSelection();
	population.generate();
	population.calcFitness();
	population.evaluate();
	if(population.isFinished())noLoop();
  displayInfo();
}

function displayInfo() {
  // Display current status of population
  let answer = population.getBest();

  bestPhrase.html("Best phrase:<br>" + answer);

  let statstext = "total generations:     " + population.getGenerations() + "<br>";
  statstext += "average fitness:       " + nf(population.getAverageFitness()) + "<br>";
  statstext += "total population:      " + popmax + "<br>";
  statstext += "mutation rate:         " + floor(mutationRate * 100) + "%";

  stats.html(statstext);

  allPhrases.html("All phrases:<br>" + population.allPhrases())
}
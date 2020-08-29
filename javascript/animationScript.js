/*for(let i=0;i<5;i++){
	let el=document.getElementsByClassName("dropdown-content");
	let an= document.createElement("a");
	an.className="option";
	an.innerHTML="Link";
	el[0].appendChild(an);

}
*/
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

let HardResetsButtons=document.getElementsByClassName("hardSettingsImg");
HardResetsButtons[0].addEventListener("click",function(){ //reset
	document.getElementById('iframeAnimation').src+='';
});
HardResetsButtons[1].addEventListener("click",function(){ //shuffle
	let anchors=document.getElementsByClassName('option');
	anchors[getRandomInt(anchors.length)].click();

});
HardResetsButtons[2].addEventListener("click",function(){ //sourceCode
	window.location.href='https://github.com/gandolh/Random_Casualtiess/tree/master/javascript/p5js';
});
HardResetsButtons[3].addEventListener(("click"),function(){ //fullscreen
	document.getElementById('iframeAnimation').requestFullscreen();
		document.getElementById('iframeAnimation').src+='';
});
let arr= document.getElementsByClassName("option");

for(let i=0;i<arr.length;i++){
	arr[i].addEventListener("click",function(){
		document.getElementById('active').id='';
		arr[i].id='active';
	switch(i){
		case 0:{
			document.getElementById('iframeAnimation').src='../javascript/p5js/truchet_tiles%201/index.html';
			// document.getElementById("drpbtn").innerHTML="Truchet Tiles 1";
			break;
		}
		case 1:{
			document.getElementById('iframeAnimation').src='../javascript/p5js/truchet_tiles%202/index.html';
			// document.getElementById("drpbtn").innerHTML="Truchet Tiles 2";
			break;
		}
		case 2:{
			document.getElementById('iframeAnimation').src='../javascript/p5js/truchet_tiles%203/index.html';
			// document.getElementById("drpbtn").innerHTML="Truchet Tiles 3";
			break;
		}
		case 3:{
			document.getElementById('iframeAnimation').src='../javascript/p5js/3dSpinners/index.html';
			// document.getElementById("drpbtn").innerHTML="3D Spinners";
			break;	
		}
		case 4:{
			document.getElementById('iframeAnimation').src='../javascript/p5js/autonomous%20agents/index.html';
			// document.getElementById("drpbtn").innerHTML="Autonomous agents";
			break;
		}
		case 5:{
			document.getElementById('iframeAnimation').src='../javascript/p5js/butterfly%20generator/index.html';
			// document.getElementById("drpbtn").innerHTML="Butterfly Generator";
			break;
		}
		case 6:{
			document.getElementById('iframeAnimation').src='../javascript/p5js/CircleExplode/index.html';
			// document.getElementById("drpbtn").innerHTML="Circle Explode";
			break;
		}
		case 7:{
			document.getElementById('iframeAnimation').src='../javascript/p5js/CirclesInCirclesInRGB/index.html';
			// document.getElementById("drpbtn").innerHTML="Circles in Circles in RGB";
			break;
		}
		case 8:{
			document.getElementById('iframeAnimation').src='../javascript/p5js/CirclesMoirePattern/index.html';
			// document.getElementById("drpbtn").innerHTML="Circles Moire Pattern";
			break;
		}
		case 9:{
			document.getElementById('iframeAnimation').src='../javascript/p5js/ColorsRandomGrid/index.html';
			// document.getElementById("drpbtn").innerHTML="Colors Random Grid";
			break;
		}
		case 10:{
			document.getElementById('iframeAnimation').src='../javascript/p5js/confetti/index.html';
			// document.getElementById("drpbtn").innerHTML="Confetti";
			break;
		}
		case 11:{
			document.getElementById('iframeAnimation').src='../javascript/p5js/CosmicFractal/index.html';
			// document.getElementById("drpbtn").innerHTML="Cosmic Fractal";
			break;
		}
		case 12:{
			document.getElementById('iframeAnimation').src='../javascript/p5js/doublePendulum/index.html';
			// document.getElementById("drpbtn").innerHTML="Double Pendulum";
			break;
		}
		case 13:{
			document.getElementById('iframeAnimation').src='../javascript/p5js/DoublePendulumFlower/index.html';
			// document.getElementById("drpbtn").innerHTML="Double Pendulum Flower";
			break;
		}
		case 14:{
			document.getElementById('iframeAnimation').src='../javascript/p5js/dragForce/index.html';
			// document.getElementById("drpbtn").innerHTML="Drag Force";
			break;
		}
		case 15:{
			document.getElementById('iframeAnimation').src='../javascript/p5js/dragon%20curve/index.html';
			// document.getElementById("drpbtn").innerHTML="Dragon Curve";
			break;
		}
		case 16:{
			document.getElementById('iframeAnimation').src='../javascript/p5js/fireFly/index.html';
			// document.getElementById("drpbtn").innerHTML="Firefly";
			break;
		}
		case 17:{
			document.getElementById('iframeAnimation').src='../javascript/p5js/flocking/index.html';
			// document.getElementById("drpbtn").innerHTML="Flocking";
			break;
		}
		case 18:{
			document.getElementById('iframeAnimation').src='../javascript/p5js/flowfield/index.html';
			// document.getElementById("drpbtn").innerHTML="Flowfield";
			break;
		}
		case 19:{
			document.getElementById('iframeAnimation').src='../javascript/p5js/flowfield%202.0.1/index.html';
			// document.getElementById("drpbtn").innerHTML="Flowfield 2.0.1";
			break;
		}
		case 20:{
			document.getElementById('iframeAnimation').src='../javascript/p5js/flowfield%202.0.2/index.html';
			// document.getElementById("drpbtn").innerHTML="Flowfield 2.0.2";
			break;
		}
		case 21:{
			document.getElementById('iframeAnimation').src='../javascript/p5js/flowfield%202.0.3/index.html';
			// document.getElementById("drpbtn").innerHTML="Flowfield 2.0.3";
			break;
		}
		case 22:{
			document.getElementById('iframeAnimation').src='../javascript/p5js/gaugasian-distribution/index.html';
			// document.getElementById("drpbtn").innerHTML="Gaugasian Distribution";
			break;
		}
		case 23:{
			document.getElementById('iframeAnimation').src='../javascript/p5js/gravitational-atraction/index.html';
			// document.getElementById("drpbtn").innerHTML="Gravitational Atraction";
			break;
		}
		case 24:{
			document.getElementById('iframeAnimation').src='../javascript/p5js/koch%20curve/index.html';
			// document.getElementById("drpbtn").innerHTML="Koch Curve";
			break;
		}
		case 25:{
			document.getElementById('iframeAnimation').src='../javascript/p5js/let%20it%20snow/index.html';
			// document.getElementById("drpbtn").innerHTML="Let it snow";
			break;
		}
		case 26:{
			document.getElementById('iframeAnimation').src='../javascript/p5js/mandelbrot%20designed/index.html';
			// document.getElementById("drpbtn").innerHTML="Mandelbrot designed";
			break;
		}
		case 27:{
			document.getElementById('iframeAnimation').src='../javascript/p5js/MoireRectRotate/index.html';
			// document.getElementById("drpbtn").innerHTML="Moire Rectangle Rotate";
			break;
		}
		case 28:{
			document.getElementById('iframeAnimation').src='../javascript/p5js/oddlySatisfying/index.html';
			// document.getElementById("drpbtn").innerHTML="Oddly Satisfying";
			break;
		}
		case 29:{
			document.getElementById('iframeAnimation').src='../javascript/p5js/oldCartoonIntro/index.html';
			// document.getElementById("drpbtn").innerHTML="Old Cartoon Intro";
			break;
		}
		case 30:{
			document.getElementById('iframeAnimation').src='../javascript/p5js/optical%20ilusion/index.html';
			// document.getElementById("drpbtn").innerHTML="Optical ilusion";
			break;
		}
		case 31:{
			document.getElementById('iframeAnimation').src='../javascript/p5js/overlappingCirclesGrid0/index.html';
			// document.getElementById("drpbtn").innerHTML="Overlapping Circles Grid0";
			break;
		}
		case 32:{
			document.getElementById('iframeAnimation').src='../javascript/p5js/overlappingCirclesGrid1/index.html';
			// document.getElementById("drpbtn").innerHTML="Overlapping Circles Grid1";
			break;
		}
		case 33:{
			document.getElementById('iframeAnimation').src='../javascript/p5js/overlappingCirclesGrid2/index.html';
			// document.getElementById("drpbtn").innerHTML="Overlapping Circles Grid2";
			break;
		}
		case 34:{
			document.getElementById('iframeAnimation').src='../javascript/p5js/overlappingCirclesGrid3/index.html';
			// document.getElementById("drpbtn").innerHTML="Overlapping Circles Grid3";
			break;
		}
		case 35:{
			document.getElementById('iframeAnimation').src='../javascript/p5js/particlesEffect/index.html';
			// document.getElementById("drpbtn").innerHTML="particles Effect";
			break;
		}
		case 36:{
			document.getElementById('iframeAnimation').src='../javascript/p5js/Penduls/index.html';
			// document.getElementById("drpbtn").innerHTML="Penduls";
			break;
		}
		case 37:{
			document.getElementById('iframeAnimation').src='../javascript/p5js/Penduls2/index.html';
			// document.getElementById("drpbtn").innerHTML="Penduls 2";
			break;
		}
		case 38:{
			document.getElementById('iframeAnimation').src='../javascript/p5js/Pink%20Mountain/index.html';
			// document.getElementById("drpbtn").innerHTML="Pink Mountain";
			break;
		}
		case 39:{
			document.getElementById('iframeAnimation').src='../javascript/p5js/PlantLSystem/index.html';
			// document.getElementById("drpbtn").innerHTML="Plant L-System";
			break;
		}
		case 40:{
			document.getElementById('iframeAnimation').src='../javascript/p5js/PolarCoordinates/index.html';
			// document.getElementById("drpbtn").innerHTML="Polar Coordinates";
			break;
		}
		case 41:{
			document.getElementById('iframeAnimation').src='../javascript/p5js/prison/index.html';
			// document.getElementById("drpbtn").innerHTML="Prison";
			break;
		}
		case 42:{
			document.getElementById('iframeAnimation').src='../javascript/p5js/random-walker/index.html';
			// document.getElementById("drpbtn").innerHTML="Random Walker";
			break;
		}
		case 43:{
			document.getElementById('iframeAnimation').src='../javascript/p5js/randomGenerativeArtWork/index.html';
			// document.getElementById("drpbtn").innerHTML="Random Generative Artwork";
			break;
		}		
		case 44:{
			document.getElementById('iframeAnimation').src='../javascript/p5js/recursivePattern/index.html';
			// document.getElementById("drpbtn").innerHTML="Recursive Pattern";
			break;
		}
		case 45:{
			document.getElementById('iframeAnimation').src='../javascript/p5js/SakuraFractalTree/index.html';
			// document.getElementById("drpbtn").innerHTML="Sakura Fractal Tree";
			break;
		}
		case 46:{
			document.getElementById('iframeAnimation').src='../javascript/p5js/sierpinski/index.html';
			// document.getElementById("drpbtn").innerHTML="Sierpinski";
			break;
		}
		case 47:{
			document.getElementById('iframeAnimation').src='../javascript/p5js/Sinus-wave/index.html';
			// document.getElementById("drpbtn").innerHTML="Sinus Wave";
			break;
		}
		case 48:{
			document.getElementById('iframeAnimation').src='../javascript/p5js/snowflake pattern/index.html';
			// document.getElementById("drpbtn").innerHTML="snowflake pattern";
			break;
		}
		case 49:{
			document.getElementById('iframeAnimation').src='../javascript/p5js/Solar-Sys/index.html';
			// document.getElementById("drpbtn").innerHTML="Solar system";
			break;
		}
		case 50:{
			document.getElementById('iframeAnimation').src='../javascript/p5js/sort/index.html';
			// document.getElementById("drpbtn").innerHTML="Sort";
			break;
		}
		case 51:{
			document.getElementById('iframeAnimation').src='../javascript/p5js/spideything/index.html';
			// document.getElementById("drpbtn").innerHTML="Spidey thing";
			break;
		}
		case 52:{
			document.getElementById('iframeAnimation').src='../javascript/p5js/spray/index.html';
			// document.getElementById("drpbtn").innerHTML="Spray";
			break;
		}
		case 53:{
			document.getElementById('iframeAnimation').src='../javascript/p5js/starfield/index.html';
			// document.getElementById("drpbtn").innerHTML="Starfield";
			break;
		}
		case 54:{
			document.getElementById('iframeAnimation').src='../javascript/p5js/SugarLandscape/index.html';
			// document.getElementById("drpbtn").innerHTML="Sugar Landscape";
			break;
		}
		case 55:{
			document.getElementById('iframeAnimation').src='../javascript/p5js/surfaceZoomSim/index.html';
			// document.getElementById("drpbtn").innerHTML="Surface Zoom Sim";
			break;
		}
		case 56:{
			document.getElementById('iframeAnimation').src='../javascript/p5js/The game of life/index.html';
			// document.getElementById("drpbtn").innerHTML="The game of life";
			break;
		}
		case 57:{
			document.getElementById('iframeAnimation').src='../javascript/p5js/tricky%20geometry/index.html';
			// document.getElementById("drpbtn").innerHTML="Tricky geometry";
			break;
		}
		case 58:{
			document.getElementById('iframeAnimation').src='../javascript/p5js/UniverseTriangle/index.html';
			// document.getElementById("drpbtn").innerHTML="Universe Triangle";
			break;
		}
	}
	});
}
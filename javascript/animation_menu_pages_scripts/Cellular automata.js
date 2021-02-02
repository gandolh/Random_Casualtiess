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
			document.getElementById('iframeAnimation').src='../../javascript/p5js/Cellular%20automata%20and%20L-system/codingchallenge-L-systems/index.html'
			break;
		}

		case 1:{
			document.getElementById('iframeAnimation').src='../../javascript/p5js/Cellular%20automata%20and%20L-system/PlantLSystem/index.html'
			break;
		}

		case 2:{
			document.getElementById('iframeAnimation').src='../../javascript/p5js/Cellular%20automata%20and%20L-system/prison/index.html'
			break;
		}

		case 3:{
			document.getElementById('iframeAnimation').src='../../javascript/p5js/Cellular%20automata%20and%20L-system/sierpinski/index.html'
			break;
		}

		case 4:{
			document.getElementById('iframeAnimation').src='../../javascript/p5js/Cellular%20automata%20and%20L-system/The game of life/index.html'
			break;
		}

		case 5:{
			document.getElementById('iframeAnimation').src='../../javascript/p5js/Cellular%20automata%20and%20L-system/wolfram CA/index.html'
			break;
		}

	}
	});
}
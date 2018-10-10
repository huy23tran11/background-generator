var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.querySelector("body");
var button = document.querySelector(".button");


function setGadient(){
	body.style.background = 	"linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
	css.textContent = body.style.background;
}

function randomColorGenerator(){
	var random1 = '#'+Math.floor(Math.random()*16777215).toString(16);
	var random2 = '#'+Math.floor(Math.random()*16777215).toString(16);

	console.log(random1);
	console.log(random2);	

	color1.setAttribute("value", random1);
	color2.setAttribute("value", random2);

	body.style.background = 	"linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
	css.textContent = body.style.background;
}

button.addEventListener("click", randomColorGenerator);

color1.addEventListener("input", setGadient);

color2.addEventListener("input", setGadient);

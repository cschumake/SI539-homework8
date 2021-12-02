// Variables!
var radius = 15;
var x = 50;
var y =150;

window.addEventListener("resize", () => {
	ctx.canvas.width = Math.round((window.innerWidth * 0.75));
	ctx.canvas.height = Math.round((window.innerHeight * 0.75));
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	setFill(RED);
}); 

var canvas = document.querySelector("#canvas")
var ctx = canvas.getContext("2d");
var colorPicker = document.querySelector("input");

// I would add more variables for x, y, radius, and color
const raidus = 5;
const RED = "#FF0000";
const GREEN = "#00FF00"; 
const BLUE = "#0000FF";
const YELLOW = "#FFFF00";

function draw(e) {
	ctx.beginPath(0);
	ctx.arc(e.x, e.y, radius, 0, 2 * Math.PI); 
	ctx.fill(); 
}

function setFill (color) {
	ctx.fillStyle = color;
}

//Listeners!!
//Add a listener for loading the window
//Add a listener for the color picker
//Add a listener for the mouse movement (started below)
//Add a listener for the key events (started below)
window.addEventListener('load', () => {
	ctx.canvas.width = Math.round((window.innerWidth * 0.75));
	ctx.canvas.height = Math.round((window.innerHeight * 0.75));
	setFill(RED);
})

colorPicker.addEventListener('input', (e)=> {
	setFill(colorPicker.value);
})


canvas.addEventListener('mousemove', draw);

//Add a listener for the keydown
document.addEventListener('keydown', (e) => {
	switch (e.key) {
		case "y":
			setFill(YELLOW);
			break; 
		case "r":
			setFill(RED);
			break; 
		case "b":
			setFill(BLUE); 
			break; 
		case "g":
			setFill(GREEN);
			break; 
		case " ":
			ctx.clearRect(0, 0, canvas.width, canvas.height);
			break;
		case "ArrowDown":
			canvas.addEventListener('mousemove', draw);
			break;
		case "ArrowUp":
			canvas.removeEventListener('mousemove', draw);
			break;
	}
})





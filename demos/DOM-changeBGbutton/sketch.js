'use strict'

let button;

function setup() {
	noCanvas();
	// make canvas full screen

	button = select('#butt');
	button.mousePressed(buttonPressed)


}


function buttonPressed(){
	let body;
	body = select('body');
	body.style('background-image', "url('../../assets/staticBG.jpg')")
}

function draw() {

	ellipse(mouseX, mouseY, 100);
}

let checkboxes = [];
let size = 100;

function setup() {
  createCanvas(windowWidth, windowHeight);

  for (let i = 0; i < 100; i++) {
    checkboxes[i] = createCheckbox('')
		checkboxes[i].style('display', 'inline');
		checkboxes[i].position(random(windowWidth), random(windowHeight));
		checkboxes[i].changed(myCheckedEvent);
  }
}

function myCheckedEvent(){
	size += 50;
}

function draw() {

  ellipse(mouseX, mouseY, size);
}

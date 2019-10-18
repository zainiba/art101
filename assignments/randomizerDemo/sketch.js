// dogs I have loved before
let dogs = [];

let randomIndex;
let animating = false;
let trolls = [];
let imageCounter = 0;
let startRandomizerButton;
let addMoreButton;
let cnv;
let nameInputs = [];
let firstTime = true;


function preload() {


  for (let i = 0; i <= 15; i++) {
    // trolls[i] = loadImage("assets/troll_" + i + ".JPG")
    trolls[i] = loadImage(`assets/troll_${i}.JPG`)
  }
}

function setup() {
  cnv = createCanvas(384, 512);
  cnv.parent("#canvasDiv");

  background(20, 40, 200);
  textSize(36);
  textFont('Courier new');
  textAlign(CENTER);
  textStyle(BOLD);
  fill(255);
  imageMode(CENTER);
  frameRate(8);


  startRandomizerButton = select('#randButton')
  startRandomizerButton.mousePressed(buttonPressed);

  addMoreButton = select('#addMoreButton')
  addMoreButton.mousePressed(addAnotherInput);


  for (let i = 0; i < 3; i++) {
    nameInputs.push(createInput());
    nameInputs[nameInputs.length - 1].parent("#inputFields");
  }
}


function draw() {

  if (animating == true) {
    clear();
    image(trolls[imageCounter], width / 2, height / 2);

    if (imageCounter < trolls.length - 1) {
      imageCounter++;
    } else {
      imageCounter = 0;
    }
  }

}

function addAnotherInput() {
  nameInputs.push(createInput());
  nameInputs[nameInputs.length - 1].parent("#inputFields");
}

function randomizer() {
  animating = false;
  if (dogs[0]) {
    // this displays random and splices it out of array
    // background(random(200, 255));
    clear();
    randomIndex = int(random(dogs.length));

    image(random(trolls), width / 2, height / 2);
    text(dogs[randomIndex], width / 2, height - 25);
    dogs.splice(randomIndex, 1);
  } else {
    background(20, 40, 200);
    text("nothing left!", width / 2, height / 2);
  }
}



function buttonPressed() {

  if (firstTime) {
    for (let i = 0; i < nameInputs.length; i++) {
      dogs.push(nameInputs[i].value());
    }
    firstTime = false;
  }

  animating = true;
  setTimeout(randomizer, 2000);
}

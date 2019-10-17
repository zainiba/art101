// dogs I have loved before
let dogs = [{
  name: "dillon",
  color: "dog treat color"
}, {
  name: "Ziggy",
  color: "chartrese"
}, {
  name: "mercedes",
  color: "poop"
}, {
  name: "petunia",
  color: "rose gold"
}, {
  name: "kloot",
  color: "coffee grind brown"
}, {
  name: "nala",
  color: "stardust"
}];

let randomIndex;
let animating = false;
let trolls = [];
let imageCounter = 0;

function preload() {

  for (let i = 0; i <= 15; i++) {
    trolls[i] = loadImage(`assets/troll_${i}.JPG`)
  }

}

function setup() {
  createCanvas(600, 600);
  background(20, 40, 200);
  textSize(36);
  textFont('Courier new');
  textAlign(CENTER);
  textStyle(BOLD);
  fill(255);
  imageMode(CENTER);
  frameRate(8);

  text("click to randomize", width/2, height/2);
  console.log(trolls);
}

function draw() {


  if (animating == true) {
    clear();
    image(trolls[imageCounter], width / 2, height / 2);

    if (imageCounter < trolls.length - 1) {
      imageCounter++;
      console.log(imageCounter);
    } else {
      imageCounter = 0;
    }
  }

}

function randomizer() {
  animating = false;
  if (dogs[0]) {
    // this displays random and splices it out of array
    // background(random(200, 255));
    clear();
    randomIndex = int(random(dogs.length));

    image(random(trolls), width / 2, height / 2);
    text(dogs[randomIndex].name, width / 2, height - 55);
    dogs.splice(randomIndex, 1);
  } else {
    background(20, 40, 200);
    text("nothing left!", width / 2, height / 2);
  }
}



function mousePressed() {
  animating = true;
  setTimeout(randomizer, 2000);
}

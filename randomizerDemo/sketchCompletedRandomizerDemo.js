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
let counter = 0;

function setup() {
  createCanvas(600, 600);
  background(200);
  textSize(24);

}

function draw() {

}

function randomizer() {
  if (counter <= 20) {
    counter++;
    animation();
    setTimeout(randomizer, 100);
  } else {
    // this displays random and splices it out of array
    background(150);
    randomIndex = int(random(dogs.length));
    text(dogs[randomIndex].name, 50, 50);
    dogs.splice(randomIndex, 1);
  }
}

function animation() {
  background(random(255), random(255), random(255));
  text(dogs[int(random(dogs.length))].color, 50, 50);
}

function mousePressed() {
  setTimeout(randomizer, 500);
}

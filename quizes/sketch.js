setTimeout(nested, millis);

function nested() {
  if (stillGoing) {
    setTimeout(nested, millis);
  } else {
    // all done
  }
}


let array = ["whoops", 5, "TIGER"];

array[2];


let object = {
  family: "mom1 and mom2 and grandma",
  internet: "offline",
  pet: "TIGER"
};

object.pet



let arrayOfObjects = [{
  family: "mom1 and mom2 and grandma",
  internet: "offline",
  pet: "TIGER"
}, {
  family: "twins and triplets",
  internet: "what internet?",
  pet: "demon"
}];

arrayOfObjects[0].pet

let arrayOfArrays = [
  ["dad", "mom", 5],
  ["whoops", "accident", "TIGER"],
  ["three"]
];

arrayOfArrays.slice()

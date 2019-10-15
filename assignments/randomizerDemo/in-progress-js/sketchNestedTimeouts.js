let roster = [{
  firstName: "Sam",
  lastName: "P.",
  favoriteColor: "Chartreuse"
}, {
  firstName: "Frankie",
  lastName: "J",
  favoriteColor: "Any color"
}, {
  firstName: "Taylor",
  lastName: "L.",
  favoriteColor: "Poop"
}, {
  firstName: "Avery",
  lastName: "Q.",
  favoriteColor: "Elation"
}, ];

let index;
let counter = 0;

function setup() {

  createCanvas(600, 600);
  background(40, 200, 80);



  // // weird how this console.log doesn't include the spliced item !!
  //   console.log(roster);
  //   index = Math.floor(random(roster.length));
  //   text(roster[index].firstName, 100, 100);
  //   roster.splice(index, 1);
  //
  //   console.log(roster);

  // weird how this console.log doesn't include the spliced item !!

  // splicing out a random item from the array
  
  console.log(roster);
  index = Math.floor(random(roster.length));
  text(roster[index].firstName, 100, 100);
  roster.splice(index, 1);

  console.log(roster);


  // recursive timeer
  // let timer = setTimeout(function animate() {
  //   if (counter < 5) {
  //     console.log("doing it");
  //     ellipse(counter * 50, height / 2, 100, 100);
  //     counter++;
  //   } else {
  //     console.log("done");
  //     console.log(counter);
  //   }
  //   setTimeout(animate, 1000);
  // }, 1000)


}

function draw() {

}

function mousePressed() {

  // recursive timeer
  let timer = setTimeout(function animate() {
    if (counter < 5) {
      console.log("doing it " + counter + " times");
      ellipse(counter * 50, height / 2, 100, 100);
      counter++;
      setTimeout(animate, 1000);
    } else {
      console.log("done. Counter is " + counter);
    }
  }, 1000)
}

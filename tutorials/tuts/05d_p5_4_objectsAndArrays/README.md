
# P5 Objects and Arrays



 ◇─◇──◇────◇────◇────◇────◇────◇─◇─◇
<br />

#### On this page:


1. Recommended tutorials
2. What is an array?
3. What is an object?
4. Arrays of objects
5. Class exercise: Array of rectangles

---
<br>

## ▼△▼△▼ Recommended tutorials

## Text-based

* MDN
  * [Mozilla Developer Network (MDN) intro to Arrays](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Arrays)
    - [MDN Array reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
  * [MDN intro to Objects](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics)

* JavaScript.info
  * [Documentation on objects](https://javascript.info/object)
  * [Documentation on arrays](https://javascript.info/array)

* [Allison Parish tutorial w/ executable code](https://creative-coding.decontextualize.com/arrays-and-objects/)


## Videos

Coding Train
* [7.1 What is an Array](https://www.youtube.com/watch?v=VIQoUghHSxU)

* [7.2 Arrays and loops](https://www.youtube.com/watch?v=RXWO3mFuW-I&t=1s)
* [7.3 Arrays of Objects](https://www.youtube.com/watch?v=fBqaA7zRO58)
<br>


## ▼△▼△▼ What is an array?

An array is an object that stores a list of comma-separated values.  

It is basically a super-handy way of storing multiple values in a single variable, so that you don't have to declare each one as a variable on its own. You can access each value of the array individually and loop over them. You can add elements to the beginning / end of arrays, splice things in and out of them, and more!

Arrays are constructed with square brackets. Inside the brackets are comma-separated values.

    // single variables
    let number1 = 3;
    let number2 = 5;
    let number3 = 8;

    // same 3 numbers stored in an array
    let numbers = [3, 5, 8];


You can access each value in an array through its index, the order it appears in the array.

In programming, counting starts at 0, not 1. So the first value in an array is at index 0.

To get the value at a particular index, use **bracket notation:** the name of the array followed by brackets containing the index number.

    let numbers = [3, 5, 8];

    // bracket notation accesses the first number of the array (index 0)

    numbers[0];
    // evaluates to 3

    numbers[2];
    // evaluates to 8


Arrays are easily manipulated. You can add items to the array, remove items, change existing items, splice the array in parts, etc.

Here is an example of an empty array that we can add things to.

    // empty array
    let emptyList = [];

    // add value to empty list at index 0
    emptyList[0] = "index 0";

    // add value to empty list at index 1
    emptyList[1] = "index 1";

    // now emptyList is no longer empty
    emptyList;
    //evaluates to ["index 0", "index 1"]

    // console.log to see it in your web console
    console.log(emptyList);


Better yet, we could add A LOT of things to an array using a single loop.

*What does this code do?*

    // empty array
    let listOfThrees = [];

    for (let i = 0; i < 33; i++) {
      listOfThrees[i] = i * 3;
    }

Note how the counter 'i' in the for loop becomes handy not only in accessing the array index, but also as a multiplier. Using this method, we could very quickly generate a large array.

    for (let i = 0; i < 1000; i++) {
      listOfThrees[i] = i * 3;
    }


#### Methods

Methods are functions that are particular to given objects and arrays. Like functions, you can declare your own and some are built-in.

To call a method on an array, use the array name followed by a period, then the method name followed by parenthesis.

.push() is a built-in method that add things to the end of an array.

    // start with an empty array
    let myShoppingList = [];

    // push items to the array
    myShoppingList.push("burgers");
    myShoppingList.push("pancakes");
    myShoppingList.push("kale");

    console.log(myShoppingList);
    // evaluates to ["burgers", "pancakes", "kale"];



View more methods on the [MDN Array reference page.](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

.push() adds item to end of array

.pop() will remove last item

.shift() adds item to start

.unshift() removes item from start

.splice() removes items from the array
<br>


#### Attributes

Arrays also have attributes you can access.  

.length will tell you how long an array is, and is useful for looping through an array.


    for (let i = 0; i < myShoppingList.length; i++) {
      console.log("I need a " + myShoppingList[i])
    }

<br>

#### Looping through arrays

You can loop through all the values of an array in a for loop!

This loop will log each array element to the console. The .length method will return the length of the array.


  for (let i = 0; i < array.length; i++){
    console.log(array[i]);
  }


Guess what!? There is also something called a forEach loop... It is a little more concise than writing out a for loop... check it out in JavaScript documentation online.

<br>
<br>

## ▼△▼△▼ What is an object?

Objects, like arrays, store multiple values. BUT values in the array are accessed by a 'key', not an index.

They are a list of key: value pairs.

Whereas arrays are defined in brackets [], objects are defined in curly brackets {} with comma-separated key: value pairs.

    let student = {
      firstName: "Cool",
      lastName: "Breeze",
      year: "Sophomore"
    }

*Worried you will forget? No fear! Remember you can refer to the [MDN docs](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics) as a reference.*

<br>

#### Access values in objects

You can access the values using **dot notation**. This is the name of the object, followed by a dot and the name of the key.

      student.firstName
      //evaluates to "Cool"

      console.log(student.firstName + " " + student.lastName + " is a " + student.year)

***Special note!*** In the console.log above, I joined together strings (words) with variables using the + sign. In JavaScript ES6 (the newer version), you can use backticks instead with variables declared inside ${}, and not use + signs at all.

This is called [template literal notation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals).

Using template literals, this is the same as the last console.log:

    console.log(`${student.firstName} ${student.lastName} is a ${student.year}`)

You might come across both of these, depending on when a tutorial was made.
<br>

#### Arrays of objects

One very common data structure is an array of objects.

For example, there is probably more than one student in a class.... so we might want to create an array with multiple student objects.

    // one student stored in object

    let student = {
      firstName: "Cool",
      lastName: "Breeze",
      year: "Sophomore"
    };

    // many student objects stored in an array

    let students = [{
        firstName: "Cool",
        lastName: "Breeze",
        year: "Sophomore"
      },
      {
        firstName: "Silent",
        lastName: "Moon",
        year: "Senior"
      },
      {
        firstName: "Ugly",
        lastName: "Curtain",
        year: "Junior"
      },
      {
        firstName: "Fluffy",
        lastName: "Tail",
        year: "Junior"
      },
    ];

Syntax: the outer 'students' variable is an array with brackets, and each array item is an object with curly brackets.

If we wanted to add a new students' info to the array, we could use the push method.

    students.push({firstName: "New", lastName: "Kid", year: "Freshman"});

    // print to console to see results
    console.log(students)

Now, if we wanted to print a class roster with their names, we could loop over the array.

Navigating through nested objects and arrays can get a little tricky. Just remember that things stack up from left to right.

Say we want the first name of the second student in the array. First we get the object for the second student, by accessing the second item in the array.

*Remember computers count from zero. An index of 1 is the second item in the array*

    students[1]


AND THEN add the dot notation (arrayName.keyName) to go inside the object. For example,

    students[1].firstName



If we want to print the whole class roster we can use a loop.

    console.log("CLASS ROSTER");

    for (let i = 0; i < students.length; i++) {
      console.log(i + ": " + students[i].firstName + " " + students[i].lastName)
    }

***Note:*** *I used a for loop because it is nice and legible, and you can access the index number through the variable i. Be aware that another way to do it is with the method [.forEach()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach) - you will probably see this in tutorials. It is a little quicker to type, but you don't get to use the variable 'i' as a counter*


<br>


## ▼△▼△▼ Exercise: Array of rectangles

#### Make rectangles appear where the mouse is clicked and fall down the screen.

Save mouse x and y positions in the mousePressed() function and push them to an array.

Use a for loop to draw the rectangles in the draw function, changing their y value in every loop.

Starting code here, finished code below...

  let rectangles = [];

  function setup() {
    createCanvas(500, 500);
  }

  function mousePressed() {
    // push an object with the mouse position and a random color
    // to the rectangles array
    rectangles.push({posX: mouseX, posY: mouseY, color: random(255)})
  }

  function draw() {
    background(200, 100, 50);

    // draw all rectangles every draw loop
    for (let i = 0; i < rectangles.length; i++) {

      // first, draw them by accessing the color and position properties of each object in the array
      // hint: you will use the fill() and rect() functions here

      // make them fall by changing their y position every loop

    }
  }

v
v
v
v
v
v
v
v
v
v
v
v
v
v
v
v
v
v
v
v
v
v

    let rectangles = [];

    function setup() {
      createCanvas(500, 500);
    }

    function mousePressed() {
      // push an object with the mouse position and a random color
      // to the rectangles array
      rectangles.push({posX: mouseX, posY: mouseY, color: random(255)})
      console.log(rectangles);
    }

    function draw() {
      background(200, 100, 50);

      // draw all rectangles every draw loop
      for (let i = 0; i < rectangles.length; i++) {
        fill(rectangles[i].color);
        rect(rectangles[i].posX, rectangles[i].posY, 100, 100);

        // make them fall by changing their y position every loop
        rectangles[i].posY += 2;
      }
    }

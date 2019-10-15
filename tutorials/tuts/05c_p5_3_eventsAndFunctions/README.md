
# P5 Events and functions



 ◇─◇──◇────◇────◇────◇────◇────◇─◇─◇
<br />

#### On this page:


1. Interaction: check for events with system variables
2. Interaction: built-in functions for events
3. Writing functions
4. Passing Arguments into a Function

---
<br>

## ▼△▼△▼ What are events?

Events occur when the user manipulates a webpage.

Clicking a button, pressing a key, loading a page, resizing a window are all events recognized by JavaScript.

They are the basis for interaction.

<br>




## ▼△▼△▼ Interaction: check for events with system variables

You can check to see if a mouse or keyboard event is true/false within the draw loop. These are boolean variables built into the p5 library: mouseIsPressed and keyIsPressed.

Check to see if mouse is pressed;

    function setup() {
      createCanvas(500, 500);
    }

    function draw() {
      background(200);

      // check to see if mouse is pressed to determine shape
      if (mouseIsPressed === true) {
        // draw bigger rectangle
        rect(25, 25, 50, 50);
      } else {
        // draw rectangle
        rect(25, 25, 100, 100);
      }
    }

<br>

Check if key is pressed:

    function setup() {
      createCanvas(500, 500);
      background(200);
    }

    function draw() {

      // check to see if any key is pressed to set fill color
      if (keyIsPressed === true) {
        fill(0);
      } else {
        fill(255);
      }
    }

<br>
Check what key is pressed:

    function setup() {
      createCanvas(500, 500);
      background(200);
    }

    function draw() {
      // check to see if a key is pressed AND then check for what key is pressed
      if (keyIsPressed === true) {
        // nested if statement checks to see what key is pressed
        if (key === 'a') {
          fill(0);
        } else if (key === 'b') {
          fill(255);
        }
      } else {
        fill(100);
      }

      // draw rectangle
      rect(25, 25, 50, 50);
    }

<br>
<br>

## ▼△▼△▼ Interaction: built-in functions for events

P5 has built-in functions for mousePressed() and keyPressed(), mouseMoved(), and many others! These are different than checking for events inside the draw loop. They are *functions* stated in the global scope (outside of setup and draw), and are triggered any time the event happens.

They are listed under the "events" category in the [p5 reference page online](https://p5js.org/reference/#group-Events).

***Note:*** *The double parentheses indicate they are functions*
<br>

**Mouse events:**

mouseDragged()

mouseReleased()

mouseClicked()


<br>

**Keyboard events**

For triggering events using keyboard keys, you can use the keyPressed() and keyTyped() functions.

[keyPressed()](https://p5js.org/reference/#/p5/keyPressed) works better for arrow keys, delete, return, etc.

    let fillColor = 0;

    function setup() {
      createCanvas(500, 500);
      background(200);
    }

    function draw() {
      fill(fillColor);
      rect(25, 25, 100, 100);
    }

    function keyPressed() {
      if (keyCode === LEFT_ARROW) {
        fillColor = 255;
      } else if (keyCode === RIGHT_ARROW) {
        fillColor = 0;
      }
    }

<br>
Use keyTyped() for alphanumeric keys.

    function keyTyped() {
      if (key === 'a') {
        fillColor = 255;
      } else if (key === 'b') {
        fillColor = 0;
      }
    }
<br>
<br>


## ▼△▼△▼ Writing functions

As you write more code, you will need to break it into parts for legibility and ease of debugging.

Blocks of code can be moved into functions that can be called at any time.

To write a function use the syntax:

    function myFunctionName() {
      // code to execute
    }

To call the function, use the name of the function followed by parentheses.

    myFunctionName();
<br>


## ▼△▼△▼ Passing arguments into a function

When you declare the function, you can pass arguments (also called parameters) into the function.


For example, if you knew you were going to draw a LOT of rectangles, but all in different shades of gray, you could pass the color into the function.


    function drawMyRectangle(\_color){
      fill(\_color);
      rect(100, 100, 100, 100);
    }


Then, when you *call* that function, you just fill in the color you want inside the function's paranthesis.

    // draw a white rectangle
    drawMyRectangle(255);

    // draw a grey rectangle
    drawMyRectangle(125);



## ▼△▼△▼ Exercise: Super Mario Clouds

The code to move the cloud is now in a user-defined move() function. The function move() is called in the draw loop whenever the mouse is pressed.

***Exercise:*** *In pairs, look at the code and describe what it is doing.*


    let clouds;
    let x = 0;
    let speed = 5;


    function preload() {
      clouds = loadImage('../../assets/superMarioClouds_0.png');
    }

    function setup() {
      createCanvas(500, 500);
    }

    function draw() {
      background(200);
      image(clouds, x, 10, clouds.width / 2, clouds.height / 2);
      if (mouseIsPressed) {
        move();
      }
    }


    function move() {
      // what movement would the below (commented out) line code create?
      // x++;

      // what movement does this execute?
      x = x + speed;
      if (x > width - 150 || x < -30) {
        speed = -speed;
      }
    }

<br>
<br>

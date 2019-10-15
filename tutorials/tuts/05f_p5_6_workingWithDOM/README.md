
# Interacting with HTML/CSS: Working with the DOM



 ◇─◇──◇────◇────◇────◇────◇────◇─◇─◇
<br />

#### On this page:

1. What is the DOM?
2. Run a p5 sketch full screen
3. (just notes... more coming soon!)


References and tutorials:

dom tut: https://github.com/processing/p5.js/wiki/Beyond-the-canvas

[p5.dom library now included as sub-section in main reference page](https://p5js.org/reference/#group-DOM)
---
<br>

## ▼△▼△▼ What is the DOM?

DOM stands for Document Object Model. It is a tree structure for identifying parts of a webpage. Each node is an object representing part of the document (ie. the body, the heading, a link, an image)

![DOM tree](assets/DOM-model.svg)

<br>

Using the [p5.dom library](https://p5js.org/reference/#group-DOM), you can have your p5 sketch interact with the HTML on a webpage. Without the p5.dom library, your p5 canvas is independent of the rest of the HTML. With access to the DOM, you can dynamically create buttons, input fields, sliders, headers, text, etc — outside the canvas.

Better yet, you can access user input and store them as variables in your p5 sketch.    

<br>



## ▼△▼△▼ Create Paragraphs

[createP()](https://p5js.org/reference/#/p5/createP)

ie. createP('this is some text');

- exercise in dynamically creating p elements
- write text to array then display in forloop

## ▼△▼△▼ Create buttons

[createButton()](https://p5js.org/reference/#/p5/createButton)

Note: In online demo, they store the button created in a variable... That way you can call methods to it! Like button.mousePressed() 

- try having something appear in canvas when button is pushed...


## ▼△▼△▼ Using input

[p5.dom library](https://p5js.org/reference/#/libraries/p5.dom)

input and button: https://p5js.org/examples/dom-input-and-button.html

- Users can input text and add to array


## ▼△▼△▼ Video

Work with video: https://p5js.org/examples/dom-video.html


## ▼△▼△▼ Class demo

Ties them all together! See demo in [demos folder](demos)

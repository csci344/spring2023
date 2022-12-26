---
layout: assignment-two-column
title: Practice with loops
type: tutorial
abbreviation: Tutorial 9
draft: 1
points: 4
num: 9
due_date: 2023-03-10
---


<a class="nu-button" href="/spring2023/course-files/tutorials/tutorial09.zip" target="_blank">
    Tutorial Starter Files <i class="fas fa-download"></i>
</a>  <a href="/spring2023/course-files/tutorials/tutorial09_answers.zip" class="button">Solutions <i class="fas fa-download"></i></a>

<img class="module-image" src="/spring2023/assets/images/tutorials/tutorial09/heart.png" />In this tutorial, you are going to design a customizable function that creates an image of **any** pixel art that can be represented as rows and columns of integers. The data structure that we will use to store these rows and columns of integers will be a "list of list" (see below). The purpose of this exercise is to help you feel a little bit more comfortable with list, iteration, and functions. In addition to pixel art, many different kinds of entities can also be expressed using similar data formats (JPEG images, songs, DNA sequences, whatever).

* <a href="https://docs.google.com/presentation/d/1eeo5pdP1l1gP_UyzfaMfWSO8visTGLXw-XgNwW08srU/edit?usp=sharing" target="_blank">Introductory Slides</a>

## Introduction: New Data Representations
Below are two examples of two "list of lists" that represent pixel art specifications. Note that "Frank" is made up of 11 rows and 9 columns, and the heart is 14 rows and 19 columns. Each number in the list of lists represents a distinct color. 0 indicates that no color should be used (an empty pixel), but you get to pick which colors to use to represent 1, 2, and 3.

```js
// Frank
const frank = [
    [0, 0, 1, 1, 1, 1, 1, 0, 0],
    [0, 0, 2, 2, 2, 2, 2, 0, 0],
    [0, 0, 2, 2, 2, 2, 2, 0, 0],
    [0, 0, 2, 1, 2, 1, 2, 0, 0],
    [0, 0, 2, 2, 2, 2, 2, 0, 0],
    [0, 2, 3, 3, 3, 3, 3, 2, 0],
    [0, 2, 2, 2, 2, 2, 2, 2, 0],
    [0, 2, 2, 2, 2, 2, 2, 2, 0],
    [0, 0, 1, 1, 1, 1, 1, 0, 0],
    [0, 0, 1, 1, 1, 1, 1, 0, 0],
    [0, 0, 2, 2, 0, 2, 2, 0, 0]
];

// Heart w/smiley face
const heart = [
    [0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 2, 2, 3, 1, 1, 1, 1, 1, 1, 1, 2, 2, 3, 1, 1, 1],
    [1, 1, 1, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 1, 1, 1],
    [1, 1, 1, 2, 2, 2, 1, 2, 1, 1, 1, 2, 1, 2, 2, 2, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
    [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0]
];
```


## Step 1: Update the "drawRow" function
Open `pixel-art/sketch.js` and take a look at it. Then preview `index.html` in the browser. You should see the first 6 rows of pixels for each
pixel art object (Frank and the heart). However, everything is being drawn
as a grey square. In other words, the color distinctions aren't being honored (see image below).

<img class="small frame" src="/spring2023/assets/images/tutorials/tutorial09/before.png" />

For your first task, you will modify the `drawRow` function -- in any way you can think of -- so that the function honors the color distinctions. Remember: a zero means that you shouldn't draw anything in that cell, but the 1, 2, and 3 can be any color that you choose (see image below).

<img class="small frame" src="/spring2023/assets/images/tutorials/tutorial09/partial.png" />

{:.blockquote-no-margin}
> **If you get stuck**: After you've given it a shot, take a look at `hints/hint1.js` to consider a few approaches that you might have tried (but of course, there are others).

## Step 2: Replace the repetitive drawRow function calls
Next, you will simplify the repetitive `drawRow` function calls (pictured below) with a "for loop." 

```js
 // first 6 rows of frank
drawRow(frank[0], 150, 150, 25);
drawRow(frank[1], 150, 175, 25);
drawRow(frank[2], 150, 200, 25);
...

// first 6 rows of the heart
drawRow(heart[0], 450, 350, 15);
drawRow(heart[1], 450, 365, 15);
drawRow(heart[2], 450, 380, 15);
...
```

You will use 2 "for loops" -- one for `frank` and one for the `heart`. When you're done, the entirety of Frank and the heart should be drawn (see image below).

<img class="small frame" src="/spring2023/assets/images/tutorials/tutorial09/step2.png" />

{:.blockquote-no-margin}
> **If you get stuck**: After you've given it a shot, take a look at `hints/hint2.js` to get a sense of how you might use a for loop to complete this task. Frank has been done for you. You try doing the heart.

## Step 3: Create a drawPixelArt function
Now, create a `drawPixelArt` function, with a function definition that looks like this:

```js
function drawPixelArt(grid, topX, topY, pixelWidth) {
    // your function body here
}
```

If the function is invoked as follows from within the `setup()` function...

```js
drawPixelArt(heart, 20, 20, 15);
drawPixelArt(frank, 120, 250, 12);
drawPixelArt(heart, 420, 250, 8);
drawPixelArt(heart, 55, 415, 6);
drawPixelArt(heart, 350, 135, 5);
drawPixelArt(frank, 315, 380, 15);
drawPixelArt(frank, 420, 10, 10);
```

...it will generate the image pictured below.

<img class="medium frame" src="/spring2023/assets/images/tutorials/tutorial09/step3.png" />

Note that the topX and topY parameters refer to the top-left corner of where the pixel art will be drawn.

{:.blockquote-no-margin}
> **If you get stuck**: After you've given it a shot, take a look at `hints/hint3.js` to get a sense of how you might implement your `drawPixelArt` function body.

## Step 4: Enhancements
If you have time, please complete the following enhancements:
1. Modify your function in a way that allows you to customize the color palette. In other words, the user should be able to choose which three colors to use for 1, 2, and 3 (see image below w/different hearts).
2. Create a third "list of lists" to represent a new pixel art drawing. To get ideas, Google "pixel art simple."

<img class="medium frame" src="/spring2023/assets/images/tutorials/tutorial09/final.png" />


## What to turn in (same deal as always)
To submit Tutorial 9, please paste the following links into the Moodle under the Tutorial 9 submission section:

1. A link to your **homepage** on GitHub pages, which should link to the drawing you made in tutorial 9 (tutorials/tutorial09/index.html). See <a href="https://vanwars.github.io/csci185-coursework" target="_blank">Sarah's Homepage</a> for an example.
    * Note that your homepage should also link to previous tutorials and homework you have done.
2. A link to your GitHub **code repository** (where your code files are stored).
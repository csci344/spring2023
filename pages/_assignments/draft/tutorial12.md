---
layout: assignment-two-column
title: Practice Quiz
type: tutorial
abbreviation: Tutorial 12
draft: 1
points: 4
num: 12
due_date: 2023-03-31
---

> ## Videos from Class
> * [Section 1](https://drive.google.com/file/d/1Ct3B5Xeif0PtuUS2q08ljWJlCxnRf8Y7/view?usp=sharing) (12:30-1:45PM)
> * [Section 2](https://drive.google.com/file/d/1OOPK51n6V8m1usgY7NQzjJfGMl5UUbe5/view?usp=sharing) (3:30-4:45PM)

## Introduction
The intent of this tutorial is to give you a sense of what Quiz 2 will cover and the types of questions that will be on it. The quiz will consist of two parts: 

1. **Code reading and interpretation.** This part will be completed in class, on paper. A sample of the questions you will be asked can be found <a href="https://docs.google.com/document/d/1m2GEY24tFEKS-dF_-RdwV9KygkTGIr1gV7zVlabpjG4/edit?usp=sharing" target="_blank">here</a>.
2. **Code writing.** This part will involve writing programs to accomplish various tasks, which we'll be practicing today.

A few notes:
* You are strongly encouraged to start working on this tutorial before Friday, to get the most out of it.
* To get credit for this tutorial, you must successfully complete **at least half of the exercises below**.
* Please download the starter files and save them in your `csci185/tutorials` folder:

<a href="/spring2023/course-files/tutorials/tutorial12.zip" class="nu-button">Download Tutorial Files <i class="fas fa-download"></i></a> 

## Code Writing Practice Questions

### 1. DOM Manipulation
Open the `exercise01` folder and add event handlers to all of the buttons. When a button is clicked, the color of the box below it should change to the color of the box (see demo below).

<img class="small frame" src="/spring2023/assets/images/tutorials/tutorial12/exercise01.gif" />

### 2. Functions
Open the `exercise02` folder and create a function called `drawShape` that draws two concentric circles of different colors (as shown below). The function should have the following parameters defined (in order):
1. `x` -- the x-coordinate of the center of the circle(s).
2. `y` -- the y-coordinate of the center of the circle(s).
3. `size` -- the diameter of the larger circle. 
4. `color1` -- the color of the larger circle.
5. `color2` -- the color of the smaller circle, which is 1/2 the diameter of the larger circle.

When I invoke your function as follows (within the `setup()` function)...

```js
drawShape(100, 100, 150, '#db5461', '#102e4a');
drawShape(200, 200, 75, '#102e4a', '#8093f1');
drawShape(100, 325, 100, '#8093f1', '#7fb285');
drawShape(250, 375, 125, '#7fb285', '#0bc9cd');
drawShape(450, 200, 250, '#0bc9cd', '#db5461');
```

...the image pictured below should be drawn to the screen:

<img class="small frame" src="/spring2023/assets/images/tutorials/tutorial12/exercise02.png" />

### 3. Loops
Open the `exercise03` folder. Inside of `main.js`, write a program, using any kind of loop you want, to output all of the restaurant names to the `<main id="output"></main>` tag of the `index.html` file. If you are successful, your screen should look like this:

<img class="small" src="/spring2023/assets/images/tutorials/tutorial12/exercise03.png" />

### 4. Loops + Conditionals

Open the `exercise04` folder. Inside of `main.js`, write a program, using any kind of loop you want, to output only the names of **pizza restaurants** to the `<main id="output"></main>` tag of the `index.html` file. You will have to filter your list by the `category` property of each restaurant. If you are successful, your screen should look like this:

<img class="small" src="/spring2023/assets/images/tutorials/tutorial12/exercise04.png" />

## What to Submit
Please commit and push your changes. Then, paste a link to your code repository (e.g., [https://github.com/vanwars/csci185-coursework](https://github.com/vanwars/csci185-coursework)) to the course Moodle under **Tutorial 12**.

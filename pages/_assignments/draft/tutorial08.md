---
layout: assignment-two-column
title: Conditionals and While Loops
type: tutorial
abbreviation: Tutorial 8
draft: 1
points: 4
num: 8
due_date: 2023-03-05
    
---

<style>
    blockquote.update {
        margin-top: 0;
        background-color: rgba(198, 236, 174, 0.5);
        border-color: rgb(148, 201, 169);
    }
    blockquote.update h2 {
        border-color: rgb(148, 201, 169);
    }
    blockquote.update a:hover {
        background-color: transparent;
    }
</style>

{:.update}
> ## In-Class Videos & Walkthrough
> ### Friday
* <a href="https://docs.google.com/presentation/d/1jEPGK2D80sn0hrLKi6V8Xwa560PR57aUeBRb488eOOw/edit?usp=sharing" target="_blank">Slides for 10/7</a>
> * <a href="https://drive.google.com/file/d/1mPOSJocsS15Ij1ePMDG8ZcSHqLgXAsvV/view?usp=sharing" target="_blank">Recording Section 1</a> (12:30-1:45PM)
> * <a href="https://drive.google.com/file/d/1mbDgtI1ww2VOT66wjoyQWTdRuMqU4v9D/view?usp=sharing" target="_blank">Recording Section 2</a> (3:30-4:45PM)
>
> ### Monday
> * <a href="https://docs.google.com/presentation/d/1KcgHgemtRKN1Vv-d_77gxkH5AmQinQ6KryhYldwrdNI/edit?usp=sharing" target="_blank">Slides for 10/10</a>
> * <a href="https://drive.google.com/file/d/1kopIRKwQwE9wz4wzBlqZFOh0thdsTKK4/view?usp=sharing" target="_blank">Recording Section 1</a> (12:30-1:45PM)
> * <a href="https://drive.google.com/file/d/15QyJ7oUP00M4j4bCm7oxFvX8d_9MKXEL/view?usp=sharing" target="_blank">Recording Section 2</a> (3:30-4:45PM)


<a class="nu-button" href="/spring2023/course-files/tutorials/tutorial08.zip" target="_blank">
    Tutorial Starter Files <i class="fas fa-download"></i>
</a> <a href="/spring2023/course-files/tutorials/tutorial08_answers.zip" class="button">Solutions <i class="fas fa-download"></i></a>

> ## Due Monday at Midnight
> We will begin working on this Tutorial in class on Friday. But, we may also work on it on Monday, and so it is due at midnight on Monday, 10/10.

The goal of this tutorial is to get you comfortable with if/else statements and while loops. Both of these types of statements are very powerful. HW4 (forthcoming) will be based on ideas from this tutorial.

## Part 1: Number Guessing Game
Open the `number-game` folder and write a program that implements a number guessing game. **The game already does the following**:

{:.compact}
* Picks a number between 1 and 100 using JavaScript's built-in random function.
* Provides a textbox for the user to guess a number between 1 and 100.
* Attaches an event handler to the button to check if the number matches the number.

Your job is to finish the game by implementing the following features:

{:.compact}
1. If the user enters a number is too low, display a message to the screen that tells the user the number is too low.
2. If the number is too high, display a message to the screen that tells the user the number is too high.
3. If they guess the number correctly:
  * Tell them that they guess correctly.
  * Tell them the number of guesses it took to guess correctly.
  * Display a congratulations image / emoji / animated gif.
  {:.compact}

### Hints

{:.compact}
1. You will need a variable to track the number of guesses.
1. You will need a variable to store the user’s guess.
1. You will need some combination of if, else if, and/or else statements to check whether the user’s guess is too low or too high. There are many ways to do this.


## Part 2: Simplify the vertical circles program [loops preview]
1. Open `circles` 
2. See if you can use a while loop to recreate this functionality, where there is only one makeCircle function call that is repeated within a while loop.

<img class="frame" style="width: 100px;" src="/spring2023/assets/images/tutorials/tutorial08/vertical_circles.png" />

### Hints

{:.compact}
1. You will need to initialize a counter.
2. You will need to make use of the counter to position the y-coordinate of the circle.


## Extra Challenges: Drawing with Loops
Practice creating the following shapes using a while loop. The first two shapes are recommended for everyone. The last three (4 cones and spirograph) are optional. Feel free to Google around for ideas of how you might implement them.

<img class="med-lg center frame" src="/spring2023/assets/images/tutorials/tutorial08/shapes.png" />

## Hints
**Q: What do you want to repeat?**<br>The circle function.

**Q: How long to you want to repeat?**<br>Until all of the circles in the picture are drawn.

**Q: What changes each time?**<br>Varies (depending on the drawing).


## What to turn in 
To submit Tutorial 8, please paste the following links into the Moodle under the Tutorial 8 submission section:

1. A link to your **homepage** on GitHub pages, which should link to:
    1. The number guessing game
    2. The circle drawings
2. A link to your GitHub **code repository** (where your code files are stored).

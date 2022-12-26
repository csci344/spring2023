---
layout: assignment-two-column
title: HTML5 & CSS3 Flourishes
type: tutorial
abbreviation: Tutorial 5
draft: 1
points: 4
num: 5
due_date: 2023-02-10
---

<style>
    .compact li {
        line-height: 1.5em;
    }
</style>

<a href="/spring2023/course-files/tutorials/tutorial05.zip" class="nu-button">Download Tutorial Files <i class="fas fa-download"></i></a> <a href="/spring2023/course-files/tutorials/tutorial05_answers.zip" class="button">Solutions <i class="fas fa-download"></i></a> <a href="https://drive.google.com/file/d/1wcFfsEN_2gXQyPd_gQJbiYQKpnTm44Xx/view?usp=sharing" class="button" target="_blank">Video Recording</a> 

Today will be our last day of formal HTML & CSS instruction, though you will still be using both HTML and CSS for the duration of the course. Specifically, we will explore a few ways of enhancing your visual design using some additional HTML5 language features (audio, video, geolocation) and CSS properties (background effects, pseudoclasses, transitions, and keyframes). 

* [Slides: HTML & CSS Extras](https://docs.google.com/presentation/d/1rGWCmbNLIx049tkfq_7_15rGMMnyYO4MSkKp7ER7vwU/edit?usp=sharing)


## Your Task
To get credit for today's tutorial, please attempt **ONE** of the following three options:

1. [Background image effects](#option1)
2. [Transitions](#option2)
3. [Keyframe animations](#option3)
    {:.compact}

{:#option1}
### Option 1: Background Image Effects

#### 1. Uncomment the relevant CSS properties
Inside of the `your-task` downloads folder, open `01-background-images`, and take a look at the HTML and CSS files to get oriented with them. Then, before making any changes to the code, preview the `index.html` page in your web browser.
    
After previewing your webpage, **uncomment** the following lines inside your `styles.css` file within your `header` style block. 

```css
  /* background-image: url('solar-eclipse.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position-x: center;
    background-position-y: center; */
```

When you're done, preview the page, noting what changed. You should now see a background image in your `header` of a solar eclipse.

Next, uncomment the following lines within your `#section2` style block:

```css
/* background-image: url('solar-eclipse-multiples.jpg');
background-repeat: no-repeat;
background-position: center right;
background-size: contain;
background-attachment: fixed; */
```

When you're done, preview the page. You should now see a background image of a series of photos of an eclipse behind a box of white text. The image should be anchored as you scroll. 
* Note that if you remove the `background-attachment: fixed;` declaration, the background image will move with the scroll bar (no anchoring). Try it!

#### 2. Add Custom Images
Customize this page with your own background images.

* If you're looking for free images, check out: 
    * <a href="https://www.pexels.com/" target="_blank">pexels.com</a>
    * <a href="https://unsplash.com/" target="_blank">unsplash.com</a>
    {:.compact}
* When you've found some images that you like, save them inside of the `01-background-images` folder, and update the background-image file paths to point to your files. 
* If you want to explore some of the other background properties, take a look at <a href="https://www.w3schools.com/cssref/css3_pr_background.asp" target="_blank">W3 Schools</a>


#### 3. Try Out the Filters
If you have time, also try playing with some of the background filters. Here is a <a href="https://www.w3schools.com/cssref/css3_pr_filter.asp" target="_blank">list of available filters</a> (also on W3 Schools).  The options for the filter property are:

* none
* blur()
* brightness()
* contrast()
* drop-shadow()
* grayscale()
* hue-rotate()
* invert()
* opacity()
* saturate()
* sepia()
* url()
{:.compact}

Hint: try adding `filter: invert(180);` to the `header` style block in your CSS file to see what happens.


{:#option2}
### Option 2: Transitions

#### 1. Uncomment the relevant CSS style blocks
Inside of the `your-task` downloads folder, open `02-transitions`, and take a look at the HTML and CSS files to get oriented with them. Then, before making any changes to the code, preview the `index.html` page in your web browser.

After previewing your webpage, **uncomment** the following lines inside your `styles.css` style block:

```css
/*
#section1 {
    background: #0c7474;
    color: white;
    transition: all 0.3s ease-out;
}

#section1:hover {
    background: purple;
    width: 220px;
    height: 220px;
}
*/
```

When you're done, preview the page, noting what changed. When you hover over the first section, you the section should grow and change color (horray)! 

#### 2. Create two more transition effects
Your job is to experiment with the other two section tags (`#section2` and `#section3`) by making some interesting interactions, using transitions. Some tips:

1. To make a <a href="https://www.w3schools.com/css/css3_transitions.asp" target="_blank">transition</a>, you define a transition inside of a style block (e.g., `#section1`) as follows: `transition: <property> <duration> <timing-function> <delay>;` Examples:
    * transition: all 0.3s ease-out;
    * transition: background 1s ease-in;
    * transition: all 3s linear;
    * transition: all 0.3s ease;
    {:.compact}
2. Some properties that you may want to change:
    * border-radius
    * margin
    * padding
    * width
    * height
    * border-width
    * background-color
    * rotation
    * opacity
    * <a href="https://www.w3schools.com/css/css3_2dtransforms.asp" target="_blank">transform</a>. Examples<br>transform: skewX(20deg);<br>transform: rotate(-10deg);
    {:.compact}

Feel free to look at `sample-files/02-pseudo-classes` and `sample-files/03-transitions` to get ideas.

{:#option3}
### Option 3: Keyframes

#### 1. Uncomment the relevant CSS style blocks
Inside of the `your-task` downloads folder, open `03-keyframes`, and take a look at the HTML and CSS files to get oriented with them. Then, before making any changes to the code, preview the index.html page in your web browser. You should see one cloud moving from left to right.

After previewing your webpage, **uncomment** the following two blocks of code lines inside your `styles.css`:

Inside of #cloud2:
```css
/*  animation-timing-function: linear;
    animation-iteration-count: infinite; 
    animation-name: moveCloudLeft;
    animation-delay: 3s;
    animation-duration: 5s; 
*/
```

Keyframe the bottom:
```css
/* @keyframes moveCloudLeft {
    from { 
        left: calc(100vw + 100px); 
    }
    to { 
        left: -100px; 
    }
} */
```

When you’re done, preview the page, noting what changed. You should now see a second cloud moving from right to left.

#### 2. Play around with the existing animation

1. Try experimenting with the `animation-delay`, `animation-duration`, and `animation-timing-function` (ease-in, ease-out, ease, etc.) to change the speed and timing of the animation.
2. See if you can make `#cloud2` change to a darker gray and get larger as it moves across the screen.
    * Hint: Add some additional style rules to the `to {}` block of the `moveCloudLeft` keyframe.

#### 3. Create a sunrise
See if you can make the circle on the bottom rise to the top (like a sunrise). To do this, you will have to define a new keyframe at the bottom of your stylesheet, and apply the keyframe to the `#sun` selector.

## What to Submit
**Please Read Carefully:** To submit Tutorial 5, please paste the following links into the Moodle under the Tutorial 5 submission section:

1. A link to your **homepage** on GitHub pages, which should link to the task you completed for Tutorial 5 (using a relative path). See <a href="https://vanwars.github.io/csci185-coursework" target="_blank">Sarah's Homepage</a> for an example.
    * Note that your homepage should also link to previous tutorials and classwork you have done.
2. A link to your GitHub **code repository** (where your code files are stored).

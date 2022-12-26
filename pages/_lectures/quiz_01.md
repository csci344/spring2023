---
layout: two-column
show_schedule: 1
title: "Quiz 1: HTML & CSS"
type: quiz
draft: 0
num: 1
due_date: 2023-02-06
# exercise_url: "quiz01.zip"
---

<style>
    img.small {
        max-width: calc(50% - 40px);
        margin: 15px;
        border: solid 1px #CCC;
        padding: 5px;
    }

    img.medium {
        max-width: 60%;
        border: solid 1px #CCC;
        padding: 5px;
    }
</style>

## 1. Ground Rules (Please Read Carefully)
Quiz 1 is a take-home quiz. You will have ~36 hours to complete it. You may begin working on the quiz as soon as it is posted (Wednesday, 9/14 at 8AM). It is due on **Thursday (9/15) at 11:59PM.** No quizzes will be accepted after this time. You may work on the quiz on Wednesday during regularly scheduled class time in Zeis Hall, Rm. 203. Sarah will be there to answer any clarifying questions, but will not be able to answer any content-related questions.

### What is Allowed and Disallowed
* You **MAY** use the course website, as well as any notes, lecture files, or internet reference materials to complete the quiz.
* You **MAY NOT** discuss the quiz with anyone or collaborate in any way with anyone. This is an individual assessment.

### Study Resources
1. Review the <a href="https://docs.google.com/document/d/1YSsjfQ8-Vp-dmho31rz2oz3X88kxpLDg44q8tJGLzxM/edit?usp=sharing" target="_blank">Study Guide</a>
2. Become very comfortable with the exercises from [Tutorial 4](../assignments/tutorial04). Think of Tutorial 4 as the practice quiz. 

## 2. Your Tasks
Please download the starter files (below) and complete the 4 sets of tasks described below. Read the instructions that are outlined under each task **very carefully.** You must complete each exercise exactly as the instructions indicate to receive full credit. Otherwise, you will receive partial credit for the parts you correctly completed.

<a href="/spring2023/course-files/quizzes/quiz01.zip" class="nu-button">Quiz 1 Starter Files <i class="fas fa-download"></i></a> <a href="/spring2023/course-files/quizzes/quiz01_answers.zip" class="button">Quiz 1 Solutions <i class="fas fa-download"></i></a>

### [30pts] Task 1. Linking to Pages & Media Using Relative & Absolute Paths

For Task #1, You will be creating the website shown in <a href="https://drive.google.com/file/d/1tUF1rB-0q2iHU6vUaITRbd1Uy6ZAoO16/view?usp=sharing" target="_blank">this video</a> and pictured in the screenshots below.

<img class="small" src="/spring2023/assets/images/quizzes/quiz01/home.png" /> <img class="small" src="/spring2023/assets/images/quizzes/quiz01/mammals.png" /> <img class="small" src="/spring2023/assets/images/quizzes/quiz01/reptiles.png" /> <img class="small" src="/spring2023/assets/images/quizzes/quiz01/sea-creatures.png" />


To do this, open the `task01` folder. You should see a file structure that looks like this:

```shell
task01
├── images
│   ├── mammals
│   │   ├── fox.jpeg
│   │   ├── lion.jpg
│   │   ├── monkey.jpg
│   │   ├── squirrel.jpg
│   │   ├── tiger.png
│   │   └── zebra.jpeg
│   ├── reptiles
│   │   ├── chameleon.jpeg
│   │   └── turtle.jpeg
│   └── sea-creatures
│       ├── fish
│       │   └── fish.png
│       └── other
│           └── jellyfish.jpeg
├── index.html
├── pages
│   ├── mammals.html
│   ├── reptiles.html
│   └── sea-creatures.html
└── styles.css
```

Then, complete the 4 subtasks:


{:.checkbox-list}
* **[5pts]** Modify `index.html`, `mammals.html`, `reptiles.html`, and `sea-creatures.html` so that each page links to the `styles.css` stylesheet.
* **[10pts]** Modify the hyperlinks inside of the `<nav>` sections of `index.html`, `mammals.html`, `reptiles.html`, and `sea-creatures.html` so that every HTML page links to every other HTML page **using relative paths**. 
    * In case it isn't clear, the hyperlink associated with the "Home" link text should link to `index.html` (see the video above for a demo).
* **[10pts]** Add images to `mammals.html`, `reptiles.html`, and `sea-creatures.html` inside of the `<section class="photo-container"></section>` tag. Ensure that you are using **relative paths** to the corresponding image in the `images` folder.
    * Mammals should display 6 images (fox, lion, monkey, squirrel, tiger, and zebra).
    * Reptiles should display 2 images (chameleon and turtle).
    * Sea Creatures should display 2 images (fish and jellyfish).
* **[5pts]** Inside of `mammals.html`, `reptiles.html`, and `sea-creatures.html`, add a hyperlink to a Wikipedia page where you can learn more about each animal category. You will do this above the `<section class="photo-container"></section>` tag but still inside of the `<main></main>` tag.
    * `mammals.html` should have a link to: https://en.wikipedia.org/wiki/Mammal.
    * `reptiles.html` should have a link to: https://en.wikipedia.org/wiki/Reptile.
    * `sea-creatures.html` should have a link to: https://en.wikipedia.org/wiki/Marine_life.

### [30pts] Task 2. CSS Selectors
For Task #2, you will be creating the webpage shown in <a href="https://drive.google.com/file/d/1dqZdvTELzxYBOoTtsxxa30IEvw_MAKT5/view?usp=sharing" target="_blank">this video</a> and pictured below.

<img class="medium" src="/spring2023/assets/images/quizzes/quiz01/task02-1.png" /> 
<img class="medium" src="/spring2023/assets/images/quizzes/quiz01/task02-2.png" />

To do this, open the `task02` folder and complete the tasks below. You may only edit the stylesheet (`styles.css`). **Do not edit anything inside `index.html`.** Note that there are many ways to come up with a correct answer.

{:.checkbox-list}
* **[5pts]** Give the main section some margin on the left and right sides so that it looks like the image shown above (try `15vw`).
* **[5pts]** Set the background color of the first, third, and fifth cards to `#EEEEEE`.
* **[5pts]** Set the background color of the second, fourth, and sixth cards to `#BCE5D6`.
* **[5pts]** Make the images inside the first, third, and fifth card circular.
* **[5pts]** Set the font family of all of the text to `'Courier New'`. Remember that fonts cascade, so you could just set it in one place (but there are many other ways to do it as well).
* **[5pts]** Set the font weight of the **first paragraph** and the **paragraph inside the footer** to bold. The paragraphs inside the cards should **NOT** be bold.


### [20pts] Task 3. Flexbox
Open the `task03` folder and use flexbox to produce the layout shown below. 

* You may only edit the stylesheet (`styles.css`). **Do not edit anything inside `index.html`.**
* Centering the text horizontally and vertically within each `section` tag is optional.

<img class="medium" src="/spring2023/assets/images/quizzes/quiz01/task03.png" />

### [20pts] Task 4. CSS Grid
Open the `task04` folder and use CSS Grid to produce the layout shown below (note that the gridlines in the second images are just to help you understand the layout).

* You may only edit the stylesheet (`styles.css`). **Do not edit anything inside `index.html`.**
* Centering the text horizontally and vertically within each `section` tag is optional.

<img class="medium" src="/spring2023/assets/images/quizzes/quiz01/task04.png" />

<img class="medium" src="/spring2023/assets/images/quizzes/quiz01/task04-gridlines.png" />


## 3. What to Turn In
Please doublecheck to make sure you've completed the 4 tasks described above, and all of the subtasks. When you're done:

1. Zip your entire `quiz01` folder that contains a **COMPLETED** version of all 4 tasks. In other words, don't accidentally submit the starter files or you will not receive any credit for the quiz.
2. Upload the `quiz01.zip` you just made to the course Moodle under **Quiz 1.**
---
layout: assignment-two-column
title: "JavaScript: Practice with higher-order iteration functions"
type: tutorial
abbreviation: Tutorial 5
draft: 0
points: 6
num: 5
due_date: 2023-02-10
---

For Tutorial 5, you will make a UNCA Course Search interface for the Computer Science Department that works like this:

<a href="https://vanwars.github.io/csci344/tutorials/tutorial05_solutions/index.html" target="_blank">Demo</a>

Please download the starter files below and then complete the following tasks:

<a href="/spring2023/course-files/tutorials/tutorial05.zip" class="nu-button">Tutorial 5 Starter Files<i class="fas fa-download"></i></a> 

## I. Implement the helper functions

### 1. Filter functions
Implement two filter functions (which should return either true or false):
* `filterClassFull`: to filter out the closed courses (if applicable)
* `filterTermMatched`: to only match courses relevant to the search term

#### Tips
1. Use some of the <a href="https://www.javascripttutorial.net/javascript-string-methods/" target="_blank">JavaScript built-in string methods</a>. It also might be useful to convert everything to uppercase / lowercase. Some particularly useful methods to checkout:
    {:.compact}
    * includes()
    * toUpperCase()
    * toLowerCase()
1. The filter must conform to one of the [function signatures specified in the JavaScript language](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter).

```js
// Part 1.1a
const filterClassFull = course => {
    // modify this
    return true;
}

// Part 1.1b
const filterTermMatched = course => {
    // modify this
    return true;
}
```

### 2. "Data to HTML" function
Implement the `dataToHTML` function, which takes a course object as an argument and returns an HTML string that represents the course.
* See the `index.html` file to examine the structure of the HTML "card" that represents a course.

```js
// Part 1.2
const dataToHTML = course => {
    // modify this
    return `Some HTML representation of the course...`;
}
```

## II. Implement the showData function
Implement the `showData` function by using the array object's built-in **filter**, **map**, and **join** methods -- and any relevant DOM methods -- to build the interface. Specifically, you will:

1. Use the array's built in "filter" method, which takes a filter function as an argument, to return an array of objects that match the search criteria.
    * Note that you can chain multiple filter functions together to progressively winnow down the courses matching the search criteria.
2. Use the array's built in "map" method to generate an array of HTML strings.
3. Use the array's built in "join" method to convert the array of strings to one large HTML string (join on the empty string or the newline character).
4. Clear out the existing courses in the DOM.
5. And finally, insert the HTML string into the DOM (suggestion: use the `insertAdjacentHTML` method).

```js
// Part 2
const showData = (searchTerm, openOnly) => {
    console.log(searchTerm, openOnly);
    console.log(data); // imported from course-data.js
    // Your code here:
    
}
```

## III. What to Submit
When you have completed the tasks listed above and your search interface looks similar to the one in the demo, zip your entire `tutorial05` folder and upload it to the Moodle under **Tutorial 5**.
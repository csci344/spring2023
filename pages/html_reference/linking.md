---
layout: two-column-resources
title: Hyperlinks
nav_order: 3
parent: HTML Resources
permalink: /html-reference/links/
---

> **Overview Resources**
>
> * [Absolute versus relative paths](http://www.coffeecup.com/help/articles/absolute-vs-relative-pathslinks/)

Linking is probably the most important feature of the worldwide web, and allows documents, media, fonts, text files, etc. to be connected together -- no matter what computer they are on! There are several different ways of linking to resources:

## 1. Navigating Relative File Paths
Given the image below, the following relative paths are from the perspective of the index.html file.

![](/spring2023/assets/images/file_paths.png)
```shell
../test.html # go up one directory and access the test.html file
../files/blah.html # go up one directory and then into the files directory, and access the blah.html file
../images/dogs/a1.png # go up one directory, then into the images directory, then into the dogs directory, and access the a1.png image
styles/my_style.css # go into the styles directory and access the my_style.css file
styles/dark/new.css # go into the styles directory, then into the dark directory, and access the new.css file
```

## 2. Linking to external pages
Note that if the resource is on someone else's computer, you need to provide a "fully qualified" URL path, including the protocol (https), the server name (google.com), and then file path (none specified in this case).

<iframe src="//codepen.io/vanwars/embed/mERgZY/?height=300&theme-id=18654&default-tab=html,result" allowfullscreen="true" class="codepen-frame"></iframe>


## 3. Linking to page regions
Note that the href value is prefaced with a hash tag (#) followed by the id of the section where you want to jump:

<iframe src="//codepen.io/vanwars/embed/rLjbXG/?height=300&theme-id=18654&default-tab=html,result" allowfullscreen="true" class="codepen-frame"></iframe>


## 4. Organizing links into a menu
The links in this example don't link to anything (yet), but is meant to show that div and span tags can be useful for grouping links into conceptual widgets (like menus)
<iframe src="//codepen.io/vanwars/embed/YMWqoO/?height=300&theme-id=18654&default-tab=html,result" allowfullscreen="true" class="codepen-frame"></iframe>
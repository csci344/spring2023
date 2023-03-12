---
layout: assignment-two-column
title: Introduction to React
type: tutorial
abbreviation: Tutorial 8
draft: 0
points: 6
num: 8
due_date: 2023-03-17
---

<style>
    .two-column table th:first-child, 
    .two-column table td:first-child {
        min-width: auto !important;
        width: auto !important;
    }

    .two-column table th:nth-child(2), 
    .two-column table td:nth-child(2) {
        min-width: 200px; !important;
        width: auto !important;
    }


    blockquote.updates {
        background-color: #d4edda;
        border: solid 1px #c3e6cb;
    }
    blockquote.updates h2, 
    blockquote.updates p, 
    blockquote.updates li, 
    blockquote.updates a {
        color: #155724;
    }
    blockquote.updates h2 {
        border-bottom: solid 1px #155724;
    }
    blockquote.updates a:hover {
        background-color: transparent;
    }
</style>

> ## 1. Do the Readings
> If you haven't take a look at these documents, carve out some time to do it.
> * <a href="https://beta.reactjs.org/learn" target="_blank">Quick Start</a>
> * <a href="https://beta.reactjs.org/learn/tutorial-tic-tac-toe" target="_blank">Tic Tac Toe</a>
> * <a href="https://beta.reactjs.org/learn/thinking-in-react" target="_blank">Thinking in React</a>
> * <a href="https://beta.reactjs.org/learn/sharing-state-between-components" target="_blank">Sharing state between components</a>

## 2. Set Up Instructions
* If you haven't downloaded and installed Node.js, do that first (see lecture materials).
* Download the starter files and save them in your `csci344/tutorials` folder.
* Open `index.html` in VS Code. You should see something like this:

```html
<!doctype html>
<html lang="en">
<head>
    <title>Photo App</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
</head>
<body>
    <div id="root"></div>

</body>
</html>
```

<a class="nu-button" href="/spring2022/course-files/tutorials/tutorial08.zip">tutorial08.zip<i class="fas fa-download" aria-hidden="true"></i></a>

### A few things to notice
Before you start coding, I wanted to bring your attention to some features of your code:

#### 1. Proxy URL
Open `package.json` and note that there is a property called `proxy` which is set to <a href="https://photo-app-secured.herokuapp.com/" target="_blank">https://photo-app-secured.herokuapp.com/</a>. What this means is that in each of your fetch endpoints, you don't need to specify the fully qualified path. For instance, if you want to query for a list of Post objects, you only need to specify this address: `/api/posts`.

#### 2. Access Token





## Instructions
In this week's lab, you will be re-implementing a subset of your Photo App UI using React. The following 5 tasks are required in order for you to get full credit for the lab:

{:.compact}
1. [Create a component hierarchy](#step1)
1. [Create stubs for each component](#step2)
1. [Implement the "Posts" and "Post" components](#step3)
1. [Implement the "BookmarkButton" component](#step4)
1. [Implement the "LikeButton" component](#step5)


## Set Up

### Deployment Notes
Although we are using Node to build and run our React app, we will ultimately be compiling our React app to HTML, CSS, and JavaScript so that the browser can download these files from our website and run them client-side. It's confusing, but the final output of our React App is client-side code that our browser will run.

Try building your React App by issuing `npm run build` on the command line. The resulting build folder will have "vanilla" HTML, CSS, and JavaScript that your browser understands.


## Your Tasks

{:#step1}
### Step 1: Component Hierarchy
As described in the <a href="https://reactjs.org/docs/thinking-in-react.html" target="_blank">Thinking in React</a> piece, it is important to be able to look at a wireframe / mockup and consider what might constitute a component (keeping in mind that components can have child components).

Given (a) the starter `App.js` file we have given you and (b) what you already know about the "Photo App" app you made in Homework 4, think about how you might break up this web app into different components, where each component does a small job within the larger application:

```jsx
import React from 'react';

class App extends React.Component {  

    render () {
        return (
            <div>

            <nav className="main-nav">
                <h1>Photo App</h1>
                {/* Navigation Links */}
            </nav>

            <aside>
                <header>
                    Profile
                    {/* Navigation Links */}
                </header>
                <div className="suggestions">
                    <p className="suggestion-text">Suggestions for you</p>
                    <div>
                        Suggestions
                        {/* Suggestions */}
                    </div>
                </div>
            </aside>

            <main className="content">
                <header className="stories">
                    Stories
                    {/* Stories */}
                </header>
                <div id="posts">
                    Posts
                    {/* Posts */}
                </div>
            </main>

            </div>
        );
    }
}

export default App;

```

One potential strategy (though there could certainly be others) might involve splitting up your functionality into 5 top-level components, where each component has 1 job:

| 1. | **NavBar component** | Responsible for displaying the name of the logged in user, and perhaps a menu down the line. |
| 2. | **Profile component** | Responsible for displaying a profile of the logged in user. | 
| 3. | **Suggestions component** | Responsible for displaying suggested users to follow. | 
| 4. | **Stories component** | Responsible for displaying recent stories of people you're following. | 
| 5. | **Posts component** | Responsible for displaying the posts in your news feed. | 

Note that each of these top-level components may also have sub-components. For instance, `Posts` will probably be comprised of `Post` components, and each `Post` component will be comprised of, say, `Comments`, a `LikeButton`, a `BookmarkButton`, and potentially others. Here's one way of visualizing this heirarchy:

<img style="width:100%;margin:20px 0px;" src="/spring2023/assets/images/tutorials/tutorial08/react-diagram.svg" />


Think about what your `render()` function might look like for each component, and which of your components might issue fetch requests.

{:#step2}
### Step 2: Create stubs for each component
Once you've decided on your components, create a JavaScript file for each of the 5 components listed above -- `NavBar`, `Profile`, `Suggestions`, `Stories`, `Posts` -- in your `src` directory. In each JavaScript file, create a react component and a simple render function that renders only the JSX elements associated with it. So, for instance, the `Posts` component would render a `div` element (and eventually the list of posts):

```jsx
import React from 'react';

class Posts extends React.Component {
  
    constructor(props) {
        super(props);
        // initialization code here
    }

    componentDidMount() {
        // fetch posts and then set the state...
    }

     render () {
        if (!this.state.posts) {
            return (
                <div>Before posts fetched from server</div>  
            );
        }
        return (
            <div>
                <div>List of Posts goes here...</div>
                {/*
                this.state.posts.map(post => {
                    return <Post post={post} key={'post-' + post.id} />
                }
                */}
            </div>
        );     
    }
}

export default Posts;
```

When you're done creating all of your components, refactor your `App.js` so that the render function is using your React components (don't forget to import them all). Note that in the sample code shown below, the `NavBar` component is accepting two custom properties: "title" and "username." Please review <a href="https://reactjs.org/docs/components-and-props.html" target="_blank">components and props</a> if you have any questions about how that works.

```jsx
import React from 'react';
import NavBar from './NavBar';
import Profile from './Profile';
import Stories from './Stories';
import Suggestions from './Suggestions';
import Posts from './Posts';

class App extends React.Component {  

    render () {
        return (
            <div>
                <NavBar title="Photo App" username="test_user" />
                
                <aside>
                    <Profile />
                    <Suggestions />
                </aside>

                <main className="content">
                    <Stories />
                    <Posts />
                </main>

            </div>
        );
    }
}

export default App;
```

If you get stuck, please take a look at `hints/hint-1`.

{:#step3}
### Step 3. Implement the "Posts" and "Post" Components
Next, modify the logic of your `Posts` component to display all of the posts in the news feed. Recall that in the React model, your fetch logic and your rendering logic are decoupled. In other words, you'll probably want to:
  
* Fetch the posts from a working "Photo App" endpoint (we recommend running your HW5 Flask instance and accessing this endpoint: <a href="/api/posts">/api/posts</a>.
* Save the fetched posts in your state object.
* Render the posts (recall that each time you issue a call to the built-in `this.setState()` method, React automatically re-renders your component -- like magic).
* Because each post is complex, and will likely be refactored into several different subcomponents, go ahead and create a new `Post.js` component. It can be simple for now (just display the username, photo, and caption). Take a look at `hints/hint-2` if you get stuck.

#### Handling Authentication / Interaction with your REST API
Given that your Flask Server now requires your JWT token, we have created a helper function that will request and store an access token in your cookies before running your React app. See `src/index.js` for more information. 

In order to issue requests with the required credentials, you will need to pass the JWT token in the header of your fetch requests. We have created a convenience function in the `src/utils.js` file called `getHeaders()`. See `hints/hint-2` for an example of how to use this function.

On line 5 of `package.json`, is a "proxy server" instruction:

```json
{
  "name": "photo-app-react",
  "version": "0.1.0",
  "homepage": "./",
  "proxy": "http://127.0.0.1:5000",
  "private": true
  ...
}
```

This instruction tells React that when you issue a request to, say, `/api/posts`, your request will be directed to use `http://127.0.0.1:5000`. If you prefer to interact with a different REST API server, just switch out the proxy address in `package.json` and re-run your react server. Feel free to use the class server if your HW5 is still in flux: <a href="https://photo-app-secured.herokuapp.com" target="_blank">https://photo-app-secured.herokuapp.com</a>

{:#step4}
### Step 4. Implement the LikeButton Components
Recall from HW4 that when the user clicks the "like button," a request is issued to the `/api/posts/likes` endpoint to either create or delete a like entry in the `likes_posts` table. This update causes a change to the post's information (# of likes), which needs to be re-fetched from the server and re-displayed. In this exercise, you will create a brand new `LikeButton` component, whose job it will be to issue Like/Unlike requests to the server, and to draw the heart.

The `LikeButton` also needs to notify the `Post` component to redraw after it fetches data from the server. Therefore, you're going to have to figure out how to communicate between your components. When you click on the heart in your `LikeButton` component, how can notify your `Post` component to requery the server and re-render? To learn how this might be done, re-read the <a href="https://reactjs.org/docs/lifting-state-up.html" target="_blank">lifting up state</a> page, which provides guidance. The strategy discussed involves:

1. Creating a method in the parent (`Post`) component to requery for the Post and set the Post component's state.
1. Making this method is available to the `LikeButton` component (by passing it in as a property).
1. Ensuring that this method is called by the `LikeButton` component after the like/unlike functionality completes.


## What to Turn In
When you're done, zip your `lab10` directory and submit your zip file to Canvas. Please **DO NOT** include your `node_modules` in the zip file (which will add hundreds of megabytes to your zip file).
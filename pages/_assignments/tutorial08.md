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

<a class="nu-button" href="/spring2023/course-files/tutorials/tutorial08.zip">tutorial08.zip<i class="fas fa-download" aria-hidden="true"></i></a>

* If you haven't downloaded and installed Node.js, do that first (see lecture materials).
* Download the starter files and save them in your `csci344/tutorials` folder.
* On your terminal / command line, navigate to `csci344/tutorials/tutorial08` folder.
* Install the Node.js dependencies using `npm install`

### Deployment Notes
Although we are using Node to build and run our React app, we will ultimately be compiling our React app to HTML, CSS, and JavaScript so that the browser can download these files from our website and run them client-side. It's confusing, but the final output of our React App is client-side code that our browser will run.
* Try building your React App by issuing `npm run build` on the command line. The resulting build folder will have "vanilla" HTML, CSS, and JavaScript that your browser understands.

### A few things to notice
Before you start coding, I wanted to bring your attention to some features of your code:

#### 1. Proxy URL
Open `package.json` and note that there is a property called `proxy` which is set to <a href="https://photo-app-secured.herokuapp.com/" target="_blank">https://photo-app-secured.herokuapp.com/</a>. What this means is that in each of your fetch endpoints, you don't need to specify the fully qualified path. For instance, if you want to query for a list of Post objects, you only need to specify this address: `/api/posts`.

#### 2. public/index.html
Your base HTML file is located in the `public` folder. Take a look at it, noting how simple it is:

```html
<!doctype html>
<html lang="en">
<head>
    <title>Photo App</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css">
</head>
<body>
    <div id="root"></div>

</body>
</html>
```

#### 3. src/index.js "kicks off" your web app
Open `src/index.js` and take a look at it. Note that the `renderApp()` function is invoked at the bottom. The function first authenticates to the <a href="https://photo-app-secured.herokuapp.com/" target="_blank">https://photo-app-secured.herokuapp.com/</a> server with the `webdev/password` (you should switch this to your username and password). Then, it passes the authentication token as an argument to the `<App />` component, which is inserted within the `#root` DOM element.

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {getAccessToken} from './utils';

// Kicks off the app after the user "logs in":
async function renderApp() {
    const token = await getAccessToken('webdev', 'password');
    
    ReactDOM.render(
        <App token={token} />,
        document.getElementById('root')
    );
}

renderApp();
```

#### 3. src/App.js is your top-level React component
Open `src/App.js` and take a look at it. You should see a structure like the one shown below. Your job is to create components for each of the data-generated sections of your app (we will walk through this process together).

```jsx
import React from 'react';
import NavLinks from './NavLinks';

export default function App ({token}) { 
    console.log('access token:', token);
    
    return (
        <div>
            
            {/* Navbar */}
            <nav className="main-nav">
                <h1>Photo App</h1>
                <NavLinks token={token} />
            </nav>
           
           {/* Right Panel */}
            <aside>
                <header>
                    Profile Goes Here...
                </header>
                <div className="suggestions">
                    <div>
                        Suggestions go here...
                    </div>
                </div>
            </aside>

            <main>

                {/* Stories */}
                <header className="stories">
                    Stories go here...
                </header>

                {/* Posts */}
                <div id="posts">
                    Posts go here...
                </div>

            </main>

        </div>
    );
    
}
```







## 3. Your Tasks
In this week's lab, you will begin HW6 (re-implementing the Photo App UI using React). To get full credit for this lab, complete the following tasks:

{:.compact}
1. [Create a component hierarchy](#step1)
1. [Create stubs for each component](#step2)
1. [Implement the "Posts" and "Post" components](#step3)
1. [Implement the "LikeButton" component](#step4)



{:#step1}
### Step 1: Component Hierarchy
As described in the <a href="https://beta.reactjs.org/learn/thinking-in-react" target="_blank">Thinking in React</a> piece, it is important to be able to look at a wireframe / mockup and consider what might constitute a component (keeping in mind that components can have child components).

Given (a) the starter `App.js` file we have given you and (b) what you already know about the "Photo App" app you made in Homework 4 & 5, think about how you might break up this web app into different components, where each component does a small job within the larger application. One potential strategy (though there could certainly be others) might involve splitting up your functionality into 5 top-level components, where each component has 1 job:

| 1. | **NavLinks component** | (Already done for you) Responsible for displaying the name of the logged in user, and perhaps a menu down the line. |
| 2. | **Profile component** | Responsible for displaying a profile of the logged in user. | 
| 3. | **Suggestions component** | Responsible for displaying suggested users to follow. | 
| 4. | **Stories component** | Responsible for displaying recent stories of people you're following. | 
| 5. | **Posts component** | Responsible for displaying the posts in your news feed. | 

Note that each of these top-level components may also have sub-components. For instance:
* `Posts` will probably be comprised of one or more `Post` components
* Each `Post` component will be comprised of, say, an `AddComment` component, a `LikeButton`, a `BookmarkButton`, and potentially others. Here's one way of visualizing this heirarchy:

<img style="width:100%;margin:20px 0px;" src="/spring2023/assets/images/tutorials/tutorial08/react-diagram.svg" />


Think about what the JSX might look like for each component, and also which of your components might issue fetch requests.

{:#step2}
### Step 2: Create stubs for each component
Once you've decided on your components, create a JavaScript file for each of the 5 components listed above -- `NavLinks` (already done for you), `Profile`, `Suggestions`, `Stories`, `Posts` -- in your `src` directory. In each JavaScript file, create a react component that returns a simple  JSX element associated with it. So, for instance, the `Posts` component would render a `div` element (and eventually the list of posts):

```jsx
import React from 'react';

export default function Posts() { 
   
    return (
        <div>Your posts here...</div>
    ); 

}
```

When you're done creating all of your components, refactor your `App.js` so that the render function is using your React components (don't forget to import them all). Please review <a href="https://reactjs.org/docs/components-and-props.html" target="_blank">components and props</a> if you have any questions about how that works.

```jsx
import React from 'react';
import NavBar from './NavLinks';
import Profile from './Profile';
import Stories from './Stories';
import Suggestions from './Suggestions';
import Posts from './Posts';

export default function App ({token}) { 
    console.log('access token:', token);
    
    return (
        <div>
            {/* Navbar */}
            <nav className="main-nav">
                <h1>Photo App</h1>
                <NavLinks token={token} />
            </nav>
            
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
```


{:#step3}
### Step 3. Implement the "Posts" and "Post" Components
Next, modify the logic of your `Posts` component to display all of the posts in the news feed. Recall that in the React model, your fetch logic and your rendering logic are decoupled. In other words, you'll probably want to:
  
* Fetch the posts from a working "Photo App" endpoint (<a href="/api/posts">/api/posts</a>).
    * Important: make sure that any fetch logic that needs to happen **when the component loads** is (a) encapsulated in a function, and (b) passed into the useEffect() function.
    * If you do not do this, React will infinitely fetch, then render, then fetch again, then render, and so forth...
    * You can read more about this on the <a href="https://beta.reactjs.org/reference/react/useEffect#fetching-data-with-effects" target="_blank">React documentation</a>
* Ensure that the fetched posts are stored as a **state variable** (using react's built-in `useState()` function).
    * Why? Because any change to a state variable triggers a component redraw (so that the presentation is always in sync with the data).
* Because each post is complex, and will likely be refactored into several different subcomponents, go ahead and create a new `Post.js` component. It can be simple for now (just display the username, photo, and caption).

If you get stuck, look at the `hints` folder and study the `Post.js` structure. Don't just copy it...look at it and try to understand what's happening. 


{:#step4}
### Step 4. Implement the LikeButton Component
Recall from HW4 that when the user clicks the "like button," a request is issued to the `/api/posts/likes` endpoint to either create or delete a like entry in the corresponding database table. Because this update causes a change to the post's information (# of likes), it needs to be re-fetched from the server and re-displayed. In this exercise, you will create a brand new `LikeButton` component, whose job it will be to issue Like/Unlike requests to the server, and to draw the heart.

The `LikeButton` also needs to notify the `Post` component to redraw after it fetches data from the server. Therefore, you're going to have to figure out how to communicate between your components. When you click on the heart in your `LikeButton` component, how can notify your `Post` component to requery the server and re-render? To do this, you will be doing something called "lifting up state." The strategy discussed involves:

1. Creating a function in the parent (`Post`) component to requery for the Post and set the Post component's state.
1. Making this function available to the `LikeButton` component (by passing it in as a property).
1. Ensuring that this method is called by the `LikeButton` component after the like/unlike functionality completes.


## What to Turn In
When you're done, zip your `lab08` directory and submit your zip file to Canvas. Please **DO NOT** include your `node_modules` in the zip file (which will add hundreds of megabytes to your zip file).
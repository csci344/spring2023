---
layout: assignment-two-column
title: "JavaScript: Handling POST & DELETE Actions"
type: tutorial
abbreviation: Tutorial 7
draft: 1
points: 6
num: 7
due_date: 2023-02-24
---

<!-- <style>
    .medium {
        margin: auto;
    }
</style> -->

## Introduction
Today we will be making sure that everyone understands how to complete [HW5](hw05). Specifically you will:

1. Attach an event handler to the appropriate control.
1. Issue the appropriate HTTP request (POST or DELETE) to modify the relevant resource on the server.
1. **[If Applicable]** Re-query for any relevant state changes (e.g., if you add / remove a `Like`, `Bookmark`, or `Comment` resource, the data structure of the `Post` resource will change).
1. Redraw a section of the screen to reflect the state change.

### Endpoints 
To understand how to interact with the API, please see the Photo App API tester: <a href="https://photo-app-secured.herokuapp.com/api" target="_blank">https://photo-app-secured.herokuapp.com/api</a>. Below, I have listed the relevant endpoints with which you will have to interact:


| Resource | Endpoint | Methods | Job | Notes |
|--|--|--|--|--|
| **Like** | `/api/posts/likes/` | POST | Creates a `Like` resource | Modifies state of corresponding Post |
|  | `/api/posts/likes/<id>` | DELETE | DELETES a `Like` resource | Modifies state of corresponding Post |
| **Bookmark** | `/api/bookmarks/` | POST | Creates a `Bookmark` resource | Modifies state of corresponding Post |
|  | `/api/bookmarks/<id>` | DELETE | DELETES a `Bookmark` resource  | Modifies state of corresponding Post |
| **Comment** | `/api/comments/` | POST | Creates a `Comment` resource | Modifies state of corresponding Post |
|  | `/api/comments/<id>` | DELETE | DELETES a `Comment` resource | Modifies state of corresponding Post |
| **Following** | `/api/following/` | POST | Creates a new `Following` resource  |  |
|  | `/api/following/<id>` | DELETE | Deletes a new `Following` resource  |  |
| **Post** | `/api/posts/<id>` | GET | Retrieves a single `Post` resource  | For re-querying a single Post |


### Workflows

There are two basic workflows. 

#### 1. Adding / Removing Bookmark, Like, or Comment Resources
If you create / delete a `Bookmark`, `Like`, or `Comment` resource, ***the structure of the `Post` resource also changes***. This is because a `Post` includes (for convenience) information about comments, likes, and whether the current user has liked or bookmarked the current post (see data structure below): 

```json
{
   "id": 2,
   "image_url": "https://picsum.photos/600/430?id=300",
   "user": {...},
   "caption": "Some Text",
   "alt_text": photo caption,
   "display_time": "14 days ago",
   "likes": [
      {...},
      {...},
      {...}
   ],
   "comments": [
      {...},
      {...},
      {...}
   ],
   "current_user_like_id": 671,
   "current_user_bookmark_id": 566
}
```

Therefore, each event handler (add / remove bookmark, add / remove like, add comment) ought to implement following workflow:

{:.compact}
1. Issue the POST / DELETE Request to the appropriate endpoint.
2. When the response resolves, issue a second GET request to re-query the "Post" resource `/api/posts/<id>` (to get its updated state).
3. When the second response resolves, redraw the modified "Post" by:
    * Invoking the `postToHtml()` function using the updated `Post`, and 
    * Replacing the existing HTML representation of the post (within the DOM) with the new one you just made.
    {:.compact}
4. **Tip:** If the current user has liked / bookmarked a post, you will have to embed the like / bookmark id as a button attribute so that you know what to delete later on.


<img class="frame large" src="/spring2023/assets/images/tutorials/tutorial07/workflow1.gif" alt="workflow 1" />

#### 2. Adding / Removing Followers
Creating or deleting a `Following` resource has no bearing on the state of any other resource. As such, the workflow is simpler:

{:.compact}
1. Issue the POST / DELETE Request to the appropriate endpoint.
2. When the response resolves, modify the button to have the right innerHTML (follow / unfollow) and accessibility attributes.
1. **Tip:** Note that if you want the ability to "unfollow" a user after having just created a `Following` resource, you will have to embed the id of the following resource in the element (so you know which resource to delete later on). See animation below:


<img class="frame large" src="/spring2023/assets/images/tutorials/tutorial07/follow-unfollow.gif" alt="follow / unfollow diagram" />

## Your Task
For today's tutorial we will be implementing the Bookmark Button together. Download the starter code and save it in `tutorials/tutorial07`. The following requirements must be met.

1. The user can bookmark a post.
2. The user can unbookmark a post.
3. When the user bookmarks / unbookmarks a post, the post redraws to reflect the change.
4. Accessibility features are included. 
---
layout: assignment-two-column
title: Setting up Flask
type: tutorial
abbreviation: Tutorial 9
draft: 1
points: 6
num: 9
due_date: 2023-03-24
---


<style>
    table th:first-child, table td:first-child {
        min-width: auto;
        max-width: auto;
        width: auto;
    }
</style>

## 1. Intro to Flask
<a href="https://flask.palletsprojects.com/en/2.0.x/" target="_blank">Flask</a> is a framework, built with Python, for helping people build dynamic, scalable web applications. We have selected Flask as our web server engine for this semester because it has a relatively simple set of common abstractions, and is therefore easier to learn than some other frameworks. At the same time, it is also very powerful, and has features such as:

* Templating, using the <a href="https://jinja.palletsprojects.com/en/3.0.x/" target="_blank">Jinja template engine</a>
* A simple way to define <a href="https://flask.palletsprojects.com/en/2.0.x/api/#url-route-registrations" target="_blank">routes</a> (which bind URL addresses to functions), and to specify which HTTP methods are valid for a particular route (HEAD, OPTIONS, GET, POST, PUT, PATCH, DELETE)
* A way to listen for and parse HTTP requests over a specified port
* A way to create and send HTTP responses

In addition, since Flask is written in Python, you have access to any and all Python libraries (e.g., for connecting to various databases, taking advantage of pretrained models, and so forth).

Most frameworks have abstractions similar to those offered by Flask, so once you learn Flask, learning new server-side web frameworks will be easier. Some other web frameworks that are analagous to Flask (that you may have heard of) include:

{:.small}
| Python | Flask, Django, Web2Py, Pyramid, etc.| 
| Node.js | Express, etc. |
| PHP | Larvel, Symfony, etc. |
| Ruby | Rails, etc. |
| Java | Spring, Struts, etc. |
| C# | ASP.NET |


## 2. Intro to Python Virtual Environments

{:.blockquote-no-margin}
> From the <a href="https://docs.python.org/3/library/venv.html" target="_blank">Python Docs</a>: 
>
> A virtual environment is a Python environment such that the Python interpreter, libraries and scripts installed into it are isolated from those installed in other virtual environments, and (by default) any libraries installed in a “system” Python, i.e., one which is installed as part of your operating system.

Practically speaking, a virtual environment (venv) "sandboxes" your Python installation so that anything installed within a venv is not available outside of it. Libraries installed in a "system" Python ARE available to your venv, but can be overridden from within the venv. For instance, if `numpy version 1.15.4` is installed on your "system" Python and you decide to install `numpy version 1.16.1` in your venv, then within the venv, `1.16.1` will take precedence. 

Some commands to know:

### Mac / Unix / Linux

```bash
python3 -m venv env      # creates a new virtual environment called "env"
source env/bin/activate  # activates the virtual environment
deactivate               # deactivates the virtual environment
```

### Windows Powershell or Command Prompt

```msshell
py -m venv env          # creates a new virtual environment called "env"
env\Scripts\activate    # activates the virtual environment
deactivate              # deactivates the virtual environment
```

Note that when your venv is activated, there will be a `(env)` prefix in front of your command prompt. When activated, any python or `pip install` commands will be interacting with your virtual environment. 

## 3. Background Readings
Please read the following:

{:.compact}
* Towards Data Science. <a href="https://towardsdatascience.com/virtual-environments-104c62d48c54#8025" target="_blank">Intro to Python Virtual Environments</a>
* Janetakis, Nick (Oct., 2017). <a href="https://nickjanetakis.com/blog/server-side-templates-vs-rest-api-and-javascript-front-end" target="_blank">Server Side Templates vs REST API and Javascript Front-End</a>.
* Flask website. <a href="https://flask.palletsprojects.com/en/2.0.x/quickstart/" target="_blank">Flask Quickstart Guide</a>

## 4. Set Up
If you haven't used Python before, please download and install it: <a href="https://www.python.org/downloads/" target="_blank">https://www.python.org/downloads/</a>. Any version of python >= 3.7 will work.

Once Python is installed, download tutorial09.zip (below), unzip it, and move your lab02 folder inside of your webdev-labs folder. 

<a class="nu-button" href="/spring2023/course-files/tutorials/tutorial09.zip">tutorial09.zip<i class="fas fa-download" aria-hidden="true"></i></a>


### Set Up Your Virtual Environment
Open the terminal and navigate to your lab02 folder. Then, set up a virtual environment and install the dependencies as follows (depending on your operating system):

#### For Mac, Unix, Linux, or GitBash

```bash
python3 -m venv env
source env/bin/activate
pip install -r requirements.txt    # install dependencies
```

#### For Windows Powershell or Command Prompt

```bash
# create the virtual environment
py -m venv env  

# run the activate.bat script as follows:
env\Scripts\activate

# and finally, install the Python dependencies
py -m pip install -r requirements.txt
```

### Run Your Flask Web Server

When you're done, try running your flask app from your command line:

#### Mac or Linux

```bash
# set environment variables (you just have to do this once per session)
export FLASK_APP=app.py     
export FLASK_ENV=development

# then run flask (type Ctrl+C to quit)
flask run
```

#### Windows Command Prompt

```bash
# set environment variables (you just have to do this once per session)
set FLASK_APP=app.py
set FLASK_ENV=development

# then run flask (type Ctrl+C to quit)
flask run
# alternative commands to try if "flask run" doesn't work:
# py -m flask run
# python3 -m flask run
# python -m flask run
```

#### Powershell
```bash
$env:FLASK_APP="app.py"
$env:FLASK_ENV="development"

flask run
```

You should see the following output:
```bash
 * Serving Flask app "app.py" (lazy loading)
 * Environment: development
 * Debug mode: on
 * Running on http://127.0.0.1:5000/ (Press CTRL+C to quit)
 * Restarting with stat
 * Debugger is active!
 * Debugger PIN: 273-580-071
 ```

 Navigate to <a href="http://127.0.0.1:5000/" target="_blank">http://127.0.0.1:5000/</a>, and you should see a screen that says "Hello World!"

<img class="medium frame" src="/spring2023/assets/images/tutorials/tutorial09/hello-world.png" />

### FAQs / Troubleshooting
Sarah will keep adding FAQs to this section. Some known issues:
1. If `python3` or `py` aren't recognized, ask your peer mentor / go to office hours. It is important that you figure out how to invoke python from the command line ASAP, as you'll need to do this for the rest of the semester.
1. If you are using windows and you can't start flask using the `flask run` command, try: `python -m flask run` 


## 5. Required Flask Exercises
Once you've set up your flask installation, you will do 4 required exercises:

|  | Exercise | Purpose |
|--|--|--|
| 1. | [Display personalized greeting](#task_1) | Practice generating and sending a dynamic string via HTTP |
| 2. | [Create a template](#task_2) | Practice creating a data-driven, server-side HTML file from a template. Templates allow you to separate the data from the presentation of the data. |
| 3. | [Accessing data from other servers](#task_3) | Practice retrieving data from another server using query parameters. |
| 4. | [Create a data-driven template](#task_4) | Practice retrieving data from another server and sending it to a client. |

Please complete the following exercises to get a sense of the kinds of things you can do with Flask:

{:#task_1}
### 1. Display personalized greeting
Update the `exercise1` function so that it returns a personalized greeting to the user. In other words, replace "Hello World!" with something like, "Hi Erick!"
* Assume that the `current_user` variable, defined at the top of `app.py` represents the user who is currently logged in. 

<img class="medium frame" src="/spring2023/assets/images/tutorials/tutorial09/hello-erick.png" />

{:#task_2}
### 2. Merge with a template
The `exercise2` function uses a template to generate its response. Specifically, python reads in the `templates/quote-of-the-day.html` file, finds any python expressions (represented by curly braces), evaluates them, and finally sends a "plain" HTML file back to the client:

```python
@app.route('/quote')
def exercise2():
    return render_template(
        'quote-of-the-day.html',
        user=current_user
    )
```
Open the `templates/quote-of-the-day.html` file and examine how the Jinja template allows python logic to be evaluated from within the HTML template (using double curly brace notation). Note that in order to give your template access to data, it must be passed into the `render_template` function as a keyword argument (from `app.py`). You may pass in as many keyword arguments (i.e. pieces of data) as you like into the template. These pieces of data are often referred to as the template's "context."

#### Your Task
Please make the following modifications:
1. In `app.py`, add another context variable, called `quote` that holds a randomly selected quote from the `quotes` list (see ~line 17). Consider using the built-in <a href="https://www.w3schools.com/python/ref_random_choice.asp" target="_blank">random.choice</a> function.
1. In `templates/quote-of-the-day.html`, update the template so that the quote of the day is displayed.

<img class="medium frame" src="/spring2023/assets/images/tutorials/tutorial09/erick-quote.png" />

{:#task_3}
### 3. Accessing data from other servers
Servers can also be clients that issue requests to other servers (the thing doing the "asking" is usually referred to as the client). In other words, your Flask server can query data from other servers (using HTTP or other protocols) and then make use of that data in their own way. The `exercise3` function queries a proxy server that Sarah made (<a href="https://www.apitutor.org" target="_blank">https://www.apitutor.org</a>) for accessing Yelp (and other providers). In this example, we are querying Yelp for restaurants that match a ***location*** and ***search term***:

```python
@app.route('/restaurant-data')
def exercise3():
    search_term = 'pizza'
    location = 'Asheville, NC'
    url = 'https://www.apitutor.org/yelp/simple/v3/businesses/search?location={0}&term={1}'.format(location, search_term)
    response = requests.get(url)
    data = response.json()
    pprint(data) # for debugging -- prints the result to the command line
    return json.dumps(data)
```

Note that the `/restaurant-data` route returns a JSON string (instead of an HTML string). 

#### Your Task
You are going to make this route more customizable by replacing the code shown above with this code:

```python
@app.route('/restaurant-data/')
@app.route('/restaurant-data')
def exercise3():
    args = request.args
    location = args.get('location')
    search_term = args.get('term')
    if not (location and search_term):
        return '"location" and "term" are required query parameters'
    
    url = 'https://www.apitutor.org/yelp/simple/v3/businesses/search?location={0}&term={1}'.format(location, search_term)
    response = requests.get(url)
    data = response.json()
    pprint(data) # for debugging -- prints the result to the command line

    return json.dumps(data)
```

The code above allows the user to specify the location and search term they'd like to use when querying yelp using "query parameters." Here is an example of a URL that uses query parameters:

<a href="http://127.0.0.1:5000/restaurant-data/?location=Asheville,%20NC&term=chinese" target="_blank">http://127.0.0.1:5000/restaurant-data/?location=Asheville,%20NC&term=chinese</a>

{:.compact}
* The `?` character is used to specify where the route ends and the query parameters begin. 
* If there is more than one query parameter, then each parameter/argument pair is separated by an `&` character (see examples below). 
* The parameter name is on the left side of the `=` and the value is on the right side.
* In flask, you can access the query parameters via the `request.args`, which stores a dictionary representation of any query parameters associated with a given route.

After making the changes above, test your new routes by experimenting with the following URLs:

* <a href="http://127.0.0.1:5000/restaurant-data/?location=Asheville,%20NC&term=chinese" target="_blank">http://127.0.0.1:5000/restaurant-data/?location=Asheville,%20NC&term=chinese</a> (Chinese restaurants in Asheville)
* <a href="http://127.0.0.1:5000/restaurant-data/?location=San Diego,%20CA&term=thai" target="_blank">http://127.0.0.1:5000/restaurant-data/?location=San Diego,%20CA&term=thai</a> (Thai restaurants in San Diego)

Feel free to replace the cities and search terms with your own! Basic takeaway: you can allow your user to pass arguments to your routes via query parameters.

<img class="large frame" src="/spring2023/assets/images/tutorials/tutorial09/data-feed-miami-cuban.png" />

{:#task_4}
### 4. Create a data-driven template
Now, you're going to create a data-driven **template** to display information about the "Top Restaurant" (according to Yelp) that matches your search criteria. Consider the following code:

```python
@app.route('/restaurant/')
@app.route('/restaurant')
def exercise4():
    args = request.args
    location = args.get('location')
    search_term = args.get('term')
    if not (location and search_term):
        return '"location" and "term" are required query parameters'

    url = 'https://www.apitutor.org/yelp/simple/v3/businesses/search?location={0}&term={1}'.format(location, search_term)
    response = requests.get(url)
    restaurants = response.json()
    pprint(restaurants[0]) # for debugging
    return render_template(
        'restaurant.html',
        user=current_user,
        search_term=search_term,
        location=location,
        restaurant=restaurants[0] # just show the first restaurant in the list.
    )
```

It works very similarly to the code in exercise 3, except for it merges with the `restaurant.html` template (instead of dumping raw JSON data). Please try testing these routes by experimenting with the following URLs:

* <a href="http://127.0.0.1:5000/restaurant/?location=Asheville,%20NC&term=chinese" target="_blank">http://127.0.0.1:5000/restaurant/?location=Asheville,%20NC&term=chinese</a> (Chinese restaurants in Asheville)
* <a href="http://127.0.0.1:5000/restaurant/?location=San Diego,%20CA&term=thai" target="_blank">http://127.0.0.1:5000/restaurant/?location=San Diego,%20CA/thai</a> (Thai restaurants in San Diego)

Note that the `restaurant.html` template uses a new construct -- the "include" -- as a way to modularize code.

<img class="large frame" src="/spring2023/assets/images/tutorials/tutorial09/template-before.png" />

#### Your Task
Modify the HTML in this template so that it displays the Yelp data in a more visual format. For instance, Sarah made her's look like this:

<img class="medium frame" src="/spring2023/assets/images/tutorials/tutorial09/template-after.png" />

Feel free to jazz up your template any way you like!

## 6. Optional Flask Exercises (recommended if time)
If you have more time, please also try the optional flask exercises. It will give you more practice to ensure that you feel comfortable with HW2!

### 1. Looping using Jinja
In exercise 4, you only showed a single restaurant. Look at the <a href="https://jinja.palletsprojects.com/en/3.0.x/templates/" target="_blank">Jinja documentation</a> and see if you can figure out how to output all of the matching restaurants for the search (not just the first one). See if you can make your template look like this one:

<img class="large frame" src="/spring2023/assets/images/tutorials/tutorial09/restaurants.png" />

### 2. Includes
See if you can convert the HTML that shows a single restaurant card into an include file (similar to `includes/header.html`)

## 7. What to Turn In
To submit Tutorial 9:

....

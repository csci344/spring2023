---
layout: two-column
title: "Intro to SQLAlchemy"
type: tutorial
abbreviation: Activity 6
draft: 0
points: 6
num: 2
---

As stated on the <a href="https://www.sqlalchemy.org/" target="_blank">SQL Alchemy project page</a>: "SQLAlchemy is the Python SQL toolkit and Object Relational Mapper that gives application developers the full power and flexibility of SQL." In other words, SQL Alchemy is a python abstraction that makes communication with databases easier. It is database agnostic, meaning that you use the same commands, regardless of whether you're interacting with PostgreSQL, SQLite, MySQL, or some other relational database. 

## What is an Object Relational Mapping (ORM)?
ORMs allow a programmer to associate user-defined Python classes with database tables, and instances of those classes (objects) with rows in their corresponding tables (<a href="https://docs.sqlalchemy.org/en/14/orm/tutorial.html" target="_blank">more on ORM here</a>). In other words, rather than writing SQL directly, you interact with SQL Alchemy "models" that issue SQL queries under-the-hood.

I have already created all of the data models for you in the `models` directory inside your `hw07`. Let's take a look at the `Post` model, located in `models/posts.py` to see what it looks like...

### Post Model
```python
class Post(db.Model):

    # name of table I want to connect to:
    __tablename__ = 'posts'

    # reference to the columns with which I want the application
    # to interact:
    id = db.Column(db.Integer, primary_key=True)
    image_url = db.Column(db.String(200), nullable=False)
    caption = db.Column(db.Text, nullable=True)
    alt_text = db.Column(db.Text, nullable=True)
    pub_date = db.Column(db.DateTime, nullable=False,
        default=datetime.utcnow)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id', ondelete='cascade'),
        nullable=False)

    # read-only property for referencing User properties
    user = db.relationship('User', backref="posts", lazy=False)
    comments = db.relationship('Comment', cascade="all,delete-orphan", lazy='select', 
        order_by='Comment.pub_date', backref=db.backref('posts', lazy='joined'))
    likes = db.relationship('LikePost', cascade="all,delete-orphan", lazy='select',
        order_by='LikePost.timestamp', backref=db.backref('posts', lazy='joined'))

    def __init__(self, image_url:str, user_id:int, caption:str=None, alt_text:str=None, pub_date:datetime=None):
        self.image_url = image_url
        self.user_id = user_id
        self.caption = caption
        self.alt_text = alt_text
        self.pub_date = pub_date
```

### Post Table
<img src="/spring2023/assets/images/activities/sql-alchemy/posts.png" class="large frame" />

With this `Post` model definition, I am able to create, read, update, and delete records from the `posts` table. Some examples of how you would perform each of these operations are listed below:

### Tips for following along
Please read the SQL Alchemy section carefully, and try executing some of the sample commands using the flask shell. To access the flask shell:

{:.compact}
1. Open your Terminal / command prompt,
2. Navigate to your `hw07` files, and 
3. Type `flask shell`

Within the **flask shell**, you can interact with any of the data models (described in more detail below).

## Create new Post

### SQL
To create a new record in the `posts` table using SQL, you would issue this command:

```sql
    INSERT INTO posts(image_url, user_id, caption, alt_text, pub_date)
    VALUES(
        'https://picsum.photos/600/430?id=668', 
        3, 
        'Some caption text',
        'Some alt text',
        now()
    )
```

### SQLAlchemy
In SQL Alchemy, you create a record just like you would create any object. The only difference is that you have to add and commit the object to the database session:

```python
from models import Post, db

# 1. Create:
new_post = Post(
    image_url='https://picsum.photos/600/430?id=668',
    user_id=3, # must be a valid user_id or will throw an error
    caption='Some caption text',
    alt_text='Some alt text'
)
db.session.add(new_post)    # issues the insert statement
db.session.commit()         # commits the change to the database 
```

Try running the above command using the flask shell (and don't forget the import statement). 

## Simple Queries with <span class="emphasize">FLASK</span> SQL Alchemy
Just like in SQL, querying operations can be the most complex, as you often want to filter, join, and aggregate data. You will be using the Flask SQL Alchemy library for simple queries (<a href="https://flask-sqlalchemy.palletsprojects.com/en/2.x/queries/" target="_blank">Flask SQL Alchemy documentation here</a>). Please try issuing the commands below using the flask shell:

```python
from models import Post, db

# get all of the posts:
posts = Post.query.all()

# print posts:
print(posts)

# use loop to output specific post attributes: 
for post in posts:
    print(
        post.id, '|', 
        post.image_url, '|', 
        post.user.username, '| # comments:', 
        len(post.comments)
    )

# limit the # of posts:
posts = Post.query.limit(10).all()

# filter the posts (simple):
posts = Post.query.filter_by(user_id=5).all()

# filter the posts (by attribute of a joined table):
posts = Post.query.filter(Post.user.has(username='chad_marks')).all()

# get single post based on primary key (id column):
post = Post.query.get(5)

print(post)

# get the user of a post (from the users table)
post.user

# get all of the comments on a post (from the comments table)
post.comments
```

## Advanced Queries with <span class="emphasize">REGULAR</span> SQL Alchemy
"Flask SQL Alchemy" also inherits from "SQL Alchemy," so if you're looking to execute more complex queries, consult the regular SQL Alchemy documentation (<a href="https://docs.sqlalchemy.org/en/14/orm/tutorial.html#common-filter-operators" target="_blank">SQL Alchemy documentation here</a>). Some samples of some more complex queries are shown below. Again, you are encouraged to run these commands for yourself using the flask shell:

```python
from models import db, Post, User, Comment, Following
from sqlalchemy import func

engine = db.engine
session = db.session

# 1. query for substring matches using a "like" function:
posts = Post.query.filter(Post.caption.ilike('%tree%')).all()

# 2. "in" clause:
# give me all the posts that created by users 3, 4, or 5. 
posts = Post.query.filter(Post.user_id.in_([3, 4, 5])).all()

# 3. "not in" clause:
# give me all the posts that were NOT created by users 3, 4, or 5. 
posts = Post.query.filter(~Post.user_id.in_([3, 4, 5])).all()   

# 4. Join: two tables:
posts = (
    session
        .query(Post, User)
        .join(User, User.id==Post.user_id)
        .filter(User.username.ilike('%ere%')).all()
)

# 5. Join (three tables) to select particular columns and the comment count:
# Note that an "outer join" is needed on the comments table in the
# event that a post has no comments.
posts = (
    session
        .query(Post.id, User.username, func.count(Comment.id))
        .join(User, User.id==Post.user_id)
        .outerjoin(Comment, Post.id==Comment.post_id) 
        .group_by(Post.id, User.username)
        .all()
)

# 6. Get ids of all the users I'm following:
user_ids_tuples = (
    session
        .query(Following.following_id)
        .filter(Following.user_id == 5)
        .order_by(Following.following_id)
        .all()
)
user_ids = [id for (id,) in user_ids_tuples]

# 7. Raw SQL query example for more complex queries...
# The query below returns the post_id, username, # of comments, # of likes for every post:
sql = '''
SELECT posts.id AS post_id, users.username AS username,  
    count(distinct comments.id) AS comment_count,
    count(distinct likes_posts.id) AS likes_count
FROM posts 
JOIN users ON 
    users.id = posts.user_id 
LEFT OUTER JOIN comments ON 
    posts.id = comments.post_id 
LEFT OUTER JOIN likes_posts ON 
    posts.id = likes_posts.post_id 
GROUP BY posts.id, users.username;
'''
with engine.connect() as con:
    posts = list(con.execute(sql))
```

## Update Post
Here is an example of how you might update a post:
```python
from models import Post, db

post = Post.query.get(5)

post.image_url = 'https://picsum.photos/600/430?id=443'
post.caption = 'Updated caption'
post.alt_text = 'Updated alt text'

# commit changes:
db.session.commit() 
```

## Delete Post
And here is an example of how you might delete a post:
```python
from models import Post, db

Post.query.filter_by(id=5).delete()
db.session.commit()

post = Post.query.get(5) # should return None
```

Nice job issuing those SQL Alchemy queries! It just takes some practice to get the hang of interacting with your database using the ORM syntax.
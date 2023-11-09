---
title: 'How To Add A Custom Rich Text-Editor In Your Django Website'
description: 'Here is a sample of some basic Markdown syntax that can be used when writing Markdown content in Astro.'
publishDate: 'Jul 01 2022'
heroImage: '/blog-placeholder-1.jpg'
tags: ["javascript", "browser"]
---

# How To Add A Custom Rich Text-Editor In Your Django Website

In this article, I'll be taking you through the steps of integrating a text editor with the [Django-Ckeditor](https://django-ckeditor.readthedocs.io/) package.

We wil going through 8 simple steps.
Let's get started...

![giphy.gif](<https://cdn.hashnode.com/res/hashnode/image/upload/v1651501260170/Hin2tIIKG.gif> )

## Step 1: Installing Django-Ckeditor

*It'll only take a few steps.*

- Open the terminal or command line.
- Navigate to your project directory.
- Install django-ckeditor package with `pip install django-ckeditor`.

![installingcdeditor.png](<https://cdn.hashnode.com/res/hashnode/image/upload/v1651487603635/myMODzNQk.png> )

By now, you should have django-ckeditor in list of packages installed in your project directory.

- Don't fret, you can check it out using `pip freeze`.

![pipfreeze.png](<https://cdn.hashnode.com/res/hashnode/image/upload/v1651487832116/DGYVUgsOD.png> )

## Step 2: Adding Ckeditor to installed apps

-Open VS Code or your suitable IDE.
-Navigate to the `settings.py` file in your project directory.
-Add `ckeditor` to the `INSTALLED_APPS` list.

![settings.png](<https://cdn.hashnode.com/res/hashnode/image/upload/v1651491153711/vrSnkYLd6.png> )

## Step 3: Importing Rich-Text Field Into Our Django Models

In this step, we'll be adding the RichTextField in replacement of the form we want to add the Rich Text-Editor. Django has many fields, examples are: CharField, DateTimeField, etc.
You can learn more about fields here:
[django fields](https://docs.djangoproject.com/en/4.0/topics/db/models/#fields)

- Open the IDE and go to the ***models.py*** file in your project's app directory.
- We'll install Rich Text-Editor from django-ckeditor that was previously installed by writing the code at the top : `from ckeditor.fields import RichTextField`

![imp.png](<https://cdn.hashnode.com/res/hashnode/image/upload/v1651503839013/I5hNGusor.png> )

## Step 4: Replacing field with RichTextField

Now we need to change the field in our content field from `TextField` to the custom `RichTextField`.
In my project, the content field is the part of the blog that I want to allow customization for.

- Change the content field from `content = models.TextField(blank=True, null=True)` to `content = RichTextField(blank=True, null=True)`

![editfield.png](<https://cdn.hashnode.com/res/hashnode/image/upload/v1651490416536/AYWzlSNqa.png>)

## Step 5: Make Database Migrations

It is now clear that changes have been made to the database, so we have to make migrations and save it to continue.

- Open the terminal or command line.
- Run the following commands:  `python manage.py makemigrations`, `python manage.py migrate`

![alterfield.png](<https://cdn.hashnode.com/res/hashnode/image/upload/v1651490429880/Httb3mg1r.png>)

The migration message reads: '*alter field content*'. We are good to go.

## Step 6: Checking all changes made

By now, all the changes we've made should have been reflected in the admin section if we want to add a post.

- Open the terminal or command line.
- Run the server using: `python manage.py runserver`
- Go to the admin page, mine is localhost:8080/admin and go to the add post section.


```python
- Open the terminal or command line.
- Run the server using: `python manage.py runserver`
- Go to the admin page, mine is localhost:8080/admin and go to the add post section.


```

Before:

![workingbefore.png](<https://cdn.hashnode.com/res/hashnode/image/upload/v1651492161052/aN3pTgolH.png>)

After:

![workinggg.png](<https://cdn.hashnode.com/res/hashnode/image/upload/v1651492117462/4n4jRjAB0.png> )

## Step 7: Adding and viewing a new post

After checking our admin section and we can see that the ckeditor has been integrated successfully, it's time to add a new post and see the effects.

-Still on the admin page, proceed to add a post and add your desired customizations.

![addpost.png](<https://cdn.hashnode.com/res/hashnode/image/upload/v1651493430992/dUYT9ojEL.png> )

- Save the post and go to the blogpage to view the it.

![postbefore.png](<https://cdn.hashnode.com/res/hashnode/image/upload/v1651494311446/qbpTA0n8l.png> )

After adding the post, we noticed that the text are not properly escaped. Why is that so 💔?

> Django Templates are safe-by-default, which means that expressions are HTML-escaped by default. However, there are cases where expressions are not properly escaped.

The text are not safe-by-default because we are using a custom editor and that will be solved in the next and final step. You can chose to quit the server or not.

## Step 8: Making the template safe

This is the last and final step. We'll be making our content safe for ckeditor.

- Navigate to the template folder in your project folder.
- Then add `| safe` inside the paragraph element that our post content.

![safe.png](<https://cdn.hashnode.com/res/hashnode/image/upload/v1651501925569/eE68ucIbo.png> )

Now our post is safe and will be escaped properly.

- Go back to the terminal and run the server or reload the page if you did not quit the server.

Phew, it's now working properly.

![postafter.png](<https://cdn.hashnode.com/res/hashnode/image/upload/v1651494499491/i4RVWzPiJ.png> )


You have successfully added a rich text-editor to your django website.

If you've learned anything from this article, that's amazing! Don't forget to like and share with your network, thanks.

You can connect with me on Twitter [@dapo_adedire](https://www.twitter.com/dapo_adedire), LinkedIn [Dapo Adedire](https://www.linkedin.com/in/dapoadedire/).

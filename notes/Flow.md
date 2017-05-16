# Flow over the application

This documents the flow of the application and how we are going to update the Status. What are the core parts 
of this system and how the user is going to communicate with the application to create something?

Basic idea of all the communication that's going to happen.

- User is going to message the page link, they want to fetch
- Page is going to parse that link and post a new article on it's own page if the article is fetched and Parsed 
- Page bot is going to respond with the link, user can go to read the article.
- If the above operations by page doesn't succeed, page is going to return with an error

How are the messages going to be posted on the page?

The title of the post is going to contain some meta information about the Post such as the link of the post etc.
The comments are going to contain the actual information about the article, and there can be more than one comments depending
on the limit on the characters that can be in the single comment.

We can't do any of this with frequency as there's a major issue of being banned if we do this. My own facebook account can be in trouble because of this behaviour.


--------
First step! 
Get the messages from the Messenger to be displayed within the application 
--------
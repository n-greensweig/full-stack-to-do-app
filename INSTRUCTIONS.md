
## Weekend Challenge: SQL To-Do List

Hello Primers! 

Welcome to your weekend challenge!

Full stack is pretty awesome, huh? The idea that you are able to spin up a full application architecture in such a short time is pretty incredible. This weekend is all about showing us that you have a handle on each of the different parts of the full stack. 

## The To-Do App

You are going to create a 'TO DO' application. This type of application is very common to tackle when learning a new language, which makes it extremely valuable to work through for the first time. Chances are good that at some point in your career you will tackle this again while learning another language.

**Here are the specific components for the challenge:**

* Create a front end experience that allows a user to create a Task.
* When the Task is created, it should be stored inside of a database (SQL)
* Whenever a Task is created the front end should refresh to show all tasks that need to be completed.
* Each Task should have an option to 'Complete' or 'Delete'.
* When a Task is complete, its visual representation should change on the front end. For example, the background of the task container could change from gray to green. The complete option should be  'checked off'. Each of these are accomplished in CSS, but will need to hook into logic to know whether or not the task is complete.
* Whether or not a Task is complete should also be stored in the database.
* Deleting a Task should remove it both from the front end as well as the Database.

### Styling

Use CSS styling to move the aesthetic of the page beyond the vanilla HTML look:
  - background color of the page
  - font family and size
  - text color & or background color of tasks *to show whether or not they have been completed*

### Approach

We would recommend you spend some time thinking about how to approach this problem. Think through all the logic that will be needed prior to writing any code. Take your time, relax, remember that impostor syndrome is real, and that you are capable of knocking this out of the park!

### Create a Database

Be sure to create a new database through Postico. Use the name `weekend-to-do-app`. You will need to use this name in your database connection configuration on your server.

### Database Structure

Please include a `database.sql` text file in your repo that includes all of your `CREATE TABLE` queries. This is so we can re-create your database while testing your app.
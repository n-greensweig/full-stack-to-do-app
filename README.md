# Full Stack To-do App

This is a full-stack to-do app that allows one to add and delete to-do items from a to-do list. The project uses React for client- and server-side code and a PostgreSQL database to store user's to-do list items.

## Screenshot


## Setup Instructions

1. Create a database named ```weekend-to-do-app```
2. The queries in the database.sql file are set up to create all necessary tables and populate the needed data to allow the app to run correctly. The project is built on PostgreSQL, so you will need to have PostgreSQL installed for the app to work. We recommend using Postico to run those queries as that was used to create the queries
3. Open up your editor of choice and run an ```npm install```
4. Run ```npm run server``` in your terminal
5. Run ```npm run client``` in your terminal
6. The ```npm run client``` command will open up a new browser tab for you

## Checklist

### Part 1 - Set up
- [ ] Create a database named ```weekend-to-do-app```

### 
- [ ] To-do items run on the path ```/todo```
- [ ] Add the following React components: Form (with add button),

- [ ] Create React components for a user input form that takes in task name, assigned date, due date, and priority level
- [ ] Include a JSX button that allows users to complete or delete each task
- [ ] Change the background color to green and strikethrough the text of tasks that are completed
- [ ] Add a sweetalert pop-up to confirm the user wants to delete a task before officially doing so
- [ ] Create a database called `weekend-to-do-app` with the following columns: `id, taskName, taskAssignedDate, taskDueDate, priorityLevel, notes, completed`
- [ ] Set up sorting functionality to allow the user to sort the table by task name, assigned date, due date, priority level, or completion status
- [ ] Create a `database.sql` text file that includes all `CREATE TABLE` queries

Your project description goes here. What problem did you solve? How did you solve it?

Additional README details can be found [here](https://github.com/PrimeAcademy/readme-template/blob/master/README.md).

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

### Appending to the DOM
- [x] Add React components to the DOM: Form (with add button), List (of to-do items), Item (for each to-do item), Delete button, Complete button
- [x] The user input form takes in task `required`, and the following optional fields: due date and priority level  `optional shown`; URL, notes, email reminder? `optional hidden`

### Adding to and sorting from the DB
- [x] To-do items run on the path ```/todo```
- [ ] Client-side validation that due date is a date and priority level is not 'Select an  option...'
- [x] Add pop-up calendar for date inputs and and date edits
- [ ] Reformat dates from DB
- [ ] Change text color if item is marked high priority
- [ ] Server-side validation?

### Styling
- [ ] Change the background color to green and strikethrough the text of tasks that are completed
- [x] Add a sweetalert pop-up to confirm the user wants to delete a task
- [ ] Responsiveness
- [ ] Change the completed button to an empty or filled circle

### Stretch goals
- [ ] Allow users to create folders and sort tasks into different folders with a drop-down (e.g., 'Money', 'Work', 'School', 'Completed', 'Add new...')
- [ ] Allow drag and drop functionality to move tasks from one folder to another
- [ ] Allow users to choose the color of their app

### To-do 10/27
- [ ] Allow the user to sort the table by task name, due date, priority level, or completion status
- [ ] Add click-to-edit functionality for each TD item and date
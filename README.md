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

## Features to add

### Required and optional input fields
- [ ] Accept task `required`, and the following optional fields: due date and priority level  `optional shown`; URL, notes, email reminder? `optional hidden`
- [ ] Refactor SearchTasks and TaskList

### Handling PostgreSQL data
- [ ] Change text color if item is marked high priority
- [ ] Server-side validation?
- [ ] Handle null dates

### Styling
- [ ] Dullen and strikethrough the text of tasks that are completed
- [ ] Responsiveness
- [ ] Make click-to-edit availabillity clear
- [ ] Add spacing for each task

### Stretch goals
- [ ] Allow users to create folders and sort tasks into different folders with a drop-down (e.g., 'Money', 'Work', 'School', 'Completed', 'Add new...')
- [ ] Allow drag and drop functionality to move tasks from one folder to another
- [ ] Allow users to choose the color of their app
- [ ] Toggle light and dark mode
- [ ] Add filter option for dates
- [ ] Potentially organize by month, as in Apple reminder
- [ ] Allow the user to sort the table by task name, due date, priority level, or completion status
- [ ] Comment code
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

### Handling PostgreSQL data
- [ ] Handle null dates
- [ ] Allow for date and priority editing within to-dos
- [ ] Filter by date (and priority? and completed?)

### Styling
- [ ] Change text color if item is marked high priority
- [ ] Add spacing between columns
- [ ] Responsiveness

### Last steps
- [ ] Comment code
- [ ] Update README with screenshot, installation instructions, and description
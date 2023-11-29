# Priori: A Full-stack To-do App

## Table of Contents
- [Description](#Description)
- [Installation](#Installation)
- [Usage](#Usage)
- [Features](#Features)
- [Built With](#Built-With)
- [Contributing](#Contributing)

## Description
Priori is a full stack to-do app is a comprehensive application for task management. It allows users to add, search, sort, and track tasks efficiently. The app is built with React and Node.js, providing a dynamic and responsive user experience.

## Installation

1. Create a database named ```weekend-to-do-app```
2. Clone the repository: ```git clone https://github.com/n-greensweig/full-stack-to-do-app.git```
3. The queries in the database.sql file are set up to create all necessary tables and populate the needed data to allow the app to run correctly. The project is built on PostgreSQL, so you will need to have PostgreSQL installed for the app to work. We recommend using Postico to run those queries as that was used to create the queries.
4. Open up your editor of choice and run an ```npm install```
5. Next, run ```npm install @mui/material @emotion/react @emotion/styled``` and ```npm install @mui/icons-material```
6. Run ```npm run server``` in your terminal
7. Run ```npm run client``` in your terminal
8. The ```npm run client``` command will open up a new browser tab for you

## Usage
After starting the application:
1. Navigate through the app to add tasks using the 'UserForm'.
2. Search for specific tasks using the 'SearchTasks' component.
3. Sort tasks as needed using the 'SortTasks' feature.
4. View and manage your tasks in the 'TaskList' and 'TaskItem' components.

## Features
1. App: Main component that initializes the app (App.jsx).
2. SearchTasks: Allows users to search tasks (SearchTasks.jsx).
3. SortTasks: Feature to sort tasks (SortTasks.jsx).
4. UserForm: Component for adding new tasks (UserForm.jsx).
5. TaskList & TaskItem: Display and manage tasks (TaskList.jsx and TaskItem.jsx).
6. Todo Router: Handles routing for tasks on the server-side to get data from the database (todo.router.js).

## Built With
1. React.js - Frontend framework.
2. Node.js - Backend server.
3. Express - Server framework.
4. PostgreSQL - Database management.

## Contributing
Contributions are welcome. Please follow these steps to contribute:
1. Fork the repository.
2. Create a new branch (git checkout -b feature/YourFeature).
3. Commit your changes (git commit -m 'Add some feature').
4. Push to the branch (git push origin feature/YourFeature).
5. Open a pull request.

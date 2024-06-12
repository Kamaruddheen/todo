# Todo Application

A simple Todo application built with React. This application allows users to add new items to their Todo list, mark items as completed, delete items, and edit existing items.

## Features

- **Add Todo**: Users can add new todo items.
- **Toggle Todo**: Mark items as completed or incomplete.
- **Delete Todo**: Remove items from the list.
- **Edit Todo**: Update the title of existing todo items.
- **Persist Todos**: Todos are saved in local storage, so they persist across page reloads.

## Demo

[Live Demo](https://todo-appzs.vercel.app)

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Kamaruddheen/todo.git
   cd todo
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the application:**
   ```bash
   npm start
   ```

   The application will be available at `http://localhost:3000`

## Components

- **App**: The main component that uses the `useTodos` hook for state management and renders the `NewTodoForm` and `TodoList` components.
- **NewTodoForm**: Handles the input for new todos and calls `addTodo`.
- **TodoList**: Renders the list of todos and passes down props to `TodoItem`.
- **TodoItem**: Renders each todo item with options to toggle checkbox, edit, and delete.

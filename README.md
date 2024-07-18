![JS-ToDo App](to-do-list.png)

# TodoList Project

## GitHub Workflow

1. Pull the assignment to your local repo in your machine.
2. Start coding.
3. Use the following Git commands:
   - _git add_: Add the modified files to the staging area.
   - _git commit_: Commit your changes **always** with a descriptive message.
   - _git push_: Push your commits to your remote repository.
   - Create a pull request back to your branch.
   - Submit the URL of your pull request in the Athena platform.

**IMPORTANT**:

- Do not follow any tutorials ,if you follow the steps here you will have a fully working project :)

---

## Assignment Instructions

In this assignment, you will create a TodoList application using HTML, CSS, and JavaScript. The purpose of the assignment is to assess your understanding of the different JavaScript concepts we learned and your ability to follow instructions.

---

## Part1

### `Task1`: Setting up the Project

1. Create a new HTML file, JS file, and CSS file.
2. Link the JS and CSS files to your HTML file.

---

### `Task2`: Creating the User Interface

1. In your HTML file:

- Create a container `<div>` with the class name "container" to hold all the elements of the app.
- Add an `<h2>` element with the text "Todo App" inside the container.
- Create a `<div>` with the `id "input-container"` inside the container.

  - Inside the `"input-container" div`, add an:
    - input text field with the `id "inputTask"`
    - and a `button` with the `id "addTask"`.

- Create another `<div>` with the `id "lists-container"` inside the container. This `div` will contain the dynamically generated task list.
- Inside the `"lists-container" div`, create an empty unordered list `<ul>` with the `id "todo-list"`.

---

### `Task 3`: Implementing the TodoList Functionality

- Your 'todos' are going to be an `[array of objects]` that you'll want to dynamically create, which means either using factories or constructors/classes to generate them.
- Once a new task is added, we’ll create a new todo object , push it into the array and render the value of the text property on the screen.

**How to start??**

1.  In your JS file:

- Declare an empty array called todoItems to store the tasks.

- Create a (factory function or Class,constructors (choose which syntax you want to use)) called `CreateTodo` that takes a `task text` as a parameter and returns a todo object with properties `text`, `checked`, and `id`.

  - The `checked` property should be initially set to `false`,
  - and the `id` should be a unique identifier for the task (you can use Date.now() to generate a timestamp-based unique ID) or any unique value.

- test your function and console.log your todoItems array.

- **Now let's add the tasks to the list**:

- Create an event listener for the `"addTask" button` ,with click type event .
- Build the event handler function and call it `addTodo`, where you need to :

  - Retrieve the task text from the `"inputTask"` input field.
  - Check if the task text is empty. If it is, display an alert to the user to enter a task.
  - If the task text is not empty, create a new todo object using the `createTodo` factory function.
  - Push the todo object into the todoItems array.
  - Logged the array to the console to check if the task object is successfully created or not.

    Finally, the task is pushed to the todoItems array, and the array is logged to the console.

        After creating the task object and clicking on the add button, it is logical to expect that the task will be rendered or displayed in the screen's task list. Is this the intended outcome?to do so

  - Call a function called renderTodo to update the `task list` in the DOM ,we did not create the function yet, so we need to [build it first ](#Implement-the-renderTodo-function) !!!then we continue

    After rendering the task and for a better user experience

  - Clear the value of the "inputTask" input field
    (think what value should be added to clear it)
  - focus the text field so that the user can add multiple items to the list without having to focus the input over and over again.

  **_`Hint:`_** search about Input Text `focus()` Method,to know what is it.

---

2. ### Implement the renderTodo function:

- Inside the function, select the `"todo-list"` `<ul>` element from the DOM.
- Iterate over the todoItems array:
  - For each todo object, create an `<li>` element and set its innerHTML to the task text.
  - Append the `<li>` element to the "todo-list" `<ul>` element.

---

3. ### Implement the "remove last task" functionality:

- In your JS file, add an event listener for the "removeLastTask" button click event.
- Inside the event listener function:
- Check if the todoItems array is empty. If it is, display an alert to the user.
- If the todoItems array is not empty, remove the last todo object from the todoItems array.
  As an added point give the user the option to cancel the deletion process if they changed their decision (check window.confirm method)
- Call the renderTodo function to update the task list in the DOM.

  `Before you move forward test your app for this case:
Try to add multiple white spaces and click on the add button , what will happen? how you will solve it ?!`

---

### `Task 4`: Styling the TodoList App

- In your CSS file, apply styles to make your TodoList app visually appealing.
- Feel free to use CSS frameworks or customize the styling according to your preferences.

---

```
Congratulations:
Now you build Todo App that can add and remove tasks.

```

---

## Part2

### Enrich our app with more features:

### `Task5`: Mark a task as completed:

- When you add a task, add a checkbox in front of each one.
- Add an event-listener on your checkbox that will mark your task as completed(strike-through task) when checked.

#### How to ?!

- In the renderTodoList() function, inside the loop that creates the <li> elements, add the following steps:
  - Create an `input` element of type "checkbox".
  - Add an event listener to the checkbox for the "change" event.
  - Inside the event listener, update the checked property of the corresponding todo object based on the checkbox's checked value.
  - If the todo item is checked, apply a CSS style to strike through the text.

---

### `Task6`: Add Delete Icons to Tasks to Delete a single task when clicked

- Add a remove icon for each task(you can use a `span` element and Set the innerHTML of the delete icon to the HTML code for the delete symbol (e.g., &times;)) ,

### Be creative !!!

- Add an event listener on this button that will remove that task when clicked and update the DOM.

`it's your turn now to think on how to remove the corresponding todo object from the todoItems array and update the todo list ,remember that each task has a unique id ;)`

---

### `Task7`: Add Remove Completed Tasks Button to Remove all the completed tasks :

- Create a new button that will remove the completed tasks only whenever the button is clicked.
- Think how you will filter the todoItems array to remove the completed tasks?
- Update the todo list to reflect the changes.

---

### Task8 : ` Add Edit Functionality to Tasks`:

- Try to figure out a way to edit the tasks, it's up to you how to do so.

### some hints :

- html edit symbol (e.g., &#9998;).
- for simplicity you can use initially the prompt
  Inside the event listener,how? prompt the user to enter a new task text.
  If the user enters a new text and clicks OK, update the text property of the corresponding todo object and update the todo list.

---

### Task 9 : `Style the Todo App again with the new changes`

Add suitable CSS styles to format and style the todo app elements.
You can set font styles, colors, margins, padding, etc., to make the app visually appealing.
Consider using CSS classes and selectors to target specific elements and apply styles.

---

Remember : Always There's a place for more creative ideas (pending tasks, due date ,...)

---

<h1 style= "text-align :center"> Happy Hacking !!!</h1>

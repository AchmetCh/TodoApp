let todoItems = [];
let doneItems = [];

class CreateTodo {
  constructor(taskText) {
    this.taskText = taskText;
    this.checked = false;
    this.id = Date.now();
    let date = new Date()
    this.hour = date.getHours()
    this.min = date.getMinutes()
  }
}

function loadFromLocalStorage() {
  const storedTodos = localStorage.getItem('todoItems');
  const storedDoneItems = localStorage.getItem('doneItems');

  if (storedTodos) {
    todoItems = JSON.parse(storedTodos);
  }

  if (storedDoneItems) {
    doneItems = JSON.parse(storedDoneItems);
  }
}

function saveToLocalStorage() {
  localStorage.setItem('todoItems', JSON.stringify(todoItems));
  localStorage.setItem('doneItems', JSON.stringify(doneItems));
}

window.addEventListener("load", function () {
  loadFromLocalStorage();
  renderTOdo();
  renderDoneItems();
  document.getElementById("inputTask").focus();
  document.getElementById("taskBtn").innerText = todoItems.length;
});

function renderDoneItems() {
  let todoListDone = document.getElementById("todo-list-done");
  todoListDone.innerHTML = "";
  doneItems.forEach((done) => {
    let doneLi = document.createElement("li");
    doneLi.setAttribute("class", "doneLi");
    doneLi.textContent = done.doneItem;
    todoListDone.appendChild(doneLi);
    document.getElementById("taskBtn").innerText = todoItems.length;
  });  
}

let clearAll = document.getElementById('clearAll')
clearAll.addEventListener('click', function() {
  console.log('clear')
 doneItems = []
 saveToLocalStorage()
 renderDoneItems()
 document.getElementById("taskBtn").innerText = todoItems.length;
})


let addTaskBtn = document.getElementById("addTask");
addTaskBtn.addEventListener("click", addTodo);

let inputTask = document.getElementById("inputTask");
inputTask.addEventListener("keyup", function (e) {
  if (e.key === "Enter") {
    addTodo();
  }
});

function addTodo(e) {
  console.log(e);
  let inputTask = document.getElementById("inputTask");
  if (inputTask.value.trim() === "") {
    alert("Please enter a Task");
  } else {
    let newTodo = new CreateTodo(inputTask.value);
    todoItems.push(newTodo);
    saveToLocalStorage();
    loadFromLocalStorage();
    console.log("new todo", todoItems);
  }
  document.getElementById("taskBtn").innerText = todoItems.length;
  inputTask.value = "";
  inputTask.focus();
  renderTOdo();
}


function renderTOdo() {
let todoList = document.getElementById("todo-list");
  todoList.innerHTML = "";
  todoItems.forEach((todo) => {
    let listItems = document.createElement("li");
    listItems.setAttribute("class", "todoList");
    todoList.appendChild(listItems);
    let checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    checkbox.setAttribute("class", "form-check-input");
    checkbox.style.marginRight = "20px";
    listItems.appendChild(checkbox);
    checkbox.addEventListener("change", function () {
      if (this.checked) {
        todo.checked = true;
        span2.style.textDecoration = "line-through";
        span2.style.textDecorationColor = "red";
        span2.style.textDecorationThickness = "20%";
      } else {
        todo.checked = false;
        span2.style.textDecoration = "none";
      }
    });
    let span2 = document.createElement("span");
    span2.setAttribute('class', 'span2')
    span2.innerHTML = todo.taskText + ' (' + todo.hour + ':'+ todo.min + ')';
    listItems.appendChild(span2);

    let editBtn = document.createElement("i");
    editBtn.setAttribute("class", "bi bi-pencil-fill");
    editBtn.style.marginRight = "10px";
    listItems.appendChild(editBtn);
    editBtn.addEventListener("click", function () {
      let change = prompt("Rename Task?", todo.taskText);
      if (change != null && change !== "") {
        span2.innerHTML = change;
      }
    });

    let deleteBtn = document.createElement("i");
    deleteBtn.setAttribute("class", "bi bi-trash");
    listItems.appendChild(deleteBtn);
    deleteBtn.addEventListener("click", function () {
      if (window.confirm("Are you sure?")) {
        let index = todoItems.indexOf(todo);
        if (index !== -1) {
          todoItems.splice(index, 1);  
          renderTOdo();
          saveToLocalStorage();
        }
        document.getElementById("taskBtn").innerText = todoItems.length;
      }
    });
  });
}

let removeLastTask = document.getElementById("removeLastTask");
removeLastTask.addEventListener("click", removeLast);

function removeLast() {
  if (todoItems.length < 1) {
    alert(`There's no Todo's`);
  } else {
    if (window.confirm("Do you really want to delete")) {
      todoItems.pop();
    }
    saveToLocalStorage();
    renderTOdo();
  }
  document.getElementById("taskBtn").innerText = todoItems.length;
}

let removeAllCompleted = document.getElementById("removeAll");
removeAllCompleted.addEventListener("click", function () {
  if (window.confirm("Delete All Completed?")) {
    todoItems = todoItems.filter((e) => e.checked === false);
  }
  saveToLocalStorage();
  renderTOdo();
  document.getElementById("taskBtn").innerText = todoItems.length;
});

class DoneItem {
  constructor(doneItem) {
    this.doneItem = doneItem;
    let date = new Date()
    this.hour = date.getHours()
    this.min = date.getMinutes()
  }
}
let moveToDone = document.getElementById("moveToDone");
moveToDone.addEventListener("click", function () {
  let completedTasks = todoItems.filter((e) => e.checked);
  completedTasks.forEach((task) => {
    doneItems.push(new DoneItem(task.taskText));
  });

  todoItems = todoItems.filter((e) => e.checked === false);
  saveToLocalStorage();
  renderTOdo();
  let todoListDone = document.getElementById("todo-list-done");
  todoListDone.innerHTML = "";
  doneItems.forEach((done) => {
    let doneLi = document.createElement("li");
    doneLi.setAttribute("class", "doneLi");
    doneLi.textContent = done.doneItem;
    todoListDone.appendChild(doneLi);
  });

  document.getElementById("taskBtn").innerText = todoItems.length;
});

let min = document.getElementById('min')
let sec = document.getElementById('sec')
min.innerText = 24
sec.innerText = 59

let startBtn = document.getElementById('startBtn')
let stopBtn = document.getElementById('stopBtn')
let overtime = document.getElementById('overtime')
overtime.style.display = 'none'
let timer;
 function startBtnClickHandler () {
  console.log('start')
  timer = setInterval(function() {
    +sec.innerText--
    if (+sec.innerText === 0) {
      +min.innerText--
      sec.innerText = 59
    } else if ( (+sec.innerText <= 1) && (+min.innerText <= 0)) {
      sec.innerText = 0
      min.innerText = 0
      overtime.style.display = 'inline-block'
      console.log('times is up')
      sec.innerText = 0
      clearInterval(timer)
      startBtn.removeEventListener('click', startBtnClickHandler);
    }
  }, 1000);
}

startBtn.addEventListener('click', startBtnClickHandler)

stopBtn.addEventListener('click', function() {
  console.log('stop')
  clearInterval(timer)
})


//working timer with set interval
// let timer = setInterval(function () {
//   let date = new Date()
//   let hour = date.getHours()
//   let min = date.getMinutes()  
//   let sec = date.getSeconds()  
//    if (sec === 59) {
//        clearInterval(timer)
//        console.log('its 00')
//    }   console.log(hour.toString().padStart(2,'0'),min.toString().padStart(2,'0'),sec.toString().padStart(2,'0'))
//   }, 1000)
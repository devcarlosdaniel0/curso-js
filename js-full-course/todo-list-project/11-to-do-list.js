const todoList = [];

function renderTodoList() {
  let todoListHTML = "";

  todoList.forEach(function (todoObject, index) {
    const { name, date } = todoObject;

    const html = `
                    <div>${name}</div> 
                    <div>${date} </div> 
                    <button onclick="deleteTodo(${index})">Delete</button> 
                    `;
    todoListHTML += html;
  });

  document.querySelector(".todo-list-area").innerHTML = todoListHTML;
}

document.querySelector(".add-btn").addEventListener("click", () => {
  addTodo();
});

function addTodo() {
  const inputTextElement = document.querySelector(".input-text");
  const inputDateElement = document.querySelector(".input-date");

  const name = inputTextElement.value;
  const date = inputDateElement.value;

  if (name && date) {
    todoList.push({
      name,
      date,
    });

    inputTextElement.value = "";

    renderTodoList();
  }
}

document.querySelector(".input-text").addEventListener("keydown", () => {
  addTodoWhenEnterPressed(event);
})

function addTodoWhenEnterPressed(event) {
  if (event.key === "Enter") {
    addTodo();
  }
}

function deleteTodo(i) {
  todoList.splice(i, 1);
  renderTodoList();
}

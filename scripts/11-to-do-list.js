const todoList = [];

function renderTodoList() {
  let todoListHTML = "";

  for (let i = 0; i < todoList.length; i++) {
    const todo = todoList[i];
    const html = `<p>${todo}</p>`;
    todoListHTML += html;
  }

  document.querySelector(".todo-list-area").innerHTML = todoListHTML;
}

function addTodo() {
  let inputElement = document.getElementById("input-text");
  let inputValue = inputElement.value;

  todoList.push(inputValue);

  inputElement.value = "";

  renderTodoList();

  console.log(todoList);
}

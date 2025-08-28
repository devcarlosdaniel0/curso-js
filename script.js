let counter = 0;
let input = document.getElementById("inputText");
let btnAdd = document.getElementById("btnAdd");
let main = document.getElementById("list");

function addTask() {
  let inputValue = input.value;

  inputValue.trim();

  if (inputValue !== "" && inputValue !== null && inputValue !== undefined) {
    counter++;

    let newTask = `
        <div class="item" id="${counter}">
            <div class="itemName">${inputValue}</div>
            <div class="itemButton" onclick="deleteTask(${counter})">Deletar</div>
        </div>
        `;

    main.innerHTML += newTask;

    input.value = "";

    input.focus();
  }
}

function deleteTask(id) {
    var task = document.getElementById(id);

    task.remove();
}

input.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        btnAdd.click();
    }
})
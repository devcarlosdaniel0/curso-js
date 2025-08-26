function turnRed() {
    let div = document.getElementById("div");

    div.style.backgroundColor = "red";
}

function turnBlue() {
    let div = document.getElementById("div");

    div.style.backgroundColor = "blue";
}

function appendTextWhenMoved() {
    let text = document.getElementById("text");
    text.append("Mouse moved");
}
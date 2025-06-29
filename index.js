
const display = document.getElementById('disMoni');

function appendToDisplay(input) {
    display.value += input;
}


function calculate() {
    display.value = eval(display.value);
}

function clearScreen() {
    display.value = "";
}
const buttons = document.querySelectorAll("button");
let screen = document.querySelector("#screen");

const operators = ["-", "+", "÷", "×"];

function AppendToDisplay(char) {
  let stringLen = screen.value.length;
  let lastChar = screen.value.charAt(stringLen - 1);
  if (operators.includes(lastChar) && operators.includes(char)) {
    return;
  }
  screen.value += char;
}

function Clear() {
  screen.value = "0";
}

function Evaluate() {
  try {
    screen.value = eval(screen.value);
  } catch (error) {
    screen.value = "error";
    setTimeout(() => {
      screen.value = "";
    }, 5000);
  }
}

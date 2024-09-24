let firstNumber = null;
let secondNumber = null;
let operator = null;
let displayValue = document.querySelector(".display");

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => button.addEventListener("click", handleClick));

function add(num, num2) {
  return +num + num2;
}

function subtract(num, num2) {
  return num - num2;
}

function multiply(num, num2) {
  return num - num2;
}

function divide(num, num2) {
  return num / num2;
}

function operate(operator, num, num2) {
  switch (operator) {
    case "+":
      return add(num, num2);
      break;
    case "-":
      return subtract(num, num2);
      break;
    case "*":
      return multiply(num, num2);
      break;
    case "/":
      return divide(num, num2);
      break;
    default:
      break;
  }
}

function handleClick(event) {
  const DEFAULT_VALUE = "";
  const CLEAR_VALUE = "c";
  const EQUAl_VALUE = "=";

  const value = event.target.innerText;

  switch (value) {
    case CLEAR_VALUE:
      displayValue.innerText = DEFAULT_VALUE;
      break;
    case EQUAl_VALUE:
      
      break;
    default:
      if (isValidInput(value)) {
        displayValue.innerText += value;
      }
      break;
  }
}

function isValidInput(value) {
  const display = displayValue.innerText;
  const OPERATORS = "+-x/";
  const MAX_SIZE = 14;

  if (display.length === MAX_SIZE) {
    return false;
  }

  if (display === "" && OPERATORS.includes(value)) {
    return false;
  }

  if (OPERATORS.includes(display.slice(-1)) && OPERATORS.includes(value)) {
    return false;
  }

  for (const key in display) {
    if (OPERATORS.includes(display[key]) && OPERATORS.includes(value)) {
      return false;
    }
  }

  return true;
}

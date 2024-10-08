const OPERATORS = "+-x/";
let firstNumber = null;
let secondNumber = null;
let operator = null;
let displayValue = document.querySelector(".display");

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => button.addEventListener("click", handleClick));

function add(num, num2) {
  return +num + +num2;
}

function subtract(num, num2) {
  return num - num2;
}

function multiply(num, num2) {
  return Math.round(num * num2 * 10) / 10;
}

function divide(num, num2) {
  if (num2 === "0") {
    return "Zero? Really??";
  }
  return Math.round(num / num2 * 10) / 10;
}

function operate(operator, num, num2) {
  switch (operator) {
    case "+":
      return add(num, num2);
      break;
    case "-":
      return subtract(num, num2);
      break;
    case "x":
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
  const BACKSPACE_VALUE = "⌫";

  const value = event.target.innerText;

  switch (value) {
    case CLEAR_VALUE:
      displayValue.innerText = DEFAULT_VALUE;
      break;
    case BACKSPACE_VALUE:
      displayValue.innerText = displayValue.innerText.slice(0, -1);
      break;
    case EQUAl_VALUE:
      if (isValidExpression(displayValue.innerText)) {
        displayValue.innerText = operate(operator, firstNumber, secondNumber);
      }
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
  const MAX_SIZE = 14;

  if (display.length === MAX_SIZE) {
    return false;
  }

  if (display.startsWith("-")) {
    return false;
  }

  if (display === "" && (OPERATORS.includes(value) || value === ".")) {
    return false;
  }

  if (
    (OPERATORS.includes(display.slice(-1)) || display.slice(-1) === ".") &&
    (OPERATORS.includes(value) || value === ".")
  ) {
    return false;
  }

  const parts = display.split(/[+\-x/]/);
  const currentNumber = parts[parts.length - 1];
  if (currentNumber.includes(".") && value === ".") {
    return false;
  }

  for (const key in display) {
    if (OPERATORS.includes(display[key]) && OPERATORS.includes(value)) {
      return false;
    }
  }

  return true;
}

function isValidExpression(expression) {
  const parts = expression.split(/[+\-x/]/).filter((part) => part !== "");

  if (parts.length === 2) {
    firstNumber = parts[0];
    secondNumber = parts[1];
    operator = expression.charAt(expression.search(/[+\-x/]/));
    return true;
  }

  return false;
}

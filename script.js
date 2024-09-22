let firstNumber = null;
let secondNumber = null;
let operator = null;

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

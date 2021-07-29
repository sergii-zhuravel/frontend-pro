const OPERATIONS = [
  "+",
  "add",
  "-",
  "sub",
  "*",
  "mult",
  "/",
  "div",
  "%",
  "mod",
];
const ERROR_MESSAGE = "Validation error. Please try again.";
const firstNumber = getNumber("Please specify the 1st number");
const secondNumber = getNumber("Please specify the 2nd number");
const operation = getOperation(
  `Please specify which operation to perform:
  ${OPERATIONS.join(", ")}.`
);

displayResult(calculateResult(firstNumber, secondNumber, operation));

function displayResult(message) {
  alert(message);
}

function getNumber(message) {
  let number = prompt(message);
  if (isNaN(number)) {
    alert(ERROR_MESSAGE);
  }
  return +number;
}

function getOperation(message) {
  let operation = prompt(message);
  return operation;
}

function calculateResult(firstNumber, secondNumber, operation) {
  let result;
  switch (operation) {
    case "+":
    case "add":
      result = `${firstNumber} + ${secondNumber} = ${
        firstNumber + secondNumber
      }`;
      break;
    case "-":
    case "sub":
      result = `${firstNumber} - ${secondNumber} = ${
        firstNumber - secondNumber
      }`;
      break;
    case "*":
    case "mult":
      result = `${firstNumber} * ${secondNumber} = ${
        firstNumber * secondNumber
      }`;
      break;
    case "/":
    case "div":
      result = `${firstNumber} / ${secondNumber} = ${
        firstNumber / secondNumber
      }`;
      break;
    case "%":
    case "mod":
      result = `${firstNumber} % ${secondNumber} = ${
        firstNumber % secondNumber
      }`;
      break;
    default:
      result = "Incorrect operation was provided";
  }
  return result;
}

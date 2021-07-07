
const questionOne = {
  question: 'My fist question',
  correctAnswer: 'correct answer'
};

const unswer = prompt(questionOne.question);
if (unswer === questionOne.correctAnswer) {

}

console.log(questionOne.q);
questionOne.q = "test";
console.log(questionOne.q);

const myCarColor = 'red';
const myCarNumberOfDoors = 3;
const myCarEngine = 'electric';

const myCar = {
  color: 'red',
  numberOfDoors: 3,
  engine: 'electric'
}

const hisCar = {
  color: 'red',
  numberOfDoors: 3,
  engine: 'electric'
}




function sumTwoNumbers(a, b) {
  if (
    typeof a === "number" &&
    typeof b === "number" &&
    !Number.isNaN(a) &&
    !Number.isNaN(b)
  ) {
    const result = a + b;
    return result;
  }
  alert("Two numbers are mandatory");
}

var printResultToConsole = function (p) {
  console.log("Result = ", p);
};

printResultToConsole(sumTwoNumbers(2, 2));
printResultToConsole(sumTwoNumbers(2, 3));
printResultToConsole(sumTwoNumbers(2, 4));
printResultToConsole(sumTwoNumbers(2, 5));


----------------------

sumTwoNumbers -> {...}
printResultToConsole
-----
sumTwoNumbers -> {...}
printResultToConsole -> {...}

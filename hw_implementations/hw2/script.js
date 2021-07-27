// constants, initial data configuration
const questionOne = "Сколько будет 2 + '2' в JavaScript?";
const questionTwo = "Назовите оператор присваивания в JavaScript";
const questionThree = "Сколько будет 5 / 0?";
const questionFour = "Одинаково ли работает == и === в JavaScript?";
const questionFive = "Чему равно выражение Boolean(null) в JavaScript?";

const correctAnswerOne = "22";
const correctAnswerTwo = "=";
const correctAnswerThree = "infinity";
const correctAnswerFour = "no";
const correctAnswerFive = "false";

// input from user
const answerOne = prompt(questionOne);
const answerTwo = prompt(questionTwo);
const answerThree = prompt(questionThree);
const answerFour = prompt(questionFour);
const answerFive = prompt(questionFive);

let result = 0;

if (answerOne === correctAnswerOne) {
  result += 10;
}

if (answerTwo === correctAnswerTwo) {
  result += 10;
}

if (answerThree.toLowerCase() === correctAnswerThree) {
  result += 10;
}

if (answerFour === correctAnswerFour) {
  result += 10;
}

if (answerFive === correctAnswerFive) {
  result += 10;
}

alert(
  `Ваш результат: ${result} баллов. ${
    result >= (50 / 100) * 60 ? "Вы прошли тест." : "Вы не прошли тест."
  }`
);

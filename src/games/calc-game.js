import main from '../cli.js';
import { randomNum, request, compare } from '../index.js';

function getRandomInt() {
  const char = ['+', '-', '*'];
  return char[Math.floor(Math.random() * 3)];
}

function calcGame() {
  const name = main();
  const obj = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
  };
  let sum = 0;
  console.log('What is the result of the expression? ');
  while (sum !== 3) {
    const num1 = randomNum();
    const num2 = randomNum();
    const index = getRandomInt();
    console.log(`Question: ${num1} ${index} ${num2}`);
    const response = request();
    const result = obj[index];
    const decision = result(num1, num2);
    if (compare(+response, decision, name)) {
      sum += 1;
    } else {
      break;
    }
  }

  return console.log(`Congratulations, ${name}`);
}

export default calcGame;

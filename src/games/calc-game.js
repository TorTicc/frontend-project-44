import main from '../cli.js';
import { randomNum, request } from '../index.js';

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
  while (sum < 3) {
    const num1 = randomNum();
    const num2 = randomNum();
    const index = getRandomInt();
    console.log(`Question: ${num1} ${index} ${num2}`);
    const response = request();
    const result = obj[index];
    const decision = result(num1, num2);
    if (+response === decision) {
      console.log('Correct');
      sum += 1;
    } else {
      return console.log(
        `'${response}' is wrong answer ;(. Correct answer was '${decision}'.\nLet's try again ${name}!`,
      );
    }
  }

  return console.log(`Congratulations, ${name}`);
}

export default calcGame;

import { randomNum, request, compare } from '../index.js';
import main from '../cli.js';

function gcd(a, b) {
  let copyA = a;
  let copyB = b;
  while (b !== 0) {
    const temp = copyB;
    copyB = a % b;
    copyA = temp;
  }
  return copyA;
}

function gcdGame() {
  let sum = 0;
  const name = main();
  console.log('Find the greatest common divisor of given numbers.');
  while (sum !== 3) {
    const num1 = randomNum() * 3;
    const num2 = randomNum() * 2;
    console.log('Question:', num1, num2);
    const response = request();
    const decision = gcd(num1, num2);
    if (compare(+response, decision, name)) {
      sum += 1;
    } else {
      return false;
    }
  }
  return console.log(`Congratulations, ${name}`);
}

export default gcdGame;

import { randomNum, request, compare } from '../index.js';
import main from '../cli.js';

export default function gameEven() {
  const name = main();
  let sum = 0;
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  while (sum !== 3) {
    const number = randomNum();
    console.log('Question: ', number);
    const response = request();
    const decision = number % 2 === 0 ? 'yes' : 'no';
    if (compare(response, decision, name)) {
      sum += 1;
    } else {
      return false;
    }
  }
  return console.log('Congratulations,', name);
}

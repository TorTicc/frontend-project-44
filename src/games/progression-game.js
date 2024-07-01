import main from '../cli.js';
import {
  compare,
  wrongAns,
  truesAns,
  randomNum,
  request,
  randomDerivative,
} from '../index.js';

function arrComp(lengthArr, difference) {
  const progArr = [randomNum()];
  for (let i = 0; i < lengthArr; i += 1) {
    progArr.push(progArr[i] + difference);
  }
  return progArr;
}

export default function progressionGame() {
  let sum = 0;
  const name = main();
  console.log('What number is missing in the progression?');
  while (sum !== 3) {
    const lengthArr = randomDerivative(5, 10);
    const difference = randomDerivative(3, 5);
    const progArr = arrComp(lengthArr, difference);
    const arrLength = progArr.length;
    const randomReplaceChar = randomDerivative(0, arrLength);
    const decision = progArr.splice(randomReplaceChar, 1, '..');
    console.log('Question:', progArr.join(' '));
    const response = request();
    if (compare(+response, +decision)) {
      truesAns();
      sum += 1;
    } else {
      return wrongAns(response, decision, name);
    }
  }
  return console.log(`Congratulations, ${name}!`);
}

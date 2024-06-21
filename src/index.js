import readlineSync from 'readline-sync';

function randomNum() {
  return Math.floor(Math.random() * 15);
}

function request() {
  return readlineSync.question('Your answer: ');
}
function compare(response, decision, name) {
  if (response === decision) {
    console.log('Correct');
    return true;
  }
  console.log(
    `'${response}' is wrong answer ;(. Correct answer was '${decision}'.\nLet's try again ${name}!`,
  );
}
function randomDerivative(min, max) {
	return Math.floor(Math.random() * (max - min) + min)
}

export { randomNum, request, compare, randomDerivative };

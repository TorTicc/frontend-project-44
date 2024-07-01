import readlineSync from 'readline-sync';

function randomNum() {
  return Math.floor(Math.random() * 15);
}

function request() {
  return readlineSync.question('Your answer: ');
}
function compare(response, decision) {
  if (response === decision) {
    return true;
  }
  return false;
}
function randomDerivative(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
function wrongAns(response, decision, name) {
  return console.log(
    `'${response}' is wrong answer ;(. Correct answer was '${decision}'.\nLet's try again ${name}!`,
  );
}
function truesAns() {
  return console.log('Correct');
}

export {
  truesAns, randomNum, request, compare, randomDerivative, wrongAns,
};

import readlineSync from 'readline-sync';

export default function main() {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
}

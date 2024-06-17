import readlineSync from 'readline-sync'

export default function isEven(name) {
	let sum = 0
	console.log('Answer "yes" if the number is even, otherwise answer "no".')
	while (sum !== 3) {
		const number = random()
		console.log('Question: ', number)
		const response = readlineSync.question('Your answer: ')
		const ans = number % 2 === 0 ? 'yes' : 'no'
		if (response === ans) {
			console.log('Correct!')
			sum += 1
		} else {
			return console.log(
				`${response} is wrong answer ;(. Correct answer was ${ans}.`
			)
		}
	}
	if (sum === 3) return console.log('Congratulations,', name)
	function random() {
		return Math.ceil(Math.random() * 15)
	}
}

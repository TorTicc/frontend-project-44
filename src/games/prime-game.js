import main from '../cli.js'
import { randomNum, request, compare, randomDerivative } from '../index.js'

export default function primeGame() {
	let sum = 0
	const name = main()
	console.log('Answer "yes" if given number is prime. Otherwise answer "no".')
	while (sum !== 3) {
		const num = randomDerivative(2, 15)
		console.log(`Question: ${num}`)
		const decision = isPrime(num)
		const response = request()
		if (compare(response, decision, name)) {
			sum += 1
		} else {
			return false
		}
	}
	console.log()
}

function isPrime(num) {
	if (num <= 3) return 'yes'
	if (num % 2 === 0 || num % 3 === 0) return 'no'
	for (let i = 2; i < num; i++) {
		return num % i === 0 ? 'no' : 'yes'
	}
}

import { randomNum, request, compare } from '../index.js'
import main from '../cli.js'
function gcdGame() {
	let sum = 0
	const name = main()
	console.log('Find the greatest common divisor of given numbers.')
	while (sum !== 3) {
		const num1 = randomNum() * 3
		const num2 = randomNum() * 2
		console.log('Question:', num1, num2)
		const response = parseInt(request())
		const decision = gcd(num1, num2)
		if (compare(response, decision, name)) {
			sum += 1
		} else {
			return false
		}
	}
	return console.log(`Congratulations, ${name}`)
}

function gcd(a, b) {
	while (b !== 0) {
		const temp = b
		b = a % b
		a = temp
	}
	return a
}
export default gcdGame

import main from '../cli.js'
import { randomNum, request, compare } from '../index.js'

export default function progressionGame() {
	let sum = 0
	const name = main()
	console.log('What number is missing in the progression?')
	while (sum !== 3) {
		const lengthArr = randomDerivative(5, 10)
		const difference = randomDerivative(3, 5)
		const progArr = arrComp(lengthArr, difference)
		const arrLength = progArr.length
		const randomReplaceChar = randomDerivative(0, arrLength)
		const decision = progArr.splice(randomReplaceChar, 1, '..')
		console.log('Question:', progArr.join(' '))
		const response = parseInt(request())
		if (compare(response, decision[0], name)) {
			sum += 1
		} else {
			return false
		}
	}
	console.log(`Congratulations, ${name}`)
}

function randomDerivative(min, max) {
	return Math.floor(Math.random() * (max - min) + min)
}
function arrComp(lengthArr, difference) {
	const progArr = [randomNum()]
	for (let i = 0; i < lengthArr; i++) {
		progArr.push(progArr[i] + difference)
	}
	return progArr
}

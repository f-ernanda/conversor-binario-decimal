const convertBinaryToDecimal = () => {
	const binaryInput = document.querySelector('#binary-input')
	const decimalOutput = document.querySelector('#decimal-output')

	const alert = document.querySelector('.alert')

	const deleteLastInput = (value) => value.slice(0, -1)
	const createArrayFromString = (str) => Array.from(str)
	const getDecimalNumber = (arr) => arr.reverse().map( (value, index) => value * 2 ** index).reduce( (acc, cur) => acc + cur)

	binaryInput.addEventListener('keyup', (event) => {
		const rawValue = event.target.value
		if (!rawValue.endsWith('0') && !rawValue.endsWith('1')) {
			event.target.value = deleteLastInput(rawValue)
			alert.classList.remove('hidden')
		} else {
			alert.classList.add('hidden')
		}
		const newValue = createArrayFromString(event.target.value)
		decimalOutput.value = getDecimalNumber(newValue)
	})
}

convertBinaryToDecimal()



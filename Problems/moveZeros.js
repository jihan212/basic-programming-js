let numbers = [1, 9, 8, 4, 0, 0, 2, 7, 0, 6, 0];

let last = numbers.length - 1;

for (let i = 0; i < numbers.length; i++) {
	if (numbers[i] == 0) {
		let temp = numbers[i];
		last = temp;
	}
}
console.log(numbers);

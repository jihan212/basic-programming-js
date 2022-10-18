let numbers = [1, 2, 2, 3, 4, 4, 5, 5];

let duplicate = 0;
let uniqueNumbers = [];

for (let i = 0; i < numbers.length; i++) {
	if (numbers[i] == numbers[i - 1]) {
		duplicate = duplicate + 1;
	} else {
		numbers[i - duplicate] = numbers[i];
		console.log(numbers[i]);
	}
}

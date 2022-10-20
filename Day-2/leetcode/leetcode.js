let numbers = [2, 7, 11, 15];

let target = 9;

for (let i = 0; i < numbers.length; i++) {
	for (let j = i; j < numbers.length; j++) {
		if (numbers[i] + numbers[j] == target) {
			console.log([i, j]);
			break;
		}
	}
}

// Time complexity : O(n²)

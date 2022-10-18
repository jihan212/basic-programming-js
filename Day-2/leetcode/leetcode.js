let numbers = [2, 7, 11, 15];

let target = 22;

for (let i = 0; i < numbers.length; i++) {
	for (let j = 0; j < numbers.length; j++) {
		if (numbers[i] + numbers[j] == target) {
			console.log([i, j]);
		}
	}
}

// Time complexity : O(n²)
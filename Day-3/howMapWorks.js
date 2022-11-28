let numbers = [10, 20, 30, 40, 50, 60, 70, 80];

let newNumbers = numbers.map(function (num) {
	return num + 5;
});

console.log(newNumbers);

// ------------ Custom map function ------------- 

function customMap(numbers, callback) {
	let result = [];
	for (let i = 0; i < numbers.length; i++) {
		result.push(callback(numbers[i], i, numbers));
	}
	return result;
}

let customNewNumbers = customMap(numbers, function (number) {
	return number + 5;
});

console.log('customNewNumbers :', customNewNumbers);

// time Complexity: O(n)
// space Complexity: O(n)
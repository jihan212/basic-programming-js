let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function binarySearch(array, target) {
	let left = 0;
	let right = array.length - 1;

	while (left <= right) {
		let mid = Math.floor((left + right) / 2);
		if (target === array[mid]) {
			return mid;
		} else if (target < array[mid]) {
			right = mid - 1;
		} else {
			left = mid + 1;
		}
	}
	return false;
}

console.log('Index of 4 is', binarySearch(numbers, 4));
console.log('Index of 14 is', binarySearch(numbers, 14));

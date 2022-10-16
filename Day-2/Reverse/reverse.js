let numbers = [101, 102, 55, 12, 1101];

// Solution with another array
/*
Steps
1. Take a empty array
2. Start looping from the last index of numbers array
3. Push every element in reverse array
*/
let reverse = [];

for (let i = numbers.length -1; i >= 0; i--) {
	reverse.push(numbers[i]);
}

console.log(reverse);
// Time Complexity: O(n)
// Space Complexity: O(n)


// Solution without another array
/*
Steps:
1. Take two variables named first and last
2. Initialize first element of numbers array in first variable and last element of numbers in last variable
3. Start a while loop when condition is first < last
4. Take a temp variable and swap the elements
*/


let first = 0;
let last = numbers.length - 1;

while (first < last) {
	let temp = numbers[first];
	numbers[first] = numbers[last];
	numbers[last] = temp;

	first++;
	last--;
}
console.log(numbers);
// Time Complexity: O(n)
// Space Complexity: O(1)
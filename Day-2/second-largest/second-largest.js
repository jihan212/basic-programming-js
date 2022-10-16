let numbers = [101, 102, 55, 12, 1101];

/*
Steps
1. take two variables named largest and second
2. initialize first element of numbers in largest and second element in second
3. start a loop - if value of index is greater than largest then initialize second with largest and largest with value.
4. if value is greater than second and smaller than largest then initialize second into value. 
*/

let largest = numbers[0];
let second = numbers[1];

for (let i = 1; i < numbers.length; i++) {
	if (numbers[i] > largest) {
		second = largest;
		largest = numbers[i];
	}
	if (numbers[i] > second && numbers[i] < largest) {
		second = numbers[i];
	}
}
console.log(second);

// Time Complexity: O(n)
// Space Complexity: O(n)
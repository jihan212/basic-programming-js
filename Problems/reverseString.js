let greet = 'Hello,Hi';

let reverse = '';

for (let i = greet.length - 1; i >= 0; i--) {
	reverse = reverse + greet[i];
}

console.log(reverse);

// Time Complexity: O(n)
let numbers = [101, 102, 55, 12, 1101];

let largest = 0;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > largest) {
        largest = numbers[i];
    }
}
console.log(largest);
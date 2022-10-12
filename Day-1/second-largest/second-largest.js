let numbers = [101, 102, 55, 12, 1101];

let largest = 0; 
let second = 0;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > largest) {
        second = largest; // 0
        largest = numbers[i] // 101
    } if ( numbers[i] > second && numbers[i] < largest ){
        second = numbers[i]
    }
}
console.log(second);
// imperative programming -- what , how, where
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let even = [];
// let odd = [];

// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] % 2 == 0) {
//     even.push(numbers[i]);
//   } else {
//     odd.push(numbers[i]);
//   }
// }
// function even(number) {
//   return number % 2 == 0;
// }
// declarative programming - what i need?

// Filter 
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let even = numbers.filter(function (number) {
  return number % 2 == 0;
});

let odd = numbers.filter(function (number) {
  return number % 2 != 0;
});

console.log(even);
console.log(odd);

// Custom filter 

function customFilter(numbers, callback) {
  let result = [];
  for (let i = 0; i < numbers.length; i++) {
    if (callback(numbers[i])) {
      result.push(numbers[i]);
    }
  }
  return result;
}

// function even(number) {
//   return number % 2 == 0;
// }

let customEven = customFilter(numbers, function (number) {
  return number % 2 == 0;
});

let customOdd = customFilter(numbers, function (number) {
  return number % 2 != 0;
});

let customEvenOf5 = customFilter(numbers, function (number) {
  return number % 5 == 0;
});
console.log(customEven);
console.log(customOdd);
console.log(customEvenOf5);

// First Class Citizen
// Callback Function?
// Higher Order Function?
// Anonymous Function?
// How Filters Works?
// How Map works?
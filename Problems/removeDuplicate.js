let numbers = [1, 2, 2, 3, 4, 4, 5, 5];

console.log([...new Set(numbers)]);

// At first convert the array into set data structure by new Set()
// then use spread operator(...)
// console.log it
/* Explanation: By this one line program it will return new array with no duplicate numbers cause first it converted into set data structure. and set doesn't keep duplicate elements. */
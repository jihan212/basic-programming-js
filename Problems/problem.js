// const num = () => {
// 	let count = 0;
// 	return () => (count += 1);
// };

// const num1 = num();
// const num2 = num();

// console.log(num2(), num1());

// ----------------------------------------------------

// let obj = {
// 	a: 1,
// 	b: () => this.a,
// 	c: function () {
// 		return this.a;
// 	},
// };

// obj.b();
// obj.c();
// console.log(obj.b(), obj.c());

//---------------------------------------------------------

// console.log(0 * Infinity);

// --------------------------------------------------------

const obj = {
    a: 5, 
    b: 6,
    sum: this.a + this.b,
    multiply: function () {
        return this.a * this.b
    },   
}

obj.sum.bind(obj)()
obj.multiply.bind(obj)()

// console.log(obj.sum.bind(obj));
// console.log(obj.multiply.bind(obj)());
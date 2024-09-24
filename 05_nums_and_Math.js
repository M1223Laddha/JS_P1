// NUMBER

// 1st way to declare a number
// const score = 200;
// console.log(score);

// 2nd way to declare a number
// const num = new Number(1223);
// console.log(num)

// Change a number to a String
// const num2 = 1223;
// console.log(num2.toString()); // converts 1223 to String
// console.log(typeof(num2)); // String

// toFixed()
// const num1 = 999.9999;
// console.log(num1.toFixed(2)); // it will return 2 digits/numbers afther decimal
//
// // PRECISION
//
//
// // toLocaleString()
// const num3 = 1000000;
// console.log(num3.toLocaleString('en-IN')) // it will separate whole numbers into comma where comma is need

// +++++++++++++++++++MATHS++++++++++++++++++++++++++++++++
// console.log(Math);

// abs()
// console.log(Math.abs(-4)); // how far the number is from zero it will return that but in positive form

// round()
// console.log(Math.round(4.3)) // if the number after decimal is greater than 5 or equal to 5 then the answer will be the next number
// console.log(Math.round(4.6))
// console.log(Math.round(4.5))

// ceil()
// console.log(Math.ceil(4.2)); // it will return the top value if the number has decimal which is greater than 0
// console.log(Math.ceil(4)); // 4

// floor()
// console.log(Math.floor(4.2));// it will give the integer part only
// console.log(Math.floor(4.9)); // it will give the integer part only
// console.log(Math.floor(5));// it will give the integer part only


// sqrt()
//console.log(Math.sqrt(4)); // it will return the square root of the number
//console.log(Math.sqrt(16.4));

// trunc()
//console.log(Math.trunc(16.4)); // it will return only the integer part of the number

// pow()
// console.log(Math.pow(2,3)); // it will return the value of x to the power of y

// log()
// console.log(Math.log(2));  // return the log of the number

// log2()
// console.log(Math.log2(2)); // return the log of the number with base 2

// min() => more than one parameters are required
// console.log(Math.min(12,23,14,89)); // returns the minimum value among all

// max() => more than one parameter required
// console.log(Math.max(12,23,14,89)); // returns the maximum number among all

// random() **
// console.log(Math.random());  // it will give a random number between 0 and 1
// console.log((Math.random() * 10) + 1 ); // to shift point so multiply by 10 and adding +1 cuz to avoid 0

const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min)) + min);  // **
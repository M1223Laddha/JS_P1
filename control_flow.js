// if

// if(condition) {
//
// }

// if(true) {
//     // code run hoga if block ka
// }
//
// if(false) {
//     // code run nhi hoga
// }

// const isUserLoggedIn = true;
// if(isUserLoggedIn) {
//     console.log("hello");
// }

// = => assignment opertor , == => comparsion operator , === => comparsion operator but also check for data type of both

// if(2 == "2") {   // only value is checked
//     console.log("executed")
// }
//
// if(2 === "2") {   // value + datatye is checked
//     console.log("executed");
// }
// console.log("not_executed");


// const temperature = 40;
// if(temperature < 50) {
//     console.log("temperature less than 50");
// }
// console.log("temperature greater than 50"); // ye toh output mai aayega he


// if else
// If if block does not execute then else will be executed
// const temp = 50;
// if(temp > 50) {
//     console.log("Temperature is greater than 50");
// } else {
//     console.log("Temperature is less than 50");
// }

// const score = 200;
// if(score > 100) {
//     const power = "fly";
//     console.log(`User Has Power to ${power}`);
// }
// console.log(`User Has Power to ${power}`); // error cuz power is defined under if block not in global

// const balance = 1000;
// if(balance < 500) {
//     console.log("less than 500");
// } else if(balance < 750) {
//     console.log("less than 750");
// } else if(balance < 900) {
//     console.log("less than 900");
// } else {
//     console.log("greater or equal to 1000");
// }

// const userLogged = true;
// const debitCard = true;
// if(userLogged && debitCard) {
//     console.log("Allow to shop");
// } else {
//     console.log("Not allowed to shop");
// }

// +++++++++++++++++++++++++++++++ Switch Statement ++++++++++++++++++++++
// switch (key) {
//     case value :
//
//         break;
//
//     default:
//         break
// }


// const month = 3;
// switch(month) {
//     case 1:
//         console.log("January");
//         break;
//
//     case 2:
//         console.log("February");
//         break;
//
//     case 3:
//         console.log("March");
//         break;
//
//     default:
//         console.log("Unknown Month");
//         break;
// }

// falsy values
// false , 0 , -0 , BigInt 0n , "" , null , undefined , NaN

// truthy values
// "0" , 'false' , "false" , " " , [] , object , {} empty object , function() {} empty function
//
// const object = {}
// if(Object.keys(object).length === 0) {
//     console.log("Object is empty")
// }
//
// const arr  = [];
// if(arr.length === 0) {
//     console.log("LENGTH OF ARRAY IS ZERO")
// }

// false == 0 // true
// false == '' // true
// 0 == '' // true

// **********************NULLISH COALESCING OPERATOR (??) : null undefined , this is for API when we get response from API we get two it might be a valid or empty on the basis of what reply we are getting we structure our code
// let val1;
// val1 = 5  ?? 10;
// console.log(val1) // 5
// val1 = null ?? 10;
// console.log(val1) // 10
// val1 = undefined ?? 15;
// console.log(val1) // 15
// val1 = null ?? 20 ?? 12 ?? 23 ?? 123;
// console.log(val1) // jo bhi valid value rahegi,first woh jayege val1 mai
// val1 = null ?? undefined
// console.log(val1)  // undefined


// *********TERNIARY OPERATOR
// condition ? true : false
// const price = 80;
// price <= 80 ? console.log("less than 80") : console.log("grater than 80");


// Dates
// let date = new Date(); // declaration
// console.log(date); // not readable or nothing understand
// console.log(date.toString()); // readable
// console.log(date.toLocaleDateString()); // DD/MM/YYYY format
// console.log(date.toDateString()); // Day Month Date Year
// console.log(typeof(date)) // object

// to create our date
// let myDate = new Date(2024 , 0 , 23);
// console.log(myDate.toLocaleDateString()); // Months in JS starts from 0th idx
//
//  let date01 = new Date("2024-02-23"); // here month will start from 1 only
// // console.log(date01.toLocaleDateString());
//
// let myTimeStamp = Date.now()
// console.log(myTimeStamp) // mili-seconds
// console.log(date01.getTime()) // mili-seconds , now we can compare this both easily
//
// // if we want in seconds
// console.log(Math.floor(Date.now() / 1000)); //seconds , mathfloor cuz to avoid decimal part and to covert miliseconds to seconds  divide by 1000
// BUT WHEN TIME OF COMPARSION USE MILISECONDS ONLY

// let newDate = new Date();
// console.log(newDate);
// console.log(newDate.getMonth() ) // Months starts from 0idx
// console.log(newDate.getMonth() +1) // to get accurate
// console.log(newDate.getDay());
//
// newDate.toLocaleString('default' , {
//  weekday:"long",
//  // timeZone:
// })


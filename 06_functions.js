// A piece of code which is wrapped under package({})

// how to declare a function => use function keyword followed by its name and () and then { scope }

// function sayMyName() {
//     console.log("MAYUR");
//     console.log("MAYUR");
//     console.log("MAYUR");
//     console.log("MAYUR");
//     console.log("MAYUR");
// }
//
// // calling a function
// sayMyName // reference
// sayMyName() // execution


// at the time of function declaration we pass parameters
// and at the time of calling the function we pass arguments
// HERE WE SHOULD NOT MENTION THE TYPE OF DATA LIKE JAVA / C++
function addTwoNumbers(number1 , number2) {
    console.log(number1 + number2);
}

// addTwoNumbers() // NaN cuz we have not given any arguments
// addTwoNumbers(2,3);
// const result = addTwoNumbers(3,4);
// console.log(result); // undefined cuz we have not returned anything

// function addThreeNumbers(number1, number2 , number3) {
//     let result = number1 + number2 + number3;
//     return result
//     console.log("MAYUR") // THIS LINE WILL NEVER EXECUTE BECAUSE OF return KEYWORD WHICH IS WRITTEN ON THE ABOVE LINE
// }
//
// const answer = addThreeNumbers(1,2,3,);
// console.log(answer) // 6


// function addNumbers(number1, number2) {
//     return number1 + number2;
// }
//
// const answer = addNumbers(1,2);
// console.log(answer);


// function loginUserMessage(username) {
//     if(username === undefined) {
//         console.log("PLEASE ENTER A VALID USERNAME");
//         return;
//     }
//     return `${username} just logged in`;
// }
// console.log(loginUserMessage("MAYUR"));
// console.log(loginUserMessage());


// Default parameter
// function loginUserMessage(username="xyz") {
//     if(username === undefined) {
//         console.log("PLEASE ENTER A VALID USERNAME");
//         return;
//     }
//     return `${username} just logged in`;
// }
// console.log(loginUserMessage("MAYUR")); // Here as we have passed argument then this will be used
// console.log(loginUserMessage());  // default value will be used here



// function calculateCartPrice(...num1) {   // rest  operator or spread operator on the basis of use case but at this time we call this as rest
//     return num1         // jitne values aayegenge utne sab ek array ek form mai output aayega
// }
// console.log(calculateCartPrice(200,400,600,800))


// // HOW TO PASS OBJECTS IN FUNCTION
// const user = {
//     username : "MAYUR",
//     price:200,
// }
// function handleobject(anyObject) {
//     console.log(`Username is ${anyObject.username} and its price is ${anyObject.price}`)
// }
//
// // handleobject(user);
// handleobject({  // we can create object here also at the time of function calling
//     username : "KRISHNA",
//     price:200,
// })


// PASSING ARRAY INTO FUNCTION
// const myarr = [100,200,300];
// function secondValue(getArray) {
//     return getArray[1];
// }
// // console.log(secondValue(myarr))
// console.log(secondValue([1,2,3,4])) // directly passing array


// FUNCTION IN FUNCTION
// function one() {       // FUNCTION 1 STARTS HERE
//
//     const name = "MAYUR";
//
//         function two() {    // FUNCTION 2 STARTS HERE
//             const website = "CHROME";
//             console.log(name);  // ye print hoga kyu ki name variable iskeliye ek global variable hai
//         }  // FUNCTION 2 ENDS HERE
//     // console.log(website);  // this will  be not printed cuz website is under two() function and we are printing outside the two() scope so error will be there
//         two();
// }  // FUNCTION 1 ENDS HERE
// one();


// if(true) {
//     const username = "mayur";
//     if(username == "mayur") {
//         const website = "youtube";
//         console.log(username + website);
//     }
//     //console.log(website);  // error  , outside the scope
// }
//
// console.log(username); // error , outside the scope


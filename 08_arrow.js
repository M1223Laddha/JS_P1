// ARROW FUNCTIONS +++++++++++++++++++++++++++++++++++++

// const user ={
//     username : "MAYUR",
//     price:999,
//
//     welcomeMessage : function () {
//         console.log(`${this.username} , welcome to website`)  // this=>current context
//         console.log(this)
//     }
// }
//
// user.welcomeMessage();
// user.username = "SAM";
// user.welcomeMessage();
// console.log(this);   // {}

// function one() {
//     let username = 'mayur'
//     console.log(this);
//     console.log(this.username);  // we can only use this keyword on objects only not on functions
// }
// one()

//
// const chai = () => {  // remove function keyword and add an arrow after parenthesis
//     let username = 'xyz';
//     console.log(username);
//     console.log(this.username); // undefined
// }
// chai()


// () => {
//
// }

const addTwo =(num1 , num2) => {  // explicit return  1st way to write
    return num1 + num2;
}
console.log(addTwo(12,23))


const addTwoo =(num1 , num2) =>  num1 + num2;  // implicit return 2nd way to write
console.log(addTwo(12,23))

const addThree =(num1 , num2) =>  (num1 + num2);  // 3rd way to write implicit return
// IF WE USE CURLY BRACES THEN RETURN KEYWORD IS MANDATORY AND IF WE USE PARENTHESIS THEN NO NEED TO WRITE RETURN KEYWORD


// TO ADD OBJECTS IN ARROW FUNCTION
const xyz = (num1 , num2) => ({username:"mayur"})
console.log(xyz(12,23))
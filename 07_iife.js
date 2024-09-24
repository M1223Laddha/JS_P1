// Immediately Invoked Function Expression (IIFE)

// function chai() {
    // named IIFE
//     console.log('mayur');
// }
// chai();   // normal function
//
// // to convert it into IIFE then wrap full function in one more parenthesis
//
//
// // SEMICOLON IS MUST AT THE END
// (function code() {
//     console.log("chai")
// }) ();              // (function defination)=> function code() {..}  (function execution)=> code()
//
//
// // ARROW FUNCTION
// ( () => {
//     console.log("xyzz")
// }) ();


// IIFE with arrow function with parameter
((name) => {
    // unnamed IIFE
    console.log(`hello ${name}`);
}) ("mayur");


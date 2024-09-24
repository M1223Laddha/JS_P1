// LOOPS/ITERATIONS

// for
// for(let i=0;i<10;i++) {
//     console.log(i);
// }


// LOOP ON ARRAY
// const myArr = [1,2,3,4,5,6];
// for(let i=0;i<myArr.length;i++) {
//     // const element = myArr[i];
//     // console.log(element);
//     console.log(myArr[i]);
// }


// BREAK AND CONTINUE
// for(let i=0;i<10;i++) {
//     if(i == 5) {
//         break; // when i=5 then loop will stop
//     }
//     console.log(i);
// }
//
// for(let i=0;i<20;i++) {
//     if(i == 10) {
//         continue;  // 10 will not print
//     }
//     console.log(i);
// }


// WHILE LOOP

// let i=0  // initialize
// while(i < 10) {  // condition
//     console.log(i)
//     i++  // increment
// }


// While loop on array
// const myArr = [1,2,3,4,5];
// let j=0;
// while(j < myArr.length){
//     console.log(myArr[j]);
//     j++;
// }


// Do While
// let score = 1;
// do {
//     console.log(score)
//     score++;
// } while(score <=10);


// Loops which are used for Array
// [{} , {} , {}]  many objects in one array
// for of loop

// const arr = [1,2,3,4,5,6];
// for (const i of arr) {
//     console.log(i);
// }

// const greetings = "hello world";
// for(const i of greetings) {
//     if(i == " ") {
//         continue;  // avoiding space
//     }
//     console.log(`Each character is ${i}`);
// }

// for in
// const arr = [1,1,2,3,4,5];
// for(const i in arr) {
//     console.log(arr[i]);
// }


// for each loop
const arr = [1,2,3,4,5,6];
// arr.forEach( function (i) {  // ye ek call back function hai jisme function ka naam nhi rehate aur apan parenthesis mai i,item or anything de sakte like a variable what should we call that
//     console.log(i);
// })

// arrow function as a call ack function
// arr.forEach( (i) => {
//     console.log(i)
// })

// arr.forEach( (item , index , arr) => {
//     console.log(item , index, arr);
// })

const myCoding = [  // multiple objects in array
    {
        languageName : "javascript",
        languageFileName:"js",
    },

    {
        languageName : "java",
        languageFileName:"java",
    },

    {
        languageName : "python",
        languageFileName:"py",
    },
]

myCoding.forEach( (item) => {
    console.log(item.languageName);
})
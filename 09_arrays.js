// array => object
// array => Non-Primitive / Reference
// To store Multiple elements
// When copy of array is there then it makes a shallow copy means if we change original then the other one also be changed on the basis of references(heap memory)
// In JavaScript Arrays are resizeable and can contain different data types not like java,c++
 const myArr = [0,1,2,3,4,5];  // Declaration
// const arr2 = new Array(1,2,3,4); // Declaration
// console.log(myArr);
// console.log(arr2);
// console.log(myArr[2]); // accessing array elements by indexing

// Array Methods

// push() => to add elements in the array at last
// myArr.push(6);
// myArr.push(7);
// console.log(myArr)

// pop() => removes last element from the array
// myArr.pop();
// console.log(myArr)

// unshift() => to add element starting of the array ,means we are shifting all the values by + 1 index , if the size of array is small then its not problem but the size is too big then it will be more time-consuming so its not prefereable for big size of array
//  myArr.unshift(12);
// console.log(myArr);
//
// // shift()
// myArr.shift();
// console.log(myArr); // To remove the first element of the array

// // includes() => returns boolean value on the basis of the value is present or not in the array
// console.log(myArr.includes(9));
//
// // indexof() => returns the idx number where the number is present or if not present it return -1
// console.log(myArr.indexOf(9));  // -1
// console.log(myArr.indexOf(2)); // 2


// join() => converts our array to string
// const newAray = myArr.join();
// console.log(myArr)
// console.log(newAray);  // type has been changed from Array to String

// slice() => it does not manipulate the array , it gives subarray of the array where the en idx is not included
// console.log("A" , myArr);
// const myA1 = myArr.slice(1,3);
// console.log(myA1);

// // splice() => it manipulates the array , the numbers between the range are removed from the array and the remaining numbers which does not fit into that range remain in the array
// console.log(myArr);
// const myn3 = myArr.splice(1,3);
// console.log(myArr) // the numbers 1,2,3 are deleted from the original array and here the end idx is also included
// console.log(myn3);

// concat() => it return new array which has all elements of both the array
// const newArr = [1,2,3,4,4];
// const newArr2 = [5,6,7,8];
// const all = newArr.concat(newArr2);
// console.log(all);

// spread() => merges or concat arrays this is more preferred rather than concat
// const allnew = [...myArr,...newArr];
// console.log(allnew);


// IF THERE IS ANY SITUATION WHERE THERE ARE ARRAY IN ARRAY AND WE WANT ALL THE ELEMENTS IN ONE SINGLE ARRAY THEN
// flat() => 1 parameter expected i.e depth means how many arrays i have to solve or use simply Infinity
// const arr = [1,2,3,[4,5,6,7],8,[9,10,11,12]]
// const arr2 = arr.flat(Infinity);
// console.log(arr2)

// console.log(Array.isArray("MAYUR"));  // checking is that array
//
// // convert to array
// console.log(Array.from("MAYUR")); from() consists of one only
//
// console.log(Array.from({name:"MAYUR"})) // empty array


// converting multiple variables into array
let score = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score, score2, score3,100,"MAYUR")); // of() is used for set of elements







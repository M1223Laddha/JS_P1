// objects => Key Value Pairs
//  A COLLECTION OF RELATED PROPERTIES AND/OR METHODS
// singleton
// Object.create

// object literals\


// you need to declare the Symbol outside the object definition if you want to use it as a key within the object.
// const symbol = Symbol("key1");
// const symbol2 = Symbol("key2");
//
// const user = {
//     name : "MAYUR",
//     fullName : "MAYUR_VINOD_LADDHA",
//     age : 19,
//     // mySymbol : 'key1',  // this is not a symbol when we use typeof it will return string
//     location : "Pune",
//     [symbol] : "myKey1",
//     [symbol2] : "myKey2",
//     email : "mayur@google.com",
//     isLoggedIn : false,
//     lastLoggedIn : ["MONDAY" , "SATURDAY"]
// }
//
// console.log(user.email);  // Accessing object elements
// console.log(user["name"]); // 2nd way to access objects this one is more preferred
// console.log(user[symbol]); // now do typeof of this then it is symbol , dont use quotes here
// console.log(typeof symbol2)  // symbol
//
//
// // change the values
// user.email = "xyz@gmail.com";
// console.log(user.email);  // xyz@gmail.com
//
// // if we want no  one to change our objects then we can use freeze
// // Object.freeze(user);
//
// user.name = "KRISHNA";
// console.log(user.name); // this will give MAYUR only,cuz object is freezed now
//
// console.log(user); // to print full object
//
// user.greeting = function() {
//     console.log("Hello User");
// }
// console.log(user.greeting())
//
//
// user.greeting2 = function() {
//     console.log(`Hello User ${this.name}`); // here we can use user.name or this.name
//     console.log(`HELLO ${user.name}`)
// }
// console.log(user.greeting2())


// OBJECTS IN OBJECTS
// const user = {
//     email: "john@example.com",
//     fullName: {  //     first object which is inside user(main)  object
//         username: {    // second object which is inside fullname object
//             firstName: "John",
//             lastName: "Doe"
//         }
//     }
// }
// console.log(user.fullName.username.firstName);
//
// // combine objects
// const obj1 = {
//     1:"m",
//     2:"n",
//     3:"f",
//  }
// //
// const obj2 = {
//     4:"g",
//     5:"j",
//  }
//
// const obj3 = Object.assign({},obj1, obj2); {} is not compulsory but we should write
// console.log(obj3);

// combining objects by spread operator
// const obj3 = {...obj1 , ...obj2};
// console.log(obj3)


// HOW VALUES WILL COME FROM DATABASE THAT IS ARRAY OF OBJECTS
// const users = [
//     {
//         id:1,
//         email:"h@gmai.com",  // arr[0]
//     },
//
//     {
//         id:2,
//         email:"g@gmai.com",  //arr[1]
//     },
//
//     {
//         id:3,
//         email:"z@gmai.com",  // arr[2]
//     },
// ]
//
// console.log(users[1].email);  // g@gmai.com
//
// const tinder = {
//     id:"123abc",
//     name:"XYZ",
//     isLoggedIn : true,
// }

// if we want only keys of this object then
// console.log(Object.keys(tinder)) // we will get all the keys inside a array then we simply iterate on it and maany more

// console.log(Object.values(tinder)) // this will give me all the values in array only

// console.log(Object.length);

// console.log(Object.entries(tinder)); // this will return a array[key,value] on the basis of how many are there
//
// // IF WE WANT TO CHECK IF A PROPERTY EXIST OR NOT IN OBJECT
// console.log(tinder.hasOwnProperty("name"));  // it returns boolean answer


// const obj3 = {
//     courseName : "JS",
//     coursePrice : 999,
//     courseInstructor : "Mayur"
// }
//
// // console.log(obj3.courseName);
//
// // OBJECT DESTRUCTING
// const {courseName} = obj3;
// console.log(courseName)
//
// const {courseName:Name} = obj3;  // NOW courseName has changed to Name
// console.log(Name)


// Loops on objects
const myObject = {
    js : 'javascript',
    cpp : 'c++',
    rb : 'ruby',
}

for(const i in myObject) {
    // console.log(i)  // will give only keys
    // console.log(myObject[i]) // will get values
    console.log(`${i} is shortcut for ${myObject[i]}`);
}
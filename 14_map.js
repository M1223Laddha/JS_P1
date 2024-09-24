const myArr = [1,2,3,4,5,6,7,8,9,10];
// add 10 to every element/num of the array
const newNums = myArr.map( (num) => {
    return num + 10;
})
// console.log(newNums);


// Chaning => to implement more than one method i.e map().map().filter()
const newNums2 = myArr
        .map( (num) => num * 10)
        .map( (num) => num + 1)
        .filter( (num) => num >=40)

console.log(newNums);


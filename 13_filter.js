// filter method on array

const myArr = [1,2,3,4,5,6,7,8,9,10];

// const newNums =myArr.filter( (num) => num > 4 );
// console.log(newNums);
//
// const newNums2 = myArr.filter( (num) => {
//     return num > 4;
// })
//
// console.log(newNums2);


const newNums = [];
myArr.forEach( (num) => {
    if(num > 4) {
        newNums.push(num);
    }
})
// console.log(newNums);

const books = [
    {
        name: "The Invisible Man",
        genre: "Science Fiction",
        type: "Fiction",
        publishYear: 1897,
        edition: "First"
    },
    {
        name: "Sapiens: A Brief History of Humankind",
        genre: "History",
        type: "Non-Fiction",
        publishYear: 2011,
        edition: "First"
    },
    {
        name: "To Kill a Mockingbird",
        genre: "Classic",
        type: "Fiction",
        publishYear: 1960,
        edition: "First"
    },
    {
        name: "Brief Answers to the Big Questions",
        genre: "Science",
        type: "Non-Fiction",
        publishYear: 2018,
        edition: "First"
    },
    {
        name: "1984",
        genre: "Dystopian",
        type: "Fiction",
        publishYear: 1949,
        edition: "First"
    },
    {
        name: "The Art of War",
        genre: "Military Strategy",
        type: "Non-Fiction",
        publishYear: -500,
        edition: "Classic"
    },
    {
        name: "The Great Gatsby",
        genre: "Tragedy",
        type: "Fiction",
        publishYear: 1925,
        edition: "First"
    },
    {
        name: "A Brief History of Time",
        genre: "Science",
        type: "Non-Fiction",
        publishYear: 1988,
        edition: "First"
    }
];

// console.log(books);

// now apply filter
// const userBooks = books.filter( (bk) => {
//     return bk.genre === 'History';
// })
// console.log(userBooks);

// const userName = books.filter( (bk) => {
//     return bk.publishYear > 2000;
// })
// console.log(userName)

// multiple conditions at once 
const userName = books.filter( (bk) => {
    return bk.publishYear > 2000 && bk.genre === "Science";
})
console.log(userName)

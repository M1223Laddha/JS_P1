// REDUCE METHOD

const myNums = [1,2,3,4];

// const myTotal = myNums.reduce(function (acc , currval) {
//     console.log(`acc:${acc} and currval:${currval}`);
//    return acc + currval;
// },0)
// console.log(myTotal);

const myTotal = myNums.reduce( (acc , curr) => acc + curr,0 );
console.log(myTotal);


const shoppingCart = [
    {
        itemName : "js course",
        price : 2999,
    },

    {
        itemName : "Python course",
        price : 999,
    },

    {
        itemName : "Mobile Development course",
        price : 299,
    },

    {
        itemName : "java course",
        price : 29,
    }
]

const addTotal = shoppingCart.reduce( (acc,item) => {
    return  acc + item.price;
},0);
console.log(addTotal);
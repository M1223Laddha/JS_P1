const accountId = 1223;
let accountEmail = "mayur@gmail.com";
var accountPassword = "12345"
accountCity = "PUNE"; // NOT A GOOD PRACTICE BUT WE CAN DECLARE LIKE THIS

// accountId = 12;    Not allowed

console.log(accountId);

accountEmail = "mc@gmail.com"; // allowed to change
console.log(accountEmail);
accountPassword="1223";  // allowed to change
console.log(accountPassword);
accountCity="jaipur";  // allowed to change
console.log(accountCity);

// PREFER NOT TO USE VAR CUZ OF BLOCK SPACE AND FUNCTIONAL SCOPE

let accountState;   // undefined
console.log(accountState);
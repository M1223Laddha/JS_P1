// // Strings are sequence of characters
// // Strings are encoded in double quotes or single quotes but prefer double only
//
// const name = "MAYUR";
// const lastName = " LADDHA";
// console.log(name + lastName); // CONCATENATION USING PLUS OPERATOR
//
// console.log(`Hello my name is ${name.toLowerCase()} ${lastName.toUpperCase()}`); // string interpolation(modern way to write)
//
// // another way to declare String using object
// const newName = new String("krishna");
// console.log(newName);
//
// console.log(newName[0]);  // accessing characters by index numbers
//
// // LENGTH PROPERTY => It return a number of characters present in a String
// console.log(newName.length); //  output => 7
//
// // toUpperCase Function
// console.log(newName.toUpperCase()); // CONVERTS ALL THE CHARACTERS PRESENT IN THE STRING TO UPPERCASE
//
// // toLowerCase FUNCTION
// console.log(newName.toLowerCase()); // CONVERTS ALL THE CHARACTERS PRESENT IN THE STRING TO LOWERCASE
//
// // charAt() Function
// console.log(newName.charAt(5)); // it will return a character which is present on specific index
//
// // indexof()
// console.log(newName.indexOf('n')); // it will return a number where the character is present


// substring()
// const str1 = "Mayur";
// console.log(str1.substring(0,3)); // it will return a substring of our original string or we can say a small part of string here we have to provide start and end index where the end index is exclusive(not included)

// trim()
// const str2 ="           Mayur       ";
// console.log(str2.trim()); // trim function will remove the unwanted spaces from our string


// replace() => it will take 2 parameters(what to replace , with whom to replace)
//const str3= "JavaScript"
//console.log(str3.replace("S" , "C")); // it will replace only the first occurence only of S not the other ones if they exist

//const str4= "SSSSSSSSAAMM";
//console.log(str4.replace("S" , "C")); // here S characters are occuring more than 1 so , only first occurence will be changed to C(which is at index 0)

// includes()
// const str5 = "JavaScript"
// console.log(str5.includes("J")); // it will return boolean value whether it includes or not but it only check for the first character only(index 0th)
//
// const str6 = "Java";
// console.log(str6.includes("J")); // true cuz J includes in the str6
//
// const str7 = "Python";
// console.log(str7.includes("N")); // false cuz N is not the starting character of str7


// split()
// const str = "HTML,CSS,JAVASRIPT";
// console.log(str.split(''))


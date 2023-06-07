"use strict";

/* TODO

  Write a function, addTen, that takes in an input. If the input is a number,
  return the input plus ten and false otherwise.

  Examples:

  addTen(0); // returns 10
  addTen(10); // returns 20
  addTen('bob'); // returns false

1.) write a function, named add ten
2.) have it take and number input
3.) have it output the number given + 10
4.) have it write false if the given isn't a number



 */
//function addTen (input){
//    if (!isNaN(input)) {
//        return parseInt(input) + 10;
//    }else{
//        return false;
//    }

//}
//console.log(addTen(10));

/*
function addTen(input) {
if (typeof input === 'number'{
return input + 10;
}else{
return false;
}
}

THIS IS WHAT WE ORIGINALLY AND IT WAS CORRECT

 */


/* TODO

Write a function, makeUpperCase, that takes in an input and returns the input in uppercase if it is a string.
If the input is not a string, return false.

Examples:

makeUpperCase('cat') // returns 'CAT'
makeUpperCase('DoG') // returns 'DOG'
makeUpperCase('CODEUP') // returns 'CODEUP'
makeUpperCase(54) // returns false
makeUpperCase(true) // returns false
makeUpperCase(null) // returns false

*/
function makeUpperCase(input){
    if (typeof input === 'string'){
        return input.toUpperCase();
    }else{
        return false
    }
}

//YOU WROTE THIS BY YOURSELF (THE ONE BELOW) ALL YOU WERE MISSING WAS A SET OF {}!!!!!YAY!!!!!!!!
//function makeUpperCase(input) {
//    if (typeof input === 'string')
//        return input.toUpperCase();
// }else{
//    return false;
//}

console.log(makeUpperCase('cat'),'CAT'); // returns 'CAT'
console.log(makeUpperCase('DoG'), 'DOG'); // returns 'DOG'
console.log(makeUpperCase('CODEUP'), 'CODEUP');// returns 'CODEUP'
console.log(makeUpperCase(54), false); // returns false
console.log(makeUpperCase(true), false); // returns false
console.log(makeUpperCase(null), false); // returns false


/*
- when theres test cases in the given question just copy and past under your code.
-  the console.log in this question should be written console.log(makeUpperCase('x')'x');
 */
//console.log(makeUpperCase(hello));
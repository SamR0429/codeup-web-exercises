//2.correct i think
// function isString (input){
//     if (typeof input === "string"){
//         return true;
//     }else
//         return false;
// }
//
// //console.log(isString("hello"));
// console.log(isString("Hello"));           // true
// console.log(isString("Codeup"));          // true
// console.log(isString("123"));             // true
// console.log(isString(4));                 // false
// console.log(isString(true));             // false
// console.log(isString([1, 2, 3]));         // false
// console.log(isString());                  // false
// console.log(isString(null));              // false

//3.
// function isNotString(input){
//     if(typeof input === "string"){
//         return false;
//     }else
//         return true;
// }
//
// console.log(isNotString(4));                  // true
// console.log(isNotString(true));               // true
// console.log(isNotString([1, 2, 3]));          // true
// console.log(isNotString());                         // true
// console.log(isNotString(null));                 // true
// console.log(isNotString("Hello"));              // false
// console.log(isNotString("Codeup"));             // false
// console.log(isNotString("123"));                // false

//4.
// function isEmptyString(input){
//     if(input === ""){
//         return true;
//     }else
//         return false;
// }
//
// console.log(isEmptyString(""));              // true
// console.log(isEmptyString(" "));               // false
// console.log(isEmptyString("Hello"));           // false
// console.log(isEmptyString("Codeup"));          // false
// console.log(isEmptyString("123"));             // false
// console.log(isEmptyString(true));              // false
// console.log(isEmptyString([1, 2, 3]));         // false
// console.log(isEmptyString(null));              // false
// console.log(isEmptyString());                  // false

//5.
// function isNotANumber(input){
//     if(typeof input === "number" ){
//         return false
//     }else
//         return true;
// }
//
// console.log(isNotANumber(""));              // true
// console.log(isNotANumber(true));          // true
// console.log(isNotANumber("Bob"));          // true
// console.log(isNotANumber([1,2,3]));         // true
// console.log(isNotANumber("42"));          // true
// console.log(isNotANumber(23));              // false
// console.log(isNotANumber(3.141));          // false



//6.this one might be wrong, ask steve
function isNegative(input){
    if(input <= -1){
        return true;
    }else
        return false;
}
//
// console.log(isNegative(-1));                // true
// console.log(isNegative(-5));              // true
// console.log(isNegative("-3"));           // true
// console.log(isNegative(0));              // false
// console.log(isNegative(6));             // false
// console.log(isNegative("10"));           // false
// console.log(isNegative(true));           // false
// console.log(isNegative(false));           // false
// console.log(isNegative("Bob"));           // false
// console.log(isNegative([-1, 2, 3]));      // false
// console.log(isNegative(null));           // false
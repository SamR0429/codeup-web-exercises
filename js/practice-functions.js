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



//6.
// function isNegative(input){
//     if(input <= -1){
//         return true;
//     }else
//         return false;
// }
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

//7.ASK STEVE
function isPositive (input){
    if(typeof input === "boolean")
        return false;

    if(input >= 1){
        return true;
    }else
        return false;
}

console.log(isPositive(1));             // true
console.log(isPositive("6"));           // true
console.log(isPositive(3.141));          // true
console.log(isPositive(-1));           // false
console.log(isPositive(-5));           // false
console.log(isPositive("-4"));          // false
console.log(isPositive(0));             // false
console.log(isPositive("Bob"));          // false
console.log(isPositive(true));          // false

//8.
// function isZero(input){
//     if(input == 0){
//         return true;
//     }else
//         return false;
// }
//
// console.log(isZero(0));                 // true
// console.log(isZero("0"));               // true
// console.log(isZero("Hello"));           // false
// console.log(isZero("Codeup"));          // false
// console.log(isZero("123"));             // false
// console.log(isZero(true));              // false
// console.log(isZero([1, 2, 3]));         // false
// console.log(isZero(null));              // false
// console.log(isZero());                   // false



//9.
// function isArray(input){
//     if (Array.isArray(input)) {
//         return true;
//     }else
//         return false;
// }
//
// console.log(isArray([]));                 // true
// console.log(isArray([1, 2, 3]));          // true
// console.log(isArray(['a', 'b']));         // true
// console.log(isArray(false));              // false
// console.log(isArray(12));                 // false
// console.log(isArray("Bob"));              // false
// console.log(isArray({'some': 'object'})); // false
// console.log(isArray(true));               // false
// console.log(isArray());                   // false

//10.
// function upperCase (input){
//     if(typeof input === 'string'){
//         return input.toUpperCase();
//     }else
//         return false;
//     //input.upperCase()
// }
//
// console.log(upperCase("Codeup"));         // "CODEUP"
// console.log(upperCase("javascript"));     // "JAVASCRIPT"
// console.log(upperCase("45"));             // "45"
// console.log(upperCase(23));               // false
// console.log(upperCase(null));             // false
// console.log(upperCase([1, 2, 3]));        // false
// console.log(upperCase(true));             // false
// console.log(upperCase());                 // false
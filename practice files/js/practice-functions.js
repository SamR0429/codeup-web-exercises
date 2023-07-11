function isANumber(input) {
    if (typeof input === "boolean" || input === null) {
        return false;
    }
    if (isNaN(input)) {
        return false;
    } else {
        return true;
    }
}


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
// function isPositive (input){
//     if(typeof input === "boolean")
//         return false;
//
//     if(input >= 1){
//         return true;
//     }else
//         return false;
// }
//
// console.log(isPositive(1));             // true
// console.log(isPositive("6"));           // true
// console.log(isPositive(3.141));          // true
// console.log(isPositive(-1));           // false
// console.log(isPositive(-5));           // false
// console.log(isPositive("-4"));          // false
// console.log(isPositive(0));             // false
// console.log(isPositive("Bob"));          // false
// console.log(isPositive(true));          // false

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

//11.
// function isTrue(input){
//     if(input === true){
//         return true;
//     }else
//         return false;
//
// }
// // this one was not asking for a specific typeof value, thats why you were stuck cause you kept doing typeof when the question was asking if the input was equal to true, so it will only accept true and nothing else not the boolean typeof value, so if the input isnt true then everythign else is false
// console.log(isTrue(true));         // true
// console.log(isTrue(false));            // false
// console.log(isTrue(0));                // false
// console.log(isTrue(null));             // false
// console.log(isTrue("true"));           // false
// console.log(isTrue("Banana"));         // false
// console.log(isTrue([1, 2]));           // false

//12.
// function isFalse (input){
//     if(input === false){
//         return true;
//     }else
//         return false;
// }
// // same thing as above you were overthinking it, it was asking for the input to be equaul to the value of false not the boolean typeof value of false.
// console.log(isFalse(false));             // true
// console.log(isFalse(true));              // false
// console.log(isFalse(0));                 // false
// console.log(isFalse(null));              // false
// console.log(isFalse(""));                // false
// console.log(isFalse("Banana"));          // false
// console.log(isFalse([1, 2]));            // false

//13.
// function not(input){
//    return !input;
// }
// //so you were over-thinking this one it doesn't have to be a if else statement, this is saying basically to return the opposite. just that simple.
//
// console.log(not(false));                  // true
// console.log(not(0));                      // true
// console.log(not(""));                     // true
// console.log(not(null));                   // true
// console.log(not(NaN));                          // true
// console.log(not(undefined));              // true
// console.log(not(true));                   // false
// console.log(not("something"));            // false
// console.log(not(Infinity));                     // false
// console.log(not(123));                    // false

//14.
// function addOne(input){
//     return parseFloat(input) +1;
// }
//you did parseFloat because the inputs for true and false were supposed to return NaN but it was returning false, if you check in the console the value of false is 0 and the value of true is 1, with that you didnt want the value cause you were looking to add +1.
// console.log(addOne(0));                    // 1
// console.log(addOne(2));                    // 3
// console.log(addOne(-5));                   // -4
// console.log(addOne(5.789));                // 6.789
// console.log(addOne(Infinity));              // Infinity
// console.log(addOne("2"));                  // 3
// console.log(addOne("0"));                  // 1
// console.log(addOne("banana"));             // NaN
// console.log(addOne(true));                 // NaN
// console.log(addOne(NaN));                   // NaN

//15.
// function isIdentical(input1, input2){
//     if(input1 === input2){
//         return true;
//     }else
//         return false;
// }
//
// console.log(isIdentical(3, 3));                     // true
// console.log(isIdentical(false, false));             // true
// console.log(isIdentical("hello", "hello"));         // true
// console.log(isIdentical(3, 3.0));                   // true
// console.log(isIdentical(undefined, undefined));     // true
// console.log(isIdentical(2, "2"));                   // false
// console.log(isIdentical("javascript", "java"));     // false

//16
// function isEqual(input1, input2){
//     if(input1 == input2){
//         return true;
//     }else
//         return false;
// }
// console.log(isEqual(3, "3"));                       // true
// console.log(isEqual("abc123", "abc123"));           // true
// console.log(isEqual(true, 1));                      // true
// console.log(isEqual(0, false));                     // true
// console.log(isEqual(4, -5));                        // false
// console.log(isEqual("java", "javascript"));         // false

//17
// function or(input1, input2){
//     return (input1 || input2);
// }
// console.log(or(true, true));                    // true
// console.log(or(true, false));                   // true
// console.log(or(false, true));                   // true
// console.log(or(false, false));                  // false
// console.log(or("hello", "world"));              // "hello" (this behavior is non-obvious, research more!)

//18
// function and(input1, input2){
//     return (input1 && input2);
// }
// console.log(and(true, true));                    // true
// console.log(and(true, false));                   // false
// console.log(and(false, true));                   // false
// console.log(and(false, false));                  // false
// console.log(and("hello", "world"));              // "world" (this behavior is non-obvious, research more)

//19
// function concat(input1, input2){
//     if(typeof input1 === "string" && typeof input2 === "string"){
//         return (input1 + input2);
//     }else if (typeof input1 === "number" && typeof input2 === "number"){
//         return (''+ input1 + input2);
//     }else if (typeof  input1 === "string" && typeof input2 === "number") {
//         return (input1 + input2);
//     }else if (typeof input1 === 'boolean' && typeof input2 === 'boolean'){
//         return ('' + input1 + input2);
//     }else
//         return false;
// }
// //adding the '' in the parts where you have to concat/add 2 numbers but dont want to add add them just sit them next to each other this will help it not do that and do what you need.
// console.log(concat("code", "up"));            // "codeup"
// console.log(concat("connect", 4));            // "connect4"
// console.log(concat("hello", "world"));        // "helloworld"
// console.log(concat(4, 2));                    // "42"
// console.log(concat(true, true));              // "truetrue"

//20.
// function cubes(input) {
//     return input ** 3
// }
// //this is multiplying your input by itself 3 times
// console.log(cubes(3));
// console.log(cubes(5));
// console.log(cubes(10));

//21.





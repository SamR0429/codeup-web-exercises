// function isTrue (input){
//     if(input === true) {
//         return true;
//     }else
//         return false;
// }
//
// console.log(isTrue(true));              // true
// console.log(isTrue(false));            // false
// console.log(isTrue(0));                // false
// console.log(isTrue(null));             // false
// console.log(isTrue("true"));           // false
// console.log(isTrue("Banana"));         // false
// console.log(isTrue([1, 2]));           // false

// function isFalse(value){
//     return value === false;
// }
// //the code about is the same if you were to do it the way you  normally do it
//
// console.log(isFalse(false));             // true
// console.log(isFalse(true));              // false
// console.log(isFalse(0));                 // false
// console.log(isFalse(null));              // false
// console.log(isFalse(""));                // false
// console.log(isFalse("Banana"));          // false
// console.log(isFalse([1, 2]));            // false

//ask steve
// function not(input){
//     return (typeof input != "boolean");
// }
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

function addOne(input){
    if(input === "string" || "number"){
        return true
    }else
        return false
}

console.log(addOne(0));                    // 1
console.log(addOne(2));                    // 3
console.log(addOne(-5));                   // -4
console.log(addOne(5.789));                // 6.789
console.log(addOne(Infinity));                  // Infinity
console.log(addOne("2"));                  // 3
console.log(addOne("0"));                  // 1
console.log(addOne("banana"));             // NaN
console.log(addOne(true));                 // NaN
console.log(addOne(NaN));                       // NaN
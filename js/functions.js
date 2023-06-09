"use strict";

/**
 * TODO:
 * Create a function called 'sayHello' that takes a parameter 'name'.
 * When called, the function should return a message that says hello to the passed in name.
 *
 * Example
 * > sayHello("codeup") // returns "Hello, codeup!"
 */
function sayHello(name){
    // console.log("Hello, " + name);
    return "Hello, " + name;
}
sayHello()
/**
 * TODO:
 * Call the function 'sayHello' and pass your name as a string literal argument.
 * Store the result of the function call in a variable named 'helloMessage'.
 *
 * console.log 'helloMessage' to check your work
 */
let helloMessage = sayHello('sam');

/**
 * TODO:
 * Store your name as a string in a variable named 'myName', and pass that
 * variable to the 'sayHello' function. You should see the same output in the
 * console.
 */
//const myName = 'sam';
    //console.log(sayHello(myName));

const myName = "Sam"
const funcResp = sayHello(myName);
console.log(funcResp)

// Don't modify the following line, it generates a random number between 1 and 3
// and stores it in a variable named random
var random = Math.floor((Math.random() * 3) + 1);

/**
 * TODO:
 * Create a function called 'isTwo' that takes a number as a parameter.
 * The function should return a boolean value based on whether or not the passed
 * number is the number 2.
 *
 * Example
 * > isTwo(1) // returns false
 * > isTwo(2) // returns true
 * > isTwo(3) // returns false
 *
 * Call the function 'isTwo' passing the variable 'random' as a argument.
 *
 * console.log *outside of the function* to check your work (you should see a
 * different result everytime you refresh the page if you are using the random
 * number)
 */
//function isTwo(number){
//return number ===2;
//}
//isTwo(random)
function isTwo(num){
    let isNumberTwo = (num===2);
    return isNumberTwo;
}
console.log( isTwo(2) )
/**
 * TODO:
 * Create a function named 'calculateTip' to calculate a tip on a bill at a
 * restaurant. The function should accept a tip percentage and the total of the
 * bill, and return the amount to tip
 *
 * Examples:
 * > calculateTip(0.20, 20) // returns 4
 * > calculateTip(0.25, 25.50) // returns 6.375
 * > calculateTip(0.15, 33.42) // returns 5.013
 */
//const calculateTip(){
//
//}
//
//const calculateTip = () => {
//};
function calculateTip(tipPercentage,billTotal){
    return billTotal * tipPercentage;
}
console.log(calculateTip(0.20, 20));
console.log(calculateTip(0.25, 25.50));
console.log(calculateTip(0.15, 33.42));

/**
 * TODO:
 * Use prompt and alert in combination with your calculateTip function to
 * prompt the user for the bill total and a percentage they would like to tip,
 * then display the dollar amount they should tip
 */
const userTipPercentage =parseFloat(prompt('How much would you like to tip as a whole percentage number?'))/100
const userBillTotal = parseFloat(prompt('How much does your total bill cost?'));
alert(`you should tip $${calculateTip(userTipPercentage, userBillTotal)}`);
//let userBillTotal = parseFloat(prompt ('How much was the bill total?'));
//console.log('The user entered' + userBillTotal)
//let userBillPercentage = parseFloat(prompt('What percent would you like to tip?'));
//console.log('The user entered'+ userBillPercentage)
//alert('You should tip ' + calculateTip(userBillPercentage, userBillTotal))

/**
 * TODO:
 * Create a function named `applyDiscount`. This function should accept a price
 * (before a discount is applied), and a discount percentage (a number between 0
 * and 1). It should return the result of applying the discount to the original
 * price.
 *
 * Example:
 * > var originalPrice = 100;
 * > var discountPercent = .2; // 20%
 * > applyDiscount(originalPrice, discountPercent) // 80
 *
 * > applyDiscount(45.99, 0.12) // 40.4712
 */
const applyDiscount =(originalPrice, discountedPercentage)=>{
    return originalPrice * (1 - discountedPercentage);
};
console.log(applyDiscount(45.99, 0.12))

//function applyDiscount(price, discountPercent){
    //let discountAmount = price * discountPercent;
    //let discountedPrice = price - discountedAmount;
    //return discountedAmount;
//}
//let originalPrice = 100;
//let discountedPercent = .2;
//let discountedPrice = applyDiscount(originalPrice, discountedPercent);
//console.log(discountedPrice);

//discountedPrice = applyDiscount(49.99, 0.12);
//console.log(discountedPrice);
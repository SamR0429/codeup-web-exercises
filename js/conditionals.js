"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message which relates to the
 * color stated in the argument of the function. For colors you do not have
 * responses written for, return a string stating so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *
 *
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

 function analyzeColor(color) {
     if (color === "blue") {
         return "blue is the color of the sky";
     } else if (color === "red") {
         return "Strawberries are red";
     } else if (color === "green") {
         return "Grass is green";
     } else if (color === "yellow") {
         return "The sun is yellow";
     } else {
         return "I don't know anything about " + color;
     }
}

 console.log(analyzeColor("blue"));
 console.log(analyzeColor("red"));
 console.log(analyzeColor("green"));
 console.log(analyzeColor("yellow"));
 console.log(analyzeColor("black"));

//*dont over think or try and compare to other problems on other topics
//try to follow your initial thought process of the given problem
//(color === "colorgoeshere") '===' means equal in value and type, so meaning it has be put inputted exaclty and then it
//will spit out what you wrote out for the color to the user*

//function analyzeColor(color){
//    if(userInput){
//        console.log("red");
//        alert("strawberry's are red")
//    }
//else{
//    ("I don't know anything about that color")
//    }
//}



// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)

//let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
//let randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
 * You should see a different message every time you refresh the page
 */
//function analyzeColor(colors) {
//    if (colors === "blue") {
//        return "blue is the color of the sky";
//    } else if (colors === "red") {
//        return "Strawberries are red";
//    } else if (colors === "green") {
//        return "Grass is green";
//    } else if (colors === "yellow") {
//        return "The sun is yellow";
//    }else if (colors === "orange"){
//        return "on orange is orange";
//    } else {
//        return "I don't know anything about " + colors;
//    }
//}
//let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
//let randomColor = colors[Math.floor(Math.random() * colors.length)];

//console.log(analyzeColor(randomColor));



/**
 * TODO:
 * Comment out the code above, and refactor your function to use a switch-case statement
 */
//const analyzeColor = (colorName) => {
    //switch(colorName) {
    //case 'blue':
    //return "something about blue";
    //case 'red':
    //return "something about red";
    //default:
    //return "i dont know anything about that color ${

let userColor = prompt ('what is your favorite color?')
function analyzeColor(color) {


    switch (color) {
        case 'red':
            alert("Really?? That's my favorite color too!");
            break;
        case 'orange':
            alert("Orange? That's one of my least favorite colors, but to each their own.");
            break;
        case 'blue':
            alert("I like that color.");
            break;
        default:
            alert(color + ' ...I mean all colors are cool.');
            break;
    }
}
analyzeColor(userColor);
/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */
// const userColor = prompt("enter color");
//const userColorMessage = analyzeColor(userColor);
//alert(analyzeColor(userColor));

//this is the correct way





function analyzeColor(color) {


    switch (color) {
        case 'red':
            alert("Really?? That's my favorite color too!");
            break;
        case 'orange':
            alert("Orange? That's one of my least favorite colors, but to each their own.");
            break;
        case 'blue':
            alert("I like that color.");
            break;
        default:
            alert(color + ' ...I mean all colors are cool.');
            break;
    }
}
analyzeColor(userColor);
/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * everything for free!.
 *
 * Write a function named `calculateTotal` which accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

//swtitch(luckyNumber){
//case 0:
//return totalAmount;
//case 1:
//return totalAmount; * 0.90;
//case 2:
//return totalAmount; * 0.75;
//default:
//console.log("something went wrong in calculateTotal");
//return totalAmount;
//}
//}
//console.log(calculateTotal(0,10));

function calculateTotal(luckyNumber,total){
    if (luckyNumber === 0){
       return total * 1.0;
   }else if (luckyNumber  === 1){
        return total * 0.90;
    }else if (luckyNumber === 2){
        return total * 0.75;
    }else if (luckyNumber === 3){
        return total * 0.65;
    }else if (luckyNumber === 4){
        return total * 0.50;
    }else if (luckyNumber === 5){
        return 0;
    }
}

// console.log(calculateTotal(0,100))
// console.log(calculateTotal(1, 100))
// console.log(calculateTotal(2, 100))
// console.log(calculateTotal(3, 100))
// console.log(calculateTotal(4, 100))
// console.log(calculateTotal(5, 100))
/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 5.
 * (In this line of code, 0 is inclusive, and 6 is exclusive)
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
//Generate a random number between 0 and 6
//let luckyNumber = Math.floor(Math.random() * 6);

//const userTotalBill = parseFloat(prompt("What was the total bill?"));
//const userLuckyNumber = parseFloat(prompt("What was you're lucky number?"));
//alert(`Your price before the discount was $${userTotalBill}`);
//alert(`Your price after the discount is  $${calculateTotal(userLuckyNumber,userTotalBill)}`);
/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * Do *NOT* display any of the above information
 * if the user enters a value that is not of the number data type.
 * Instead, use an alert to inform them of the incorrect input data type.
 *
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */
//const userWantsToEnterNumber = confrim("would you like to enter a number?");

//if(userWantsToEnterNumber) {
//    const userNumber = parseInt(prompt("enter a number"));
//    if (userNumber === 'number') {

//        if (userNumber % 2 > 0) {
//            alert("your number is odd");
//        } else {
//            alert("your number is even");
//        }
//            alert(`your number plus 100 is ${userNumber + 100}`);

//        if (userNumber < 0) {
//            alert("your number is negative");
//        } else if (userNumber > 0) {
//            alert("your number is positive");
//        }else{
//            alert("your number is 0")
//        }
//    }
//}
function evenOrOdd(num) {
    if(num % 2 > 0) return "Your number is odd";
    else return "Your number is even";
}

function add100(num) {
    return `Your number plus 100 is ${num + 100}`;
}

function positiveOrNegative(num) {
    if(num < 0) {
        return "Your number is negative";
    } else if (num > 0) {
        return "Your number is positive";
    } else {
        return "Your number is 0, therefore it is neither positive NOR negative";
    }
}

const userWantsToEnterNumber = confirm("Would you like to enter a number?");

if(userWantsToEnterNumber) {
    let userNumber = prompt("Enter a number");

    if(!isNaN(userNumber)) {
        userNumber = parseInt(userNumber);
        alert(evenOrOdd(userNumber));

        alert(add100(userNumber));

        alert(positiveOrNegative(userNumber));
    } else {
        alert(`You did not enter a number, you entered a ${typeof userNumber}`);
    }
}

// basic example


// let x = 1;
 //while(x <= 10){
   //  console.log(x);
     //++x;
 //}

// console.log(1);
// console.log(2);
// console.log(3);

// possible use cases

 //while(gameRunning) {
  //   drawCanvas();
 //}

// while(timerOn) { // elsewhere: a button when clicked, sets timer to off
//     countUp();
// }


// let password = "Open Sesame";
// let guess = "";
// while(guess !== password) {
//     guess = prompt("Please enter the password.");
// }

// condition never executes

// let x = 10;
// while (x < 5) {
//     console.log(x);
//     x--;
// }


// infinitely executes

// let x = 5;
// while (x !== 4) {
//     x++;
// }

// given variable x, while x is less than 100, increment x by 5. x begins at 0. Console log the value of x for each iteration;

// let x = 0;
// while (x < 100) {
//     console.log(x);
//     x += 5;
// }

// TODO - write a while loop that prints your name 10 times
/* examples

 */

//let x = 1
//let name = "sam";
//while (x <= 10)
//{
    //console.log(name);
    //++x;
//}
/*
    TODO CHALLENGE - write a function, getNum1To10 that returns a number between 1 and 10 from the user.
      Keep prompting them until a valid number is given
 */


// ================================ DO-WHILE LOOP

/*
    While loop syntax:

        do {
            do something no matter what...
        } while(conditionIsTrue);

    Used to execute a block and code at least once
    and repeat it until the condition is no longer true

    Diagram ***Curriculum***

*/

// basic example

//let x = 10;
//do {
  //  alert("This will run.");
//} while (x !== 10);


// use case

// let password = "";
// do {
//     password = prompt("Please enter a valid password.");
// }
// while(password !== 'letmein');
//alert ('logged in');


// The do-while executes at least once


/*
    TODO - write a do-while loop that will alert the current date and time and
      continue checking with the user if they want to see the latest time.
 */
//Current date can be created with new
// Date().toLocaleString()

//alert('the current time and date is,' + Date().toLocaleString());
//do {
    //prompt ("do you want to see the current time?");
    //alert('the current time and date is,' + Date().toLocaleString());
    // Date().toLocalString()
//}while(Date().toLocaleString())
//prompt ("do you want to see the current time?");

/*
THIS IS CORRECT,RUN IT TO SEE THE DIFFERENCE
let will continue = true;
do{
willContinue = confirm ("it is currently:" + Date().toLocaleString() +" Would you like to see te current time?);
}while(willContinue);
 */





// ================================ FOR LOOP

/*
    For loop diagram ***Curriculum***

    For loop syntax:

        for (initialization; test; iteration) {
            do something a set number of times
        }

    Used to perform an action based on a number of iterations

*/

// with incrementer

// for (let i = 1; i < 10; ++i) {
//     console.log(i);
// }


// with decrementer

// for (let i = 20; i >= 10; --i) {
//     console.log(i);
// }

// nested for loops

// for (let i = 0; i <= 10; ++i) {
//     console.log("Badgers, badgers, badgers");
//     for (let j = 0; j <= 1; ++j) {
//         console.log("Mushroom");
//     }
// }

// multiple iterators (less common)

// for (let i = 0, j = 9; i < 10; ++i, --j) {
//     console.log("value of i:" + i + " and value of j: " + j);
// }




// console.log each letter in a given string

// get length of string

// let someString = prompt("Enter a word");
//
// for (let i = 0; i <= someString.length; i += 1) {
//     console.log(someString.charAt(i));
// }

/*
    TODO - write a for loop that prints all even numbers from 2 to 100

    TODO - write a for loop that prints all integers from 20 down to 1
 */
//for (let i = 2; i <= 100; i += 2) {
//    console.log(i);
//}

for (let i = 20; i >= 1; --i){
    console.log(i);
}


// ================================ BREAK / CONTINUE

// break - keyword to end the execution of a loop

// let y = 0;

// while (true) {
//     if (y === 10) {
//         console.log("End of loop!");
//         break;
//     }
//     ++y;
//     console.log(y);
// }

// web example


// let password = "123";
//
// while (true) {
//     password = prompt("Please enter a valid password: ");
//     if (password === "123") {
//         break;
//     }
// }

// console.log("Access granted.");

// game example

// let gameRunning = true;
//
// let lives = 3;
//
// while (gameRunning) {
//     // play game
//     if (lives === 0) {
//         console.log("Game over");
//         break;
//     }
// }



// output values up to 50 from 0, if value is 25, stop the loop

// let x = 0;
//
// while (x < 50) {
//     if (x === 25) {
//         break;
//     }
//     console.log(x);
//     x += 1;
// }



// continue

// console.log("Continue example");
//
// let y = 0;
//
// while (true) {
//     y++;
//     if (y === 100) {
//         console.log("End of loop!");
//         break;
//     }
//     if (y % 5 === 0) {
//         continue;
//     }
//     console.log(y);
// }

// web example
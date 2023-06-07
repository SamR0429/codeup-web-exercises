
//prompt('enter a odd number between 1 and 50');

// let y = 1
// while (true) {
//     y++
//     prompt('enter a odd number between 1 and 50');
//     if (y % 2 === 0){
//         console.log("sorry that's not odd")
//         break;
//     }
//     if(y % 1 === 0){
//         continue;
//     }
//     console.log("you entered");
// }

//didnt save the prompt
// wont allow if to go through the loop cause of the even/odd equations

function numberOneThroughFifty(){

}

// function promptUnitOdd(){
//     do {
//         const userNumber = numberOneThroughFifty();
//         if (userNumber >= 1 && userNumber <= 50 && userNumber % 2 !== = 0) {
//             console.log(`number to skip is: ${userNumber}`);
//             for (let i = 1; i <= 50; i++) {
//                 if (i === userNumber) {
//                 }
//                 console.log(`yikes! skipping ${i}`);
//
//             }
//             if (i % 2) {
//                 console.log(`heres and odd number: ${i}`);
//             }
//         }
//         break;
//     }
//     console.log("invalid input");

//     }while(true)
// }



//this was another example
// let userNumber
// do {
//     userNumber = prompt("Please enter an odd number between 1-50?");
//     if(userNumber <= 0 || userNumber >= 51 || userNumber % 2 === 0) {
//         alert("Number entered is outside the acceptable range or an even number. Please try again.");
//     }
//     else
//         break;
// } while (userNumber <= 0 || userNumber >= 51 || userNumber % 2 === 0);
// for (let i = 1; i <= 50; i += 2) {
//     if(i == userNumber) {
//         console.log(`Yikes! Skipping over: ${userNumber}`);
//         continue;
//     }
//     console.log(`There is an odd number: ${i}.`);
// }
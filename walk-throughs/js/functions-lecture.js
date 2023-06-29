// const global = "I'm Global";
//
// function sayGoodbye(){
//     console.log("byyyee")
//
// }
//  //invoking aka calling a function
// sayGoodbye();
//
// function sayHelloUser(userUsername){
//     console.log("byyyee" + userUsername)
// }
// //invoking with an argument
// sayHelloUser("sam")
//
//
//
//
// //funtion with return
// function sayBye(){
//     return "bye" + username
//
// }
// const funstionResp = sayBye("sam");
// console.log(funstionResp);
//
// //global scope
//
// const username = "sam"
// function sayBye(username){
//     console.log("you will always see me" + username);
// }
// sayBye();
// console.log(username)
//
// //local scope

const username = "sam";

function sayBye() {
    // const username = "sam"
    console.log("Goodbye, " + username);
}

function sayHi() {
    // const username = "steve";
    console.log("Hello, " + username);
}

sayBye();
sayHi();

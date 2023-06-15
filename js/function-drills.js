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



function isOdd(number){
    if (!isANumber(number)) {
        return false;
    }
        if (number % 2 === 0){
        return false;
    }else
        return true;
}

// console.log(isOdd(1));
// console.log(isOdd(2));
// console.log(isOdd("a"));
// console.log(isOdd(""));
// console.log(isOdd("'"));

//irrelevant to worksheet
// function hi (input){
//     if(isANumber()){
//         return false;
//     }
//
//     if (typeof input === 'string'){
//         return ("hi" + input);
//     }else
//         return false;
// }
//
// console.log(hi(" dude"));
// console.log(hi(" loser"));
// console.log(hi(" stranger"));
// console.log(hi(4));

function isEven(number){
    if (number % 2 === 0){
        return true;
    }else
        return false;
}

console.log(isEven(1));
console.log(isEven(2));
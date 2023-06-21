//june.20
// function returnUserObject(username, password, email) {
//     return {
//         username: 'jreich',
//         password: 'password123',
//         email: 'jreich@email.com'
//     }
// }
//
// console.log(returnUserObject('jreich', 'password123', 'jreich@email.com'));

// let email = [
//     {
//         username: 'jreich',
//         password: 'password123',
//         email: 'jreich@email.com'
//     }
// ]
//
// console.log(email)

//june.21
// Create a function, returnProduct, that takes in an array of numbers and returns the product of all the numbers.
//     Assume all element in the input array are valid numbers. Assume all array inputs have at least 1 number.
function returnProduct(numbers){
   let total = 1;
    for(let number of numbers){
        total *= number;
    }
    return total;
}
console.log(returnProduct([1, 2, 3])); // returns 1 * 2 * 3 = 6
console.log(returnProduct([3, 3, 3])); // returns 3 * 3 * 3 = 27
console.log(returnProduct([4, 1, 2])); // returns 4 * 1 * 2 = 8
console.log(returnProduct([4, 0, 2])); // returns 4 * 0 * 2 = 0
console.log(returnProduct([5, 3, 2])); // returns 5 * 3 * 2 = 30
//you're saying up top that you have numbers which is the name we gave tha array, and were assuming that all array input are at least 1, that's the second line. then were saying that were trying to get to the individual numbers of that array so number is a singular value or numbers, that the second line. then were adding to the total every number that it runs into, then were returning the total at the end.

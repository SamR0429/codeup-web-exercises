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
// function returnProduct(numbers){
//    let total = 1;
//     for(let number of numbers){
//         total *= number;
//     }
//     return total;
// }
// console.log(returnProduct([1, 2, 3])); // returns 1 * 2 * 3 = 6
// console.log(returnProduct([3, 3, 3])); // returns 3 * 3 * 3 = 27
// console.log(returnProduct([4, 1, 2])); // returns 4 * 1 * 2 = 8
// console.log(returnProduct([4, 0, 2])); // returns 4 * 0 * 2 = 0
// console.log(returnProduct([5, 3, 2])); // returns 5 * 3 * 2 = 30
//you're saying up top that you have numbers which is the name we gave tha array, and were assuming that all array input are at least 1, that's the second line. then were saying that were trying to get to the individual numbers of that array so number is a singular value or numbers, that the second line. then were adding to the total every number that it runs into, then were returning the total at the end.

//june.26
// Create a function, returnTotalSales, that takes in an array of sales data objects and returns the sum of all
// totalItemsSold properties. Assume all elements in the input array are valid sales data objects with a totalItemsSold
// property.
//
//     EXAMPLE...

// const salesData = [
//     {
//         month: 'January',
//         totalItemsSold: 0
//     },
//     {
//         month: 'February',
//         totalItemsSold: 5
//     },
//     {
//         month: 'March',
//         totalItemsSold: 2
//     },
//     {
//         month: 'April',
//         totalItemsSold: 10
//     },
//     {
//         month: 'May',
//         totalItemsSold: 30
//     }
// ];

// function returnTotalSales(sales) {
//     let returnTotalSales = 0
//
//     for (let sales of salesData) {
//         returnTotalSales += sales.totalItemsSold;
//     }
// }
// console.log(returnTotalSales(salesData));
// YOU COULDNT DO IT CAUSE IT WAS INSIDE AN ARRAY !!!! PAY CLOSE ATTENTION

// const total = salesData[0].totalItemsSold + salesData[1].totalItemsSold /* etc etc  till finish */
//
//
// console.log(salesData[0].totalItemsSold);

//june 27
// Create a function, returnAvgSales, that takes in an array of sales data objects and returns the average of all
// total items sold. Assume all elements in the input array are valid sales data objects with a totalItemsSold
// property. If the array is empty, return 0. If the array has one element, return the value of the totalItemsSold.
//
//     EXAMPLE...

// const salesData = [
//     {
//         month: 'January',
//         totalItemsSold: 0
//     },
//     {
//         month: 'February',
//         totalItemsSold: 5
//     },
//     {
//         month: 'March',
//         totalItemsSold: 2
//     },
//     {
//         month: 'April',
//         totalItemsSold: 10
//     },
//     {
//         month: 'May',
//         totalItemsSold: 30
//     }
// ];
//
// function returnAvgSales(salesData) {
//     let total = 0;
//
//     salesData.forEach(salesDataObj => {
//         total += salesDataObj.totalItemsSold;
//
//     });
    // return total/ salesData.length
// returnAvgSales(salesData) // returns 9.4

//june 28
// Create a function, returnAdmins, that takes in an array of user objects
// and returns an array of only the admin user objects. Assume the array
// has at least one user object and all elements have an isAdmin property.
    // Example:
// const users = [
//
//     {
//         username: 'fred123',
//         password: 'letmein',
//         email: 'fred123@email.com',
//         isAdmin: true
//     },
//     {
//         username: 'cindy123',
//         password: 'hello123',
//         email: 'cindy123@email.com',
//         isAdmin: false
//     },
//     {
//         username: 'kathy123',
//         password: 'letmein',
//         email: 'kathy123@email.com',
//         isAdmin: true
//     },
//     {
//         username: 'kyle123',
//         password: 'letmein',
//         email: 'kyle123@email.com',
//         isAdmin: false
//     }
// ]
// function returnAdmins(users){
//     const admins = [];
//
//     for(let user of users){
//         if(user.isAdmin === true){
//             admins.push(user)
//         }
//     }
//     return admins;
// }
// console.log(returnAdmins(users));
/*

returnAdmins(users) returns...

[

    {
        username: 'fred123',
        password: 'letmein',
        email: 'fred123@email.com',
        isAdmin: true
    },
    {
        username: 'kathy123',
        password: 'letmein',
        email: 'kathy123@email.com',
        isAdmin: true
    }
]

*/


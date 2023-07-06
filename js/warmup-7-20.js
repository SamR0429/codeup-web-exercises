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

//june 29
// Write a function that takes a neighborhood object and determines if it is desirable. A neighborhood is desirable.
// If the median home price is less than 300000, crime rates are low, and the total rating of schools is at least 24.
// The function should return true if the neighborhood object is desirable and false otherwise.

// example data...

//     const neighborhood1 = {
//     neighborhood: "Lovely Estates",
//     medianHomePrice: 280000,
//     pool: true,
//     tennis: false,
//     crimeRate: "low",
//     schools: 22
// };
//
// const neighborhood2 = {
//     neighborhood: "Luminous Estates",
//     medianHomePrice: 270000,
//     pool: true,
//     tennis: false,
//     crimeRate: "high",
//     schools: 24
// }
//
// const neighborhood3 = {
//     neighborhood: "Oak Mountain",
//     medianHomePrice: 290000,
//     pool: false,
//     tennis: false,
//     crimeRate: "low",
//     schools: 24
// }
//
// const neighborhood4 = {
//     neighborhood: "Ginormous Acres",
//     medianHomePrice: 350000,
//     pool: true,
//     tennis: true,
//     crimeRate: "low",
//     schools: 27
// }
// function bestNeighborhood(neighborhood) {
//         if (neighborhood1.medianHomePrice <= 300000) {
//             return true;
//         } else if (neighborhood1.crimeRate === "low") {
//             return true;
//         } else if (neighborhood1.schools >= 24) {
//             return true;
//         } else
//             return false;
//     }
    // you were on the right path, you know you needed those checkpoint for the neighborhoods, you also couldve just made one if statement and not have to do else if statements
/////////////////////////////////////////////////////////////////////
    // console.log(neighborhood.medianHomePrice);
    // console.log(neighborhood.crimeRate);
    // console.log(neighborhood.schools);
//     const isRightPrice = neighborhood.medianHomePrice < 300000;
//     const isRightCrimeRate = neighborhood.crimeRate === 'low';
//     const isRightSchoolRating = neighborhood.schools >=24;
//
//     const isDesirable = isRightPrice && isRightCrimeRate && isRightSchoolRating;
//     return isDesirable;
// }
// // bestNeighborhood(neighborhood1);
// console.log(bestNeighborhood(neighborhood1));
// console.log(bestNeighborhood(neighborhood2));
// console.log(bestNeighborhood(neighborhood3));
// console.log(bestNeighborhood(neighborhood4));

//june 30
// Write a function, returnLargestStudentCount, that takes in an array of classes returns the number of students in the largest class.
// Assume at least one class object will be present in the input array with students property set to a valid positive integer.
//
//     let classes = [
//     {class: "6th grade history", students: 18},
//     {class: "7th grade history", students: 20},
//     {class: "8th grade history", students: 22},
//     {class: "4th grade history", students: 30},
//     {class: "10th grade history", students: 25}
// ];
//     function returnLargestStudentCount(classes) {
//         let highestStudentCount = 0;
//         for (let class of classes) {
//             if (highestStudentCount < classes[i].students) {
//                 highestStudentCount = classes[i].students
//             }
//         }
//     }
//
// console.log(returnLargestStudentCount);
// returnLargestStudentCount(classes) // returns 30

//july 5
// 1. Create a function that prints 1 to 100.
// let i
// for(i=1;i<=100;i=i+1 )
// {
//     console.log(i)
// }

// 2. Create a function, fizzBuzz, that prints out all numbers from 1 to 100 but instead of printing
// numbers that are evenly divisible by 3, print 'fizz' and any numbers evenly divisible
// by 5, print 'buzz'. For any numbers that are evenly divisible by 3 AND 5, print 'fizzbuzz'.

    for (let i = 1; i <= 100; i++) {
        if (i % 15 === 0) console.log("FizzBuzz");
        else if (i % 3 === 0) console.log("Fizz");
        else if (i % 5 === 0) console.log("Buzz");
        else console.log(i);
    }
//when doing this kind of question with this amount of specificity with the easily divisible by 3 and 5 it has to go first or else it wont work, the more specific it'll have to go first
//you didnt make it a function and the instructions asked for that, maybe you can find away to refactor it later on
    /*
    fizzBuzz() // prints...

    1
    2
    'fizz'
    4
    'buzz'
    'fizz'
    7
    8
    'fizz'
    'buzz'
    11
    'fizz'
    13
    14
    'fizzbuzz'
    etc...

    */

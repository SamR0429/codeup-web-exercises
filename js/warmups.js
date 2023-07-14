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

// for (let i = 1; i <= 100; i++) {
//     if (i % 15 === 0) console.log("FizzBuzz");
//     else if (i % 3 === 0) console.log("Fizz");
//     else if (i % 5 === 0) console.log("Buzz");
//     else console.log(i);
// }
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

//july 11
// You are given an array of runner objects, where each object represents a
// runner with properties name, age, and lapTimes (in seconds). Write a
// function called getTopRunners that takes the runners array as input and
// returns an array of top runners. A runner is considered top if their
// average lap time is 50 seconds or faster. If there are no top runners in
// the input array, the function should return an empty array

// HINT: You might want to create a function called calculateLapTimeAverage
// that takes in an array of numbers and returns the average

//Input:
// const runners = [
//     { name: "Alice", age: 25, lapTimes: [50.5, 45.2, 48.8, 47.1] },
//     { name: "Bob", age: 28, lapTimes: [55.2, 50.7, 53.3, 52.9] },
//     { name: "Charlie", age: 24, lapTimes: [48.9, 46.3, 50.1, 49.5] },
//     { name: "David", age: 27, lapTimes: [51.4, 50.2, 49.8, 52.3] },
//     { name: "Eve", age: 26, lapTimes: [47.7, 45.9, 46.6, 48.3] },
// ];

// Expected Output:
// [
//     { name: 'Alice', age: 25, lapTimes: [50.5, 45.2, 48.8, 47.1] },
//     { name: 'Charlie', age: 24, lapTimes: [48.9, 46.3, 50.1, 49.5] },
//     { name: 'Eve', age: 26, lapTimes: [47.7, 45.9, 46.6, 48.3] }
// ]

// BONUS: Each runner in the resulting array should be represented as an
// object containing only the name and age properties.

// Expected Bonus Output:
//     [
//     { name: "Alice", age: 18 },
//         { name: "Charlie", age: 19 },
//         { name: "Eve", age: 17 }
//     ]

// function calculateAverageLapTime(lapTimesArray) {
//     let total = 0;
//     let count = 0;
//
//     lapTimesArray.forEach(function (item, index) {
//         total += item;
//         count++;
//     });
//
//     return total / count;
// }
//
// console.log(calculateAverageLapTime(runners[0].lapTimes))
//
// function getTopRunners(runners){
//     const topRunners = [];
//     for(let runner of runners){
//         if(calculateAverageLapTime(runner.lapTimes) >= 50) {
//             topRunners.push(runner);
//         }
//     }
//     return topRunners;
// }
// console.log(getTopRunners(runners));

// function calculateAverageLapTime(lapTimesArray) {
//     let total = 0;
//     let count = 0;
//
//     lapTimesArray.forEach(function (item, index) {
//         total += item;
//         count++;
//     });
//
//     return total / count;
// }
//
// console.log(calculateAverageLapTime(runners[0].lapTimes))

/* you did this by yourself */
// function returnFastestRunner(runners) {
//     const topRunner = [];
//     for (let runner of runner) {
//         if (calculateAverageLapTime < runners[i].lapTimes) {
//             calculateAverageLapTime = runners[i].lapTimes
//
//             topRunner.push(runner);
//         }
//         return topRunner
//     }
// }
//
// console.log(returnFastestRunner(runners));

// function getTopRunner(runnersArray){
//     //before checking it against others the first person is technically the fastest
//     let topRunner = runnersArray[0];
//     for (let i= 1; i < runnersArray.length; i++){
//         if(calculateAverageLapTime(runnersArray[i].lapTimes) < calculateAverageLapTime(topRunner.lapTimes)){
//             topRunner = runnersArray[i];
//         }
//     }
//     return topRunner;
// }
//
// console.log(getTopRunner(runners));

//JULY 12

// Given the following ARRAY of objects, write a function that LOOPS through
// the array and console logs the following for each Hogwarts House:
// Name:
// Animal:
// Founder:
// Common Room:
// First and Last Name of at least one house head:

// HINT:
// When you copy the object into IntelliJ, make sure to expand and collapse
// the different properties to get a good idea of what is going on and keep
// from being overwhelmed

// BONUS:
// - Log a random house head each time
// - Throw some traits in there
// - Write a conditional statement to log something special for your favorite house

// const hogwartsHouses = [
//     {
//         "id": "0367baf3-1cb6-4baf-bede-48e17e1cd005",
//         "name": "Gryffindor",
//         "houseColours": "Scarlet and gold",
//         "founder": "Godric Gryffindor",
//         "animal": "Lion",
//         "element": "Fire",
//         "ghost": "Nearly-Headless Nick",
//         "commonRoom": "Gryffindor Tower",
//         "heads": [
//             {
//                 "id": "530da97d-5a83-4ea6-bc15-790edf5b5efc",
//                 "firstName": "Minerva",
//                 "lastName": "McGonagall"
//             },
//             {
//                 "id": "9915c5f8-9177-4f63-bba8-d04387a404f9",
//                 "firstName": "Godric",
//                 "lastName": "Gryffindor"
//             }
//         ],
//         "traits": [
//             {
//                 "id": "1773bce8-7a22-4d57-b8e1-7e1cbe26fa2b",
//                 "name": "Courage"
//             },
//             {
//                 "id": "21f22e43-efd9-4a43-87f5-eab5fb1666ea",
//                 "name": "Chivalary"
//             },
//             {
//                 "id": "60d8f5d0-de4b-41f7-b152-40543555bf3a",
//                 "name": "Nerve"
//             },
//             {
//                 "id": "68f73efc-fae9-4a54-b3e2-04bbe72f5d63",
//                 "name": "Daring"
//             },
//             {
//                 "id": "7e6d321d-fe7d-4c05-8ad7-ddabda83d8cd",
//                 "name": "Determination"
//             },
//             {
//                 "id": "adf83e9f-859b-41c4-947d-b359a05f8f3c",
//                 "name": "Bravery"
//             }
//         ]
//     },
//     {
//         "id": "805fd37a-65ae-4fe5-b336-d767b8b7c73a",
//         "name": "Ravenclaw",
//         "houseColours": "Blue and bronze",
//         "founder": "Rowena Ravenclaw",
//         "animal": "Eagle",
//         "element": "Air",
//         "ghost": "Grey Lady",
//         "commonRoom": "Ravenclaw Tower",
//         "heads": [
//             {
//                 "id": "102ac5fc-db71-4055-8250-bc238cffb3d9",
//                 "firstName": "Filius",
//                 "lastName": "Flitwick"
//             },
//             {
//                 "id": "57c04cf4-f3dd-46d6-a78f-84c30fb42533",
//                 "firstName": "Rowena",
//                 "lastName": "Ravenclaw"
//             }
//         ],
//         "traits": [
//             {
//                 "id": "08a54d21-6137-4eda-9c32-004706650b44",
//                 "name": "Learning"
//             },
//             {
//                 "id": "5056effc-b92b-4f86-96fd-978b26a849da",
//                 "name": "Acceptance"
//             },
//             {
//                 "id": "78db6224-33d1-490d-a553-9bbbedb3282a",
//                 "name": "Inteligence"
//             },
//             {
//                 "id": "ab88a4fb-1c4d-4e14-88bf-7f55dfabb75a",
//                 "name": "Wisdom"
//             },
//             {
//                 "id": "e43d0b2f-dcfe-4a5f-b3ab-d39679bbfbe3",
//                 "name": "Wit"
//             },
//             {
//                 "id": "ffc55017-c03f-490a-9c48-2f38af6e2f0a",
//                 "name": "Creativity"
//             }
//         ]
//     },
//     {
//         "id": "85af6295-fd01-4170-a10b-963dd51dce14",
//         "name": "Hufflepuff",
//         "houseColours": "Yellow and black",
//         "founder": "Helga Hufflepuff",
//         "animal": "Badger",
//         "element": "Earth",
//         "ghost": "Fat Friar",
//         "commonRoom": "Hufflepuff Basement",
//         "heads": [
//             {
//                 "id": "a593e800-95dc-47ab-9243-6ac98d2f6ab4",
//                 "firstName": "Helga",
//                 "lastName": "Hufflepuff"
//             },
//             {
//                 "id": "fab07935-774e-4eb4-8ed5-621bfe416d85",
//                 "firstName": "Pomona",
//                 "lastName": "Sprout"
//             }
//         ],
//         "traits": [
//             {
//                 "id": "22d8bc5b-67ee-49fb-89ee-8811fc22062b",
//                 "name": "Hardworking"
//             },
//             {
//                 "id": "76973c67-0dd1-4aca-b0b7-b053d9eaf206",
//                 "name": "Patience"
//             },
//             {
//                 "id": "a8494f18-caff-491e-96e3-1ff73bd6f4ab",
//                 "name": "Loyalty"
//             },
//             {
//                 "id": "af80b93e-3c61-4586-824a-8f7e6ac4ae0a",
//                 "name": "Just"
//             },
//             {
//                 "id": "c080647f-5b31-434f-8327-376abbfb0989",
//                 "name": "Fairness"
//             },
//             {
//                 "id": "f62f4753-fdb5-473b-a8ac-07c1b5844eec",
//                 "name": "Modesty"
//             }
//         ]
//     },
//     {
//         "id": "a9704c47-f92e-40a4-8771-ed1899c9b9c1",
//         "name": "Slytherin",
//         "houseColours": "Green and silver",
//         "founder": "Salazar Slytherin",
//         "animal": "Serpent",
//         "element": "Water",
//         "ghost": "Bloody Baron",
//         "commonRoom": "Slytherin Dungeon",
//         "heads": [
//             {
//                 "id": "36ba2ceb-6b6f-48a3-b512-9c1e66321eff",
//                 "firstName": "Horace",
//                 "lastName": "Slughorn"
//             },
//             {
//                 "id": "5cac8ad3-b5fc-4c48-a951-990cdd5671bc",
//                 "firstName": "Salazar",
//                 "lastName": "Slytherin"
//             },
//             {
//                 "id": "ef90f8c9-9f03-478e-baec-8a3c487e5271",
//                 "firstName": "Severus",
//                 "lastName": "Snape"
//             }
//         ],
//         "traits": [
//             {
//                 "id": "0992c505-80dd-4b49-ad0b-3b7383d6ec89",
//                 "name": "Resourcefulness"
//             },
//             {
//                 "id": "36dad9bf-010e-47ef-8908-ecb6d5acfac5",
//                 "name": "Selfpreservation"
//             },
//             {
//                 "id": "42b7c304-5e62-4fae-9e52-f8c6a106e406",
//                 "name": "Ambition"
//             },
//             {
//                 "id": "540aaafe-6185-4dc8-94ed-bd0236b433d3",
//                 "name": "Cunning"
//             },
//             {
//                 "id": "d7b7c1b7-3fce-4474-9fd1-9b731e0b2649",
//                 "name": "Pride"
//             },
//             {
//                 "id": "df43d46b-1ebf-409d-a63e-6c6bcb049aef",
//                 "name": "Determination"
//             }
//         ]
//     }
// ]


// const getHouseInfo = (houses) => {
//     houses.forEach((house) => {
//         console.log(`
//         Hogwarts house: ${house.name}
//         Animal: ${house.animal}
//         Founded: ${house.founder}
//         commonRoom: ${house.commonRoom}
//         House Head: ${house.heads[0].firstName} ${house.heads[0].lastName}
//         `)
//     })
// }
// console.log(getHouseInfo);

/*
need function base
empty array to store getInfo needed
create a loop
have it start from the first index
collecting needed info
then go to the next index
have it pushed onto the new array
 */

// july 14
// Write a function called removeEvens that takes an array of numbers
// And removes any even number from the array

// Examples:

// Input: [1, 3, 2, 13, 74, 33]
// Expected Output: [1, 3, 13, 33]

// Input: [62, 3, 2, 8, 531, 7]
// Expected Output: [3, 531, 7]

/*
need a function
need something with % 2 === 0
maybe a new array ?
maybe a loop cause you need to go through every number in the array
 */

// function removeEvens (){
//     let myArray=[1, 3, 2, 13, 74, 33]
//     let newArray = [];
//     for(let i = 0; i < myArray.length; i++){
//     if(myArray[i] % 2 !== 0) newArray.push(myArray[i]);
// }
// console.log(newArray);
// }
// removeEvens();
//                                this was just another way of doing it
// let myArray = [3, 5, 6, 8, 10, 22, 25, 43, 46, 86];
// let oddNumbers = myArray.filter(function(number) {
//     return number % 2 !== 0
// });
// console.log(oddNumbers);
//                                        this was the walk through
// function removeTheEvens (inputArray){
//     const oddNumbers =[];
//     for(const number of inputArray){
// if(!isANumber(number)){
//     return false;
// } this is a guard clause for whether each index of an array is a number and if it isnt then return false

//         if(number % 2 !== 0){
//             oddNumbers.push(number);
//         }
//     }
//     return oddNumbers;
// }
// console.log(removeTheEvens([62, 3, 2, 8, 531, 7]));

// if(Array.isArray(input array here)) this is a guard clause that checks if the input is an array or not




